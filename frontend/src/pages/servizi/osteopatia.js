import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/osteopatia.module.css";

const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";

const treatments = [
  {
    title: "Approccio Manuale",
    description: "Tecniche specifiche su muscoli, articolazioni e tessuti per ripristinare l'equilibrio funzionale del corpo.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Integrazione con l'Odontoiatria",
    description: "Collaborazione diretta con il team odontoiatrico per trattare i disturbi dell'ATM in modo completo.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Valutazione Personalizzata",
    description: "Ogni percorso parte da un'analisi approfondita per individuare le cause e non solo il sintomo.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Benessere Duraturo",
    description: "L'obiettivo è migliorare la mobilità articolare e favorire il naturale equilibrio del corpo nel tempo.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 13H11v-4h1.5v4zm0-6H11V7h1.5v2z",
  },
];

const whenUseful = [
  "Dolori mandibolari e disturbi dell'ATM",
  "Cefalee e tensioni muscolari del viso e del collo",
  "Rigidità cervicale e problemi posturali",
  "Dolori muscolo-scheletrici",
  "Limitazioni nei movimenti della mandibola",
  "Squilibri posturali e compensi corporei",
];

const faqs = [
  {
    question: "Cos'è l'osteopatia e a cosa serve?",
    answer: "L'osteopatia è una disciplina manuale che mira a migliorare mobilità, postura ed equilibrio del corpo attraverso tecniche specifiche.",
  },
  {
    question: "Per quali problemi è utile l'osteopatia?",
    answer: "È spesso utilizzata per dolori cervicali, mal di schiena, tensioni muscolari, disturbi posturali e rigidità articolare.",
  },
  {
    question: "Quante sedute di osteopatia sono necessarie?",
    answer: "Dipende dal problema e dalla risposta del corpo al trattamento. Dopo la valutazione iniziale viene definito un percorso personalizzato.",
  },
  {
    question: "L'osteopatia è dolorosa?",
    answer: "No. Le tecniche osteopatiche sono generalmente delicate e adattate alla condizione del paziente.",
  },
  {
    question: "L'osteopatia può essere integrata con altri trattamenti?",
    answer: "Sì. In molti casi può essere associata a percorsi nutrizionali o odontoiatrici per migliorare l'equilibrio generale del corpo.",
  },
];

const relatedServices = [
  {
    title: "Odontoiatria",
    description: "Cure odontoiatriche di eccellenza, con attenzione all'ATM.",
    href: "/servizi/odontoiatria",
    image: "/servizi/odontoriatria.jpg",
  },
  {
    title: "Bionutrizione",
    description: "Piani alimentari personalizzati per il tuo benessere.",
    href: "/servizi/bionutrizione",
    image: "/servizi/Biochimica-nutrizione_Immagine_blog-.jpg",
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti estetici non invasivi e naturali.",
    href: "/servizi/medicina-estetica",
    image: "/servizi/medicinaestetica.jpg",
  },
  {
    title: "Art-Terapia",
    description: "Percorsi creativi per il benessere emotivo e psicologico.",
    href: "/servizi/art-terapia",
    image: "/servizi/art-terapia-hd.jpg",
  },
];

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

export default function Osteopatia() {
  return (
    <>
      <Head>
        <title>Osteopatia a Milano — Equilibrio e Benessere | Studio Pinoli</title>
        <meta
          name="description"
          content="Osteopatia a Milano: trattamenti manuali per disturbi dell'ATM, cefalee, rigidità cervicale e dolori muscolo-scheletrici. Approccio integrato con l'odontoiatria. Studio Pinoli."
        />
      </Head>

      <main id="main-content">
        {/* Hero */}
        <section className="service-hero osteopatia">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-045-foto-nastia-cc1a9602.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <div className={styles.heroLeft}>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/i-nostri-servizi">Servizi</Link>
                <span>/</span>
                <span>Osteopatia</span>
              </nav>
              <h1>Osteopatia a Milano</h1>
              <p>
                Equilibrio e benessere per il tuo corpo. L'osteopatia ristabilisce l'equilibrio
                funzionale attraverso tecniche manuali su muscoli, articolazioni e tessuti
                in sinergia con l'odontoiatria per trattare i disturbi dell'ATM.
              </p>
              <div className="page-hero-ctas">
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Prenota una visita
                </Link>
                <a href="tel:+393316713904" className="btn btn-secondary">
                  Chiama ora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className={styles.quoteSection}>
          <div className="container">
            <blockquote className={styles.quote}>
              <span className={styles.quoteMark}>"</span>
              Il corpo parla. L'osteopatia ascolta e risponde.
              <footer className={styles.quoteFooter}>Studio Pinoli — Milano</footer>
            </blockquote>
          </div>
        </section>

        {/* Specialist */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il tuo specialista</span>
              <h2 className="section-title">Chi Ti Seguirà</h2>
            </div>
            <div className="specialist-solo-card" style={{ "--specialist-accent": "var(--color-osteopatia)" }}>
              <div className="specialist-photo-wrap">
                <Image
                  src="/team/ALESSANDRO.jpeg"
                  alt="Dr. Alessandro Ploner — Osteopata Studio Pinoli Milano"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 50%" }}
                  sizes="340px"
                />
              </div>
              <div className="specialist-info-panel">
                <span className="specialist-role-tag">Osteopatia</span>
                <h3>Dr. Alessandro Ploner</h3>
                <span className="specialist-sub-role">Osteopata</span>
                <p>Osteopata specializzato nel trattamento di disfunzioni muscolo-scheletriche, posturali e cranio-sacrali. Collabora con l'équipe medica dello studio in ottica integrata, offrendo percorsi per dolori cronici, tensioni cervicali e problematiche correlate alla salute orale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I nostri trattamenti</span>
              <h2 className="section-title">Servizi di Osteopatia</h2>
            </div>
            <div className={styles.luxuryGrid}>
              {treatments.map((t, i) => (
                <div key={i} className={styles.luxuryCard}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d={t.icon} />
                  </svg>
                  <h4>{t.title}</h4>
                  <p>{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When Useful */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Indicazioni cliniche</span>
              <h2 className="section-title">Quando Può Essere Utile l'Osteopatia</h2>
            </div>
            <div className={styles.elegantBenefits}>
              {whenUseful.map((item, i) => (
                <div key={i} className={styles.elegantBenefit}>
                  <h4>{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" style={{ background: "var(--color-osteopatia)" }}>
          <div className="container">
            <h2>Prenota una Consulenza Osteopatica a Milano</h2>
            <p>
              Una valutazione personalizzata permetterà di individuare il percorso più adatto
              alle tue esigenze e migliorare il tuo benessere muscolare e articolare.
            </p>
            <div className="cta-buttons">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Prenota ora
              </Link>
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama ora
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Hai domande?</span>
              <h2 className="section-title">Domande Frequenti</h2>
            </div>
            <div className="faq-section-styled">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
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
