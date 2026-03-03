import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Campi obbligatori mancanti." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const serviceLabel = service || "Non specificato";

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a5fb4; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h2 style="color: #fff; margin: 0; font-size: 20px;">Nuova richiesta dal sito — Studio Pinoli</h2>
      </div>
      <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 140px; color: #555;">Nome</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #555;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #1a5fb4;">${email}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #555;">Telefono</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${phone || "—"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #555;">Servizio</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${serviceLabel}</td></tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="font-weight: 600; color: #555; margin: 0 0 8px;">Messaggio</p>
          <p style="background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">Messaggio inviato da studiopinoli.it — ${new Date().toLocaleString("it-IT")}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Studio Pinoli — Sito" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuova richiesta da ${name} — ${serviceLabel}`,
      html: htmlBody,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Studio Pinoli" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Abbiamo ricevuto la tua richiesta — Studio Pinoli",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a5fb4; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">Grazie, ${name}!</h2>
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
