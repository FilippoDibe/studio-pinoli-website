import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Contact methods
const contactMethods = [
  {
    icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
    title: "Telefono",
    value: "02 4272381",
    link: "tel:+390242272381",
    description: "Lun - Ven: 9:00 - 19:00"
  },
  {
    icon: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
    title: "Cellulare",
    value: "331 4773905",
    link: "tel:+393314773905",
    description: "Anche WhatsApp"
  },
  {
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    title: "Email",
    value: "info@studiopinoli.it",
    link: "mailto:info@studiopinoli.it",
    description: "Rispondiamo entro 24h"
  }
];

// FAQ
const faqs = [
  {
    question: "Quali sono gli orari di apertura?",
    answer: "Lo studio è aperto dal lunedì al venerdì, dalle 9:00 alle 19:00. Per urgenze fuori orario, potete contattarci via WhatsApp."
  },
  {
    question: "Come posso prenotare un appuntamento?",
    answer: "Potete prenotare telefonicamente, via email, tramite WhatsApp oppure compilando il form di contatto in questa pagina. Vi ricontatteremo entro 24 ore."
  },
  {
    question: "Dove si trova lo studio?",
    answer: "Siamo in Via G. Chiminello 6, 20146 Milano (zona Certosa). Lo studio è facilmente raggiungibile con i mezzi pubblici e dispone di parcheggi nelle vicinanze."
  },
  {
    question: "Accettate pagamenti rateizzati?",
    answer: "Sì, offriamo diverse soluzioni di pagamento dilazionato per venire incontro alle esigenze dei nostri pazienti. Contattateci per maggiori informazioni."
  }
];

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Contatti | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Contatta Studio Pinoli Milano. Prenota un appuntamento per odontoiatria, bionutrizione, medicina estetica o medicina integrata. Tel: 02 4272381"
        />
      </Head>

      <main id="main-content">
        {/* Hero */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/media/studio-pinoli-social-3/images/image-010-foto-nastia-cc1a3172.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Contatti</span>
            </nav>
            <h1>Contattaci</h1>
            <p>
              Siamo qui per te. Contattaci per prenotare un appuntamento o per
              qualsiasi informazione sui nostri servizi.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section">
          <div className="container">
            <div className="contact-methods-grid">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method-card"
                >
                  <div className="contact-method-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d={method.icon} />
                    </svg>
                  </div>
                  <h3>{method.title}</h3>
                  <p className="contact-method-value">{method.value}</p>
                  <p className="contact-method-description">{method.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form and Map Section */}
        <section className="section section-light">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <div className="section-header" style={{ textAlign: "left", marginBottom: "32px" }}>
                  <span className="section-subtitle">Scrivici</span>
                  <h2 className="section-title">Richiedi Informazioni</h2>
                  <p>
                    Compila il form e ti ricontatteremo entro 24 ore lavorative.
                  </p>
                </div>

                {formStatus === "success" && (
                  <div className="form-success-message">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <div>
                      <strong>Messaggio inviato con successo!</strong>
                      <p>Ti ricontatteremo al più presto.</p>
                    </div>
                  </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nome e Cognome *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="la.tua@email.it"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+39 xxx xxx xxxx"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Servizio di interesse</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Seleziona un servizio</option>
                        <option value="odontoiatria">Odontoiatria</option>
                        <option value="bionutrizione">Bionutrizione</option>
                        <option value="medicina-estetica">Medicina Estetica</option>
                        <option value="medicina-integrata">Medicina Integrata</option>
                        <option value="prima-visita">Prima Visita Gratuita</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Messaggio *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Descrivi brevemente le tue esigenze..."
                    />
                  </div>

                  <div className="form-footer">
                    <p className="form-privacy">
                      Inviando questo form accetti la nostra{" "}
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </p>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Invia Messaggio
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* Map and Info */}
              <div className="contact-info-wrapper">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4!2d9.14!3d45.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI5JzI0LjAiTiA5wrAwOCcyNC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa Studio Pinoli"
                  />
                </div>

                <div className="contact-address-card">
                  <h3>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Studio Pinoli
                  </h3>
                  <address>
                    <strong>Via G. Chiminello 6</strong><br />
                    20146 Milano (Certosa) MI
                  </address>
                  <div className="contact-directions">
                    <a
                      href="https://maps.google.com/?q=Via+G.+Chiminello+6+20146+Milano"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                      </svg>
                      Indicazioni stradali
                    </a>
                  </div>
                </div>

                <div className="contact-hours-card">
                  <h4>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    Orari di Apertura
                  </h4>
                  <ul className="hours-list">
                    <li>
                      <span>Lunedì - Venerdì</span>
                      <strong>9:00 - 19:00</strong>
                    </li>
                    <li>
                      <span>Sabato</span>
                      <strong>Su appuntamento</strong>
                    </li>
                    <li>
                      <span>Domenica</span>
                      <strong>Chiuso</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Domande frequenti</span>
              <h2 className="section-title">FAQ</h2>
            </div>

            <div className="faq-grid contact-faq">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? "open" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="faq-icon"
                    >
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

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Preferisci Parlare con Noi?</h2>
            <p>
              Il nostro team è a tua disposizione per qualsiasi domanda o per
              aiutarti a prenotare il tuo appuntamento.
            </p>
            <div className="cta-buttons">
              <a href="tel:+390242272381" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Chiama: 02 4272381
              </a>
              <a
                href="https://wa.me/393314773905"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
