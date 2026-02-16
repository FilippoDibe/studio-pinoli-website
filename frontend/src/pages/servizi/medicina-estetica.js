import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Treatments data
const treatments = [
  {
    title: "Filler",
    description: "Trattamenti di riempimento con acido ialuronico per ridurre rughe e donare volume al viso.",
    icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  },
  {
    title: "Biorivitalizzazione",
    description: "Trattamenti per stimolare la produzione naturale di collagene e migliorare l'idratazione della pelle.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    title: "Mesoterapia",
    description: "Microiniezioni di principi attivi per trattare inestetismi cutanei e migliorare la qualità della pelle.",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
  },
  {
    title: "Anti-aging",
    description: "Protocolli completi per contrastare i segni del tempo e mantenere una pelle giovane e luminosa.",
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  },
];

// Benefits
const benefits = [
  {
    title: "Risultati Naturali",
    description: "Trattamenti mirati per migliorare la tua bellezza naturale senza stravolgere i lineamenti.",
  },
  {
    title: "Non Invasivo",
    description: "Procedure ambulatoriali senza chirurgia, con tempi di recupero minimi o nulli.",
  },
  {
    title: "Personalizzato",
    description: "Ogni trattamento è studiato sulle tue specifiche esigenze e caratteristiche.",
  },
  {
    title: "Sicuro",
    description: "Utilizziamo solo prodotti certificati e tecniche all'avanguardia.",
  },
];

// FAQ data
const faqs = [
  {
    question: "I trattamenti di medicina estetica sono dolorosi?",
    answer: "La maggior parte dei trattamenti prevede l'utilizzo di anestesici topici che rendono la procedura confortevole. Potresti avvertire un leggero fastidio durante le iniezioni, ma nulla di significativo.",
  },
  {
    question: "Quanto durano i risultati dei filler?",
    answer: "I risultati dei filler con acido ialuronico durano generalmente dai 6 ai 12 mesi, a seconda della zona trattata e del metabolismo individuale. Con trattamenti di mantenimento i risultati possono durare più a lungo.",
  },
  {
    question: "Ci sono effetti collaterali?",
    answer: "Gli effetti collaterali sono generalmente lievi e temporanei: rossore, leggero gonfiore o piccoli ematomi nella zona trattata. Questi sintomi si risolvono spontaneamente in pochi giorni.",
  },
  {
    question: "Da che età si possono fare trattamenti estetici?",
    answer: "Non c'è un'età specifica per iniziare. La biorivitalizzazione può essere indicata già dai 30 anni come prevenzione, mentre i filler vengono consigliati quando si manifestano i primi segni del tempo.",
  },
];

const relatedServices = [
  {
    title: "Odontoiatria",
    description: "Cure odontoiatriche di eccellenza per il tuo sorriso.",
    href: "/servizi/odontoiatria",
    image: "/media/studio-pinoli-social-3/images/image-013-foto-nastia-cc1a9446.jpg",
  },
  {
    title: "Bionutrizione",
    description: "Diete personalizzate per il tuo benessere completo.",
    href: "/servizi/bionutrizione",
    image: "/media/studio-pinoli-social-3/images/image-024-foto-nastia-cc1a9492.jpg",
  },
  {
    title: "Medicina Integrata",
    description: "Approccio olistico per mente e corpo.",
    href: "/servizi/medicina-integrata",
    image: "/media/studio-pinoli-social-3/images/image-036-foto-nastia-cc1a9553.jpg",
  },
];

// FAQ Item Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item-styled ${isOpen ? "open" : ""}`}>
      <button className="faq-question-styled" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <svg className="faq-icon-styled" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </button>
      <div className="faq-answer-styled">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function MedicinaEstetica() {
  return (
    <>
      <Head>
        <title>Medicina Estetica | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Medicina estetica a Milano: filler, biorivitalizzazione, mesoterapia, trattamenti anti-aging. Risultati naturali con approccio non invasivo."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero aesthetic">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/media/studio-pinoli-social-3/images/image-057-foto-nastia-cc1a9651.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/i-nostri-servizi">Servizi</Link>
              <span>/</span>
              <span>Medicina Estetica</span>
            </nav>
            <h1>Medicina Estetica</h1>
            <p>
              Trattamenti estetici non invasivi per esaltare la tua bellezza naturale.
              Filler, biorivitalizzazione e protocolli anti-aging per risultati armoniosi.
            </p>
            <div className="page-hero-ctas">
              <Link href="/contatti" className="btn btn-primary">
                Prenota una consulenza
              </Link>
              <a href="tel:+390242272381" className="btn btn-secondary">
                Chiama: 02 4272381
              </a>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section">
          <div className="container">
            <div className="two-col-section">
              <div className="two-col-content">
                <h2>Bellezza Naturale, Risultati Visibili</h2>
                <p>
                  La nostra filosofia di medicina estetica si basa sull'esaltazione
                  della bellezza naturale di ogni persona. Non stravolgiamo i lineamenti,
                  ma lavoriamo per valorizzare ciò che rende unico ogni volto.
                </p>
                <p>
                  Utilizziamo solo prodotti di alta qualità e tecniche all'avanguardia
                  per garantire risultati naturali, sicuri e duraturi. Ogni trattamento
                  viene personalizzato in base alle tue esigenze specifiche.
                </p>
                <ul>
                  <li>Approccio non invasivo</li>
                  <li>Risultati naturali e armoniosi</li>
                  <li>Prodotti di alta qualità certificati</li>
                  <li>Trattamenti personalizzati</li>
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/media/studio-pinoli-social-3/images/image-042-foto-nastia-cc1a9571.jpg"
                  alt="Trattamento di medicina estetica"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I nostri trattamenti</span>
              <h2 className="section-title">Servizi di Medicina Estetica</h2>
            </div>

            <div className="sub-services-grid sub-services-grid--two">
              {treatments.map((treatment, index) => (
                <div key={index} className="sub-service-card" style={{ borderColor: "var(--color-aesthetic)" }}>
                  <div className="sub-service-icon" style={{ color: "var(--color-aesthetic)" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
                      <path d={treatment.icon} />
                    </svg>
                  </div>
                  <h4>{treatment.title}</h4>
                  <p>{treatment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I vantaggi</span>
              <h2 className="section-title">Perché Scegliere i Nostri Trattamenti</h2>
            </div>

            <div className="value-props-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="value-prop-item">
                  <div className="value-prop-icon" style={{ background: "rgba(142, 68, 173, 0.1)", color: "var(--color-aesthetic)" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image + Text Section */}
        <section className="section section-light">
          <div className="container">
            <div className="two-col-section reverse">
              <div className="two-col-image">
                <Image
                  src="/media/studio-pinoli-social-3/images/image-017-foto-nastia-cc1a9464.jpg"
                  alt="Risultati medicina estetica"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <div className="two-col-content">
                <h2>Un Approccio Integrato alla Bellezza</h2>
                <p>
                  La medicina estetica nel nostro studio si integra perfettamente con
                  gli altri servizi che offriamo. Crediamo che la vera bellezza nasca
                  dal benessere globale della persona.
                </p>
                <p>
                  Per questo, oltre ai trattamenti estetici, possiamo consigliarti
                  percorsi di nutrizione e benessere che completano e potenziano i
                  risultati dei trattamenti.
                </p>
                <Link href="/contatti" className="btn btn-outline" style={{ borderColor: "var(--color-aesthetic)", color: "var(--color-aesthetic)" }}>
                  Prenota una consulenza gratuita
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" style={{ background: "var(--color-aesthetic)" }}>
          <div className="container">
            <h2>Scopri i Nostri Trattamenti Estetici</h2>
            <p>
              Prenota una consulenza per scoprire quali trattamenti sono più adatti
              a valorizzare la tua bellezza naturale.
            </p>
            <div className="cta-buttons">
              <Link href="/contatti" className="btn btn-primary">
                Prenota una consulenza
              </Link>
              <a href="tel:+390242272381" className="btn btn-secondary">
                Chiama: 02 4272381
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Hai domande?</span>
              <h2 className="section-title">Domande Frequenti</h2>
            </div>

            <div className="faq-section-styled">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Scopri anche</span>
              <h2 className="section-title">Altri Servizi</h2>
            </div>

            <div className="services-grid">
              {relatedServices.map((service) => (
                <article key={service.href} className="service-card">
                  <div className="service-card-photo">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>
                  <div className="service-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href={service.href} className="btn btn-outline">
                      Scopri di più
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
