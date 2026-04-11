import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/medicina-estetica.module.css";

const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";

// Treatments data
const treatments = [
  {
    title: "Filler",
    description: "Filler labbra, zigomi iduzione delle rughe, definizione dei contorni e volume naturale al viso. Risultati immediati.",
    icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  },
  {
    title: "Biorivitalizzazione",
    description: "Microiniezioni per stimolare il collagene, idratare la pelle in profondità e migliorarne luminosità e tono. Ideale per la prevenzione anti-aging.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    title: "Mesoterapia",
    description: "Microiniezioni di principi attivi per trattare inestetismi cutanei (cellulite, adipe, invecchiamento cutaneo) o dolori (artrosi, contratture).",
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
    image: "/servizi/odontoriatria.jpg",
  },
  {
    title: "Bionutrizione",
    description: "Diete personalizzate per il tuo benessere completo.",
    href: "/servizi/bionutrizione",
    image: "/servizi/Biochimica-nutrizione_Immagine_blog-.jpg",
  },
  {
    title: "Osteopatia",
    description: "Trattamenti manuali per il benessere muscolare e articolare.",
    href: "/servizi/osteopatia",
    image: "/servizi/osteopatia.jpg",
  },
  {
    title: "Art-Terapia",
    description: "Percorsi creativi per il benessere emotivo e psicologico.",
    href: "/servizi/art-terapia",
    image: "/servizi/art-terapia-hd.jpg",
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
        <title>Medicina Estetica a Milano — Filler e Anti-aging | Studio Pinoli</title>
        <meta
          name="description"
          content="Medicina estetica a Milano: filler acido ialuronico, biorivitalizzazione, mesoterapia e trattamenti anti-aging viso. Risultati naturali, approccio non invasivo. Studio Pinoli."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero aesthetic">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-057-foto-nastia-cc1a9651.jpg')" }}
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
            <h1>Medicina Estetica a Milano</h1>
            <p>
              Eseguiamo trattamenti estetici non invasivi per esaltare la tua bellezza naturale. Filler, biorivitalizzazione, mesoterapia e protocolli anti-aging per risultati visibili e armoniosi.
            </p>
            <div className="page-hero-ctas">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Prenota un trattamento
              </Link>
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama in Studio
              </a>
            </div>
          </div>
        </section>

        {/* Overview Section */}

        {/* Quote Section */}
        <section className={styles.quoteSection}>
          <div className="container">
            <blockquote className={styles.quote}>
              <span className={styles.quoteMark}>"</span>
              La vera bellezza nasce dall'armonia tra salute e cura di sé.
              <footer className={styles.quoteFooter}>Studio Pinoli — Milano</footer>
            </blockquote>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I nostri trattamenti</span>
              <h2 className="section-title">Servizi di Medicina Estetica</h2>
            </div>

            <div className={styles.luxuryGrid}>
              {treatments.map((treatment, index) => (
                <div key={index} className={styles.luxuryCard}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d={treatment.icon} />
                  </svg>
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

            <div className={styles.elegantBenefits}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.elegantBenefit}>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="cta-section"
          style={{ background: "linear-gradient(135deg, #5a3050 0%, #7d4a6f 50%, #9b5f8a 100%)" }}
        >
          <div className="container">
            <h2>Prenota una Consulenza di Medicina Estetica a Milano</h2>
            <p>
              Scopri quali trattamenti estetici a Milano sono più adatti a valorizzare la tua bellezza naturale.
             Il nostro team di esperti ti guidera verso il risultato migliore per te.
            </p>
            <div className="cta-buttons">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Prenota un trattamento
              </Link>
              <a href="tel:393316713904" className="btn btn-secondary">
                Chiama in Studio
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
              <h2 className="section-title">Scopri Altre Soluzioni Terapeutiche</h2>
              <p className="section-description">Scopri le altre soluzioni terapeutiche pensate per la salute globale della persona.</p>
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
