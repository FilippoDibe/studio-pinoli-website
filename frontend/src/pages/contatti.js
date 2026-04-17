import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Come prenotare una visita dentistica a Milano?",
    answer: "È possibile prenotare un appuntamento contattando lo studio telefonicamente o compilando il modulo di contatto presente sul sito."
  },
  {
    question: "Dove si trova lo studio dentistico?",
    answer: "Lo studio si trova a Milano ed è facilmente raggiungibile sia con i mezzi pubblici sia in auto."
  },
  {
    question: "È possibile richiedere informazioni prima di prenotare?",
    answer: "Sì. Lo staff dello studio è disponibile per fornire informazioni sui servizi e sulle modalità di visita."
  },
  {
    question: "Cosa fare in caso di urgenza dentale?",
    answer: "In caso di dolore o urgenza è consigliabile contattare lo studio il prima possibile per valutare una visita nel più breve tempo possibile."
  },
  {
    question: "Come modificare o spostare un appuntamento?",
    answer: "Per modificare o annullare un appuntamento è sufficiente contattare lo studio con anticipo."
  }
];

export default function Contatti() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "", privacy: false, website: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "", privacy: false, website: "" });
      } else {
        setFormStatus(data.error || "Errore nell'invio. Riprova.");
      }
    } catch {
      setFormStatus("Errore di rete. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contatti | Studio Dentistico Pinoli Milano — Prenota una Visita</title>
        <meta name="description" content="Contatta Studio Pinoli in Via Domenico Cimarosa 4, Milano. Prenota una visita dal dentista, una consulenza nutrizionale o un trattamento estetico. Tel: +39 331 671 3904 — Anche WhatsApp." />
        <meta property="og:title" content="Contatti | Studio Dentistico Pinoli Milano" />
        <meta property="og:description" content="Via Domenico Cimarosa 4, 20144 Milano. Tel: +39 331 671 3904. Prenota una visita o richiedi informazioni — rispondiamo anche su WhatsApp." />
        <meta property="og:image" content="https://www.studiopinoli.it/foto/image-003-foto-anna-sof-5706.jpg" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </Head>

      <main id="main-content">

        {/* ── Hero Mappa ── */}
        <section className="contact-map-hero">
          {/* Mappa a schermo intero */}
          <iframe
            src="https://maps.google.com/maps?q=Via+Domenico+Cimarosa+4,+20144+Milano+MI&output=embed&hl=it"
            width="100%"
            height="100%"
            style={{ position: "absolute", inset: 0, border: 0, display: "block", filter: "grayscale(15%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Studio Pinoli"
          />

          {/* Card info sovrapposta */}
         
        </section>

        {/* ── Form + Sidebar ── */}
        <section className="section section-light">
          <div className="container">
            <div className="contact-grid">

              {/* FORM */}
              <div className="contact-form-wrapper">
                <div className="section-header" style={{ textAlign: "left", marginBottom: "32px" }}>
                  <span className="section-subtitle">Scrivici</span>
                  <h2 className="section-title">Richiedi Informazioni</h2>
                  <p>Compila il form e ti ricontatteremo entro 24 ore lavorative.</p>
                </div>

                {formStatus === "success" && (
                  <div className="form-success-message">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <div>
                      <strong>Messaggio inviato con successo!</strong>
                      <p>Ti ricontatteremo entro 24 ore. Riceverai una conferma via email.</p>
                    </div>
                  </div>
                )}
                {formStatus && formStatus !== "success" && (
                  <div className="form-error-message">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    <div><strong>{formStatus}</strong></div>
                  </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  {/* Honeypot: nascosto agli utenti, i bot lo compilano → viene rigettato lato server */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="website">Non compilare questo campo</label>
                    <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nome e Cognome *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Il tuo nome" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="la.tua@email.it" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefono</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+39 xxx xxx xxxx" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Servizio di interesse</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Seleziona un servizio</option>
                        <option value="odontoiatria">Odontoiatria</option>
                        <option value="bio-nutrizione">Bio-nutrizione</option>
                        <option value="medicina-estetica">Medicina Estetica</option>
                        <option value="osteopatia">Osteopatia</option>
                        <option value="art-terapia">Art-Terapia</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Messaggio *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Descrivi brevemente le tue esigenze..." />
                  </div>
                  <div className="form-gdpr">
                    <label className="form-gdpr-label">
                      <input
                        type="checkbox"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                      />
                      <span>
                        Ho letto e acconsento al trattamento dei miei dati personali ai sensi del{" "}
                        <abbr title="Regolamento Generale sulla Protezione dei Dati">GDPR</abbr>{" "}
                        (Reg. UE 2016/679) e della{" "}
                        <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                          Privacy Policy
                        </Link>
                        . *
                      </span>
                    </label>
                  </div>
                  <div className="form-footer">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting || !formData.privacy}
                    >
                      {isSubmitting ? "Invio in corso…" : "Invia Messaggio"}
                      {!isSubmitting && (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* SIDEBAR */}
              <div className="contact-info-wrapper">

                {/* Contatti rapidi */}
                <div style={{
                  background: "var(--white)",
                  border: "1px solid var(--gray-200)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  marginBottom: "16px",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--gray-800)", marginBottom: "16px" }}>
                    Contatti Diretti
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <a href="tel:+393316713904" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "inherit" }}>
                      <span style={{ width: 36, height: 36, borderRadius: "var(--radius)", background: "var(--gray-100)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" fill="var(--primary)" width="18" height="18">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--gray-800)" }}>+39 331 671 3904</div>
                        <div style={{ fontSize: "0.8rem", color: "var(--gray-500)" }}>Lun–Ven 9:00–19:00 · Anche WhatsApp</div>
                      </div>
                    </a>
                    <a href="mailto:info@studiopinoli.it" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "inherit" }}>
                      <span style={{ width: 36, height: 36, borderRadius: "var(--radius)", background: "var(--gray-100)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" fill="var(--primary)" width="18" height="18">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--gray-800)" }}>info@studiopinoli.it</div>
                        <div style={{ fontSize: "0.8rem", color: "var(--gray-500)" }}>Risposta entro 24 ore</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Indirizzo + Orari */}
                <div className="contact-address-card" style={{ marginBottom: "16px" }}>
                  <h3>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Studio Pinoli
                  </h3>
                  <address>
                    <strong>Via Domenico Cimarosa, 4</strong><br />
                    20144 Milano (MI)
                  </address>
                  <div className="contact-directions">
                    <a
                      href="https://maps.google.com/?q=Via+Domenico+Cimarosa+4+20144+Milano"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                      </svg>
                      Indicazioni stradali
                    </a>
                  </div>
                </div>

                {/* Come raggiungerci — compatto */}
                <div style={{
                  background: "var(--white)",
                  border: "1px solid var(--gray-200)",
                  borderRadius: "var(--radius-lg)",
                  padding: "20px 24px",
                  marginBottom: "16px",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--gray-800)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg viewBox="0 0 24 24" fill="var(--primary)" width="18" height="18">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Come Raggiungerci
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                    {/* Auto */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ width: 36, height: 36, borderRadius: "var(--radius)", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--gray-800)" }}>In Auto</div>
                        <div style={{ fontSize: "0.82rem", color: "var(--gray-500)", lineHeight: 1.5 }}>
                          Corso Vercelli · parcheggi nelle vie limitrofe
                        </div>
                      </div>
                    </div>

                    {/* Metro */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ width: 36, height: 36, borderRadius: "var(--radius)", background: "#c8102e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                          <path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z" />
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--gray-800)" }}>
                          Metro M1 <span style={{ color: "#c8102e", fontSize: "0.8rem", fontWeight: 700 }}>● Linea Rossa</span>
                        </div>
                        <div style={{ fontSize: "0.82rem", color: "var(--gray-500)", lineHeight: 1.5 }}>
                          Fermata <strong style={{ color: "var(--gray-700)" }}>Pagano</strong> · pochi minuti a piedi
                        </div>
                      </div>
                    </div>

                    {/* Tram */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ width: 36, height: 36, borderRadius: "var(--radius)", background: "#e6a020", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                          <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5V21h2.23L10 19h4l1.77 2H18v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 11H6V6h12v5z" />
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--gray-800)" }}>
                          Tram{" "}
                          {["16", "29", "30"].map(l => (
                            <span key={l} style={{ display: "inline-block", background: "#fff3d0", border: "1px solid #e6c060", borderRadius: 4, padding: "0 6px", fontSize: "0.75rem", fontWeight: 700, color: "#a07010", marginLeft: 4 }}>{l}</span>
                          ))}
                        </div>
                        <div style={{ fontSize: "0.82rem", color: "var(--gray-500)", lineHeight: 1.5 }}>
                          Corso Vercelli · fermata Via Cimarosa
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Orari */}
                <div className="contact-hours-card">
                  <h4 style={{ color: "white" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    Orari di Apertura
                  </h4>
                  <ul className="hours-list">
                    <li><span>Lunedì - Venerdì</span><strong>9:00 - 19:00</strong></li>
                    <li><span>Sabato — Domenica</span><strong>Chiuso</strong></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Domande frequenti</span>
              <h2 className="section-title">FAQ</h2>
            </div>
            <div className="faq-grid contact-faq">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openFaq === index ? "open" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="faq-icon">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
