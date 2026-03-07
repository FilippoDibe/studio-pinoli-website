import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const whenUseful = [
  "Dolori mandibolari e disturbi dell'ATM",
  "Cefalee e tensioni muscolari del viso e del collo",
  "Rigidità cervicale e problemi posturali",
  "Dolori muscolo-scheletrici",
  "Limitazioni nei movimenti della mandibola",
  "Squilibri posturali e compensi corporei",
];

const benefits = [
  {
    title: "Approccio Manuale",
    description: "Tecniche specifiche su muscoli, articolazioni e tessuti per ripristinare l'equilibrio funzionale del corpo.",
  },
  {
    title: "Integrazione con l'Odontoiatria",
    description: "Collaborazione diretta con il team odontoiatrico per trattare i disturbi dell'ATM in modo completo.",
  },
  {
    title: "Valutazione Personalizzata",
    description: "Ogni percorso parte da un'analisi approfondita per individuare le cause e non solo il sintomo.",
  },
  {
    title: "Benessere Duraturo",
    description: "L'obiettivo è migliorare la mobilità articolare e favorire il naturale equilibrio del corpo nel tempo.",
  },
];

const faqs = [
  {
    question: "Cos'è l'osteopatia e come funziona?",
    answer: "L'osteopatia è una disciplina manuale che mira a ristabilire l'equilibrio funzionale del corpo attraverso tecniche specifiche su muscoli, articolazioni e tessuti. Agisce sulle tensioni che limitano la mobilità e il corretto funzionamento del corpo.",
  },
  {
    question: "Qual è il legame tra osteopatia e problemi dentali?",
    answer: "L'articolazione temporo-mandibolare (ATM) è strettamente connessa a postura, colonna cervicale e sistema cranio-sacrale. Spesso i disturbi mandibolari si associano a tensioni muscolari, cefalee e dolori cervicali che l'osteopatia può aiutare a risolvere in sinergia con l'odontoiatria.",
  },
  {
    question: "Quante sedute sono necessarie?",
    answer: "Il numero di sedute varia in base alla situazione clinica e agli obiettivi del paziente. Dopo una prima valutazione il professionista definirà un percorso personalizzato, con controlli periodici per monitorare i progressi.",
  },
  {
    question: "Il trattamento osteopatico è doloroso?",
    answer: "No. Le tecniche osteopatiche sono generalmente delicate e non invasive. Potrebbe esserci una leggera sensazione di pressione durante alcune manovre, ma non dolore. Dopo la seduta è normale avvertire un senso di rilassamento muscolare.",
  },
];

const relatedServices = [
  {
    title: "Odontoiatria",
    description: "Cure odontoiatriche di eccellenza, con attenzione all'ATM.",
    href: "/servizi/odontoiatria",
    image: "/foto/image-013-foto-nastia-cc1a9446.jpg",
  },
  {
    title: "Medicina Integrata",
    description: "Approccio olistico per mente e corpo in equilibrio.",
    href: "/servizi/medicina-integrata",
    image: "/foto/image-036-foto-nastia-cc1a9553.jpg",
  },
  {
    title: "Bionutrizione",
    description: "Piani alimentari personalizzati per il tuo benessere.",
    href: "/servizi/bionutrizione",
    image: "/foto/image-024-foto-nastia-cc1a9492.jpg",
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
        {/* Hero Section */}
        <section className="service-hero osteopatia">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-045-foto-nastia-cc1a9602.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
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
              funzionale attraverso tecniche manuali su muscoli, articolazioni e tessuti —
              in sinergia con l'odontoiatria per trattare i disturbi dell'ATM.
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

        {/* Overview */}
        <section className="section">
          <div className="container">
            <div className="two-col-section">
              <div className="two-col-content">
                <h2>Osteopatia Integrata con l'Odontoiatria</h2>
                <p>
                  Nel nostro studio l'approccio osteopatico si integra con l'odontoiatria
                  ed è particolarmente utile nel trattamento dei disturbi dell'articolazione
                  temporo-mandibolare (ATM), spesso associati a tensioni muscolari, mal di
                  testa, dolori cervicali o difficoltà nei movimenti della mandibola.
                </p>
                <p>
                  Grazie a una valutazione personalizzata, il trattamento osteopatico aiuta
                  a ridurre le tensioni, migliorare la mobilità articolare e favorire il
                  naturale equilibrio del corpo. L'osteopatia lavora sull'intero sistema
                  corporeo per favorire una migliore armonia tra struttura, movimento e postura.
                </p>
              </div>
              <div className="two-col-image">
                <Image
                  src="/foto/image-038-foto-nastia-cc1a9559.jpg"
                  alt="Trattamento osteopatico Studio Pinoli Milano"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* When Useful */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Indicazioni cliniche</span>
              <h2 className="section-title">Quando Può Essere Utile l'Osteopatia</h2>
              <p style={{ maxWidth: 640, margin: "0 auto", color: "var(--gray-500)", textAlign: "center" }}>
                Il trattamento osteopatico può rappresentare un valido supporto in presenza di:
              </p>
            </div>

            <div className="highlight-list">
              {whenUseful.map((item, i) => (
                <div key={i} className="highlight-item">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--color-osteopatia)" }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrated Approach */}
        <section className="section">
          <div className="container">
            <div className="two-col-section reverse">
              <div className="two-col-image">
                <Image
                  src="/foto/image-043-foto-nastia-cc1a9578.jpg"
                  alt="Approccio integrato osteopatia e odontoiatria Studio Pinoli"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <div className="two-col-content">
                <h2>Un Approccio Integrato alla Salute</h2>
                <p>
                  Nel nostro studio l'osteopatia si inserisce in un percorso multidisciplinare
                  che coinvolge odontoiatria, gnatologia e altre discipline orientate al
                  benessere della persona.
                </p>
                <p>
                  Questo approccio integrato consente di intervenire non solo sul sintomo,
                  ma anche sulle cause che possono contribuire ai disturbi muscolari e
                  articolari, offrendo una risposta terapeutica più completa ed efficace.
                </p>
                <Link
                  href="/contatti"
                  className="btn btn-outline"
                  style={{ borderColor: "var(--color-osteopatia)", color: "var(--color-osteopatia)" }}
                >
                  Prenota una valutazione
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I vantaggi</span>
              <h2 className="section-title">Perché Scegliere l'Osteopatia nel Nostro Studio</h2>
            </div>
            <div className="value-props-grid">
              {benefits.map((b, i) => (
                <div key={i} className="value-prop-item">
                  <div className="value-prop-icon" style={{ background: "rgba(63, 81, 181, 0.1)", color: "var(--color-osteopatia)" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h4>{b.title}</h4>
                  <p>{b.description}</p>
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
              <Link href="/contatti" className="btn btn-primary">
                Prenota ora
              </Link>
              <a href="tel:+390242272381" className="btn btn-secondary">
                Chiama: 02 4272381
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
