import nodemailer from "nodemailer";

// ── Rate limiting (in-memory: 3 richieste per IP ogni ora) ──────────────────
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

// ── Sanitizzazione HTML (prevenzione XSS / email injection) ─────────────────
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Validazione email formato ────────────────────────────────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Servizi consentiti (whitelist) ───────────────────────────────────────────
const ALLOWED_SERVICES = new Set([
  "", "odontoiatria", "bio-nutrizione", "medicina-estetica",
  "osteopatia", "art-terapia", "altro"
]);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting per IP
  const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Troppe richieste. Riprova tra un'ora." });
  }

  const { name, email, phone, service, message, website } = req.body;

  // Honeypot: i bot compilano il campo nascosto "website", gli umani no
  if (website) {
    return res.status(200).json({ success: true }); // risposta falsa per non rivelare il check
  }

  // Validazione campi obbligatori
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Campi obbligatori mancanti." });
  }

  // Validazione lunghezze (prevenzione overflow / abuse)
  if (String(name).length > 100) return res.status(400).json({ error: "Nome troppo lungo." });
  if (String(email).length > 254) return res.status(400).json({ error: "Email non valida." });
  if (String(message).length > 2000) return res.status(400).json({ error: "Messaggio troppo lungo (max 2000 caratteri)." });
  if (phone && String(phone).length > 30) return res.status(400).json({ error: "Telefono non valido." });

  // Validazione formato email
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Indirizzo email non valido." });
  }

  // Validazione servizio (whitelist)
  if (service && !ALLOWED_SERVICES.has(service)) {
    return res.status(400).json({ error: "Servizio non valido." });
  }

  // Sanitizzazione tutti i campi prima dell'uso in HTML
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message);
  const serviceLabel = safeService || "Non specificato";

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a5fb4; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h2 style="color: #fff; margin: 0; font-size: 20px;">Nuova richiesta dal sito — Studio Pinoli</h2>
      </div>
      <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 140px; color: #555;">Nome</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${safeName}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #555;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${safeEmail}" style="color: #1a5fb4;">${safeEmail}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #555;">Telefono</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${safePhone || "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #555;">Servizio</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${serviceLabel}</td></tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="font-weight: 600; color: #555; margin: 0 0 8px;">Messaggio</p>
          <p style="background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin: 0; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">Messaggio inviato da studiopinoli.it — ${new Date().toLocaleString("it-IT")}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Studio Pinoli — Sito" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: safeEmail,
      subject: `Nuova richiesta da ${safeName} — ${serviceLabel}`,
      html: htmlBody,
    });

    // Auto-reply al mittente
    await transporter.sendMail({
      from: `"Studio Pinoli" <${process.env.SMTP_USER}>`,
      to: email, // email originale non escaped per il campo to
      subject: "Abbiamo ricevuto la tua richiesta — Studio Pinoli",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a5fb4; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">Grazie, ${safeName}!</h2>
          </div>
          <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="margin: 0 0 16px; line-height: 1.7;">Abbiamo ricevuto la tua richiesta e ti ricontatteremo entro <strong>24 ore lavorative</strong>.</p>
            <p style="margin: 0 0 24px; line-height: 1.7;">Se hai urgenza, puoi contattarci direttamente:</p>
            <p style="margin: 0 0 8px;">📞 <a href="tel:+393316713904" style="color: #1a5fb4;">+39 331 671 3904</a></p>
            <p style="margin: 0 0 24px;">📧 <a href="mailto:info@studiopinoli.it" style="color: #1a5fb4;">info@studiopinoli.it</a></p>
            <p style="margin: 0; color: #888; font-size: 13px;">— Il team di Studio Pinoli<br>Via Domenico Cimarosa, 4 — 20144 Milano</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Errore nell'invio. Riprova o contattaci direttamente." });
  }
}
