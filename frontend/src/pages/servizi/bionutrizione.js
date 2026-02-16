import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Sub-services data
const subServices = [
  {
    title: "Diete Personalizzate",
    description: "Piani alimentari su misura creati in base alle tue esigenze, obiettivi e stile di vita.",
    icon: "/images/diet.svg",
  },
  {
    title: "Consulenza Nutrizionale",
    description: "Valutazione approfondita delle tue abitudini alimentari e consigli per migliorare la tua alimentazione.",
    icon: "/images/diet-1.svg",
  },
  {
    title: "Nutrizione Sportiva",
    description: "Piani alimentari specifici per atleti e sportivi per ottimizzare prestazioni e recupero.",
    icon: "/images/exercise.svg",
  },
  {
    title: "Nutrizione Clinica",
    description: "Supporto nutrizionale per patologie specifiche come diabete, ipercolesterolemia, intolleranze.",
    icon: "/images/diet-2.svg",
  },
];

// Process steps
const processSteps = [
  {
    number: "1",
    title: "Diario Alimentare",
    description: "Compila il diario alimentare per almeno 7 giorni usando l'app MyDietPro.",
  },
  {
    number: "2",
    title: "Prima Visita",
    description: "Analizziamo insieme il tuo diario e valutiamo le tue esigenze specifiche.",
  },
  {
    number: "3",
    title: "Piano Personalizzato",
    description: "Ricevi il tuo piano alimentare creato su misura per i tuoi obiettivi.",
  },
  {
    number: "4",
    title: "Controlli Periodici",
    description: "Monitoriamo i progressi e adattiamo il piano in base ai risultati.",
  },
];

// FAQ data
const faqs = [
  {
    question: "Qual è la differenza tra una dieta personalizzata e una dieta standard?",
    answer: "Una dieta personalizzata viene creata specificamente per te, considerando il tuo metabolismo, le tue abitudini, eventuali patologie e i tuoi obiettivi. Una dieta standard propone lo stesso schema per tutti senza considerare le differenze individuali.",
  },
  {
    question: "Quanto tempo ci vuole per vedere i risultati?",
    answer: "I primi risultati sono generalmente visibili già dopo 2-3 settimane. Tuttavia, per un cambiamento duraturo dello stile alimentare consigliamo un percorso di almeno 3-6 mesi con controlli periodici.",
  },
  {
    question: "Posso fare una consulenza nutrizionale online?",
    answer: "Sì, offriamo la possibilità di effettuare una prima consulenza tramite videochiamata. Per il piano alimentare personalizzato e i controlli periodici è però necessario un appuntamento in studio.",
  },
  {
    question: "Trattate anche intolleranze e allergie alimentari?",
    answer: "Assolutamente sì. I nostri nutrizionisti sono specializzati nel trattamento di intolleranze, allergie alimentari e patologie correlate all'alimentazione.",
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
    title: "Medicina Estetica",
    description: "Trattamenti estetici non invasivi e naturali.",
    href: "/servizi/medicina-estetica",
    image: "/media/studio-pinoli-social-3/images/image-025-foto-nastia-cc1a9493.jpg",
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

export default function Bionutrizione() {
  return (
    <>
      <Head>
        <title>Bionutrizione | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Diete personalizzate e consulenze nutrizionali a Milano. Piani alimentari su misura per dimagrimento, sport e patologie. Prenota la tua consulenza."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero nutrition">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/media/studio-pinoli-social-3/images/image-010-foto-nastia-cc1a3172.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/i-nostri-servizi">Servizi</Link>
              <span>/</span>
              <span>Bionutrizione</span>
            </nav>
            <h1>Bionutrizione</h1>
            <p>
              Diete personalizzate e piani alimentari su misura per raggiungere i tuoi
              obiettivi di salute e benessere. Un approccio scientifico all'alimentazione.
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
                <h2>La Tua Salute Passa Dall'Alimentazione</h2>
                <p>
                  Il nostro servizio di Bionutrizione offre un approccio personalizzato
                  all'alimentazione. Crediamo che ogni persona sia unica e meriti un
                  piano alimentare creato su misura per le proprie esigenze.
                </p>
                <p>
                  Che tu voglia perdere peso, migliorare le tue prestazioni sportive o
                  gestire una patologia, i nostri nutrizionisti ti guideranno verso
                  uno stile di vita più sano e consapevole.
                </p>
                <ul>
                  <li>Valutazione metabolica completa</li>
                  <li>Piani alimentari personalizzati</li>
                  <li>Supporto continuativo</li>
                  <li>Approccio integrato con altre discipline</li>
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/media/studio-pinoli-social-3/images/image-055-foto-nastia-cc1a9639.jpg"
                  alt="Consulenza nutrizionale"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sub-services Grid */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I nostri servizi</span>
              <h2 className="section-title">Servizi di Bionutrizione</h2>
            </div>

            <div className="sub-services-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {subServices.map((service, index) => (
                <div key={index} className="sub-service-card">
                  <div className="sub-service-icon">
                    <Image src={service.icon} alt="" width={64} height={64} />
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il tuo percorso</span>
              <h2 className="section-title">Come Funziona</h2>
            </div>

            <div className="process-timeline">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="process-step-number" style={{ background: "var(--color-nutrition)" }}>
                    {step.number}
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section section-light">
          <div className="container">
            <div className="two-col-section reverse">
              <div className="two-col-image">
                <Image
                  src="/media/studio-pinoli-social-3/images/image-056-foto-nastia-cc1a9642.jpg"
                  alt="Benefici della nutrizione"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <div className="two-col-content">
                <h2>I Benefici di una Corretta Alimentazione</h2>
                <p>
                  Una dieta equilibrata e personalizzata può trasformare la tua vita,
                  migliorando non solo il tuo aspetto fisico ma anche la tua energia
                  e il tuo benessere generale.
                </p>
                <ul>
                  <li>Raggiungimento del peso forma ideale</li>
                  <li>Maggiore energia e vitalità</li>
                  <li>Migliore qualità del sonno</li>
                  <li>Digestione più efficiente</li>
                  <li>Prevenzione di patologie metaboliche</li>
                  <li>Miglioramento dell'umore</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" style={{ background: "var(--color-nutrition)" }}>
          <div className="container">
            <h2>Inizia Il Tuo Percorso Nutrizionale</h2>
            <p>
              Prenota una consulenza con i nostri nutrizionisti e scopri il piano
              alimentare più adatto a te.
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

            <div className="services-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
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
