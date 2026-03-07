import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";
// Sub-services data

// Process steps
const processSteps = [
  {
    number: "1",
    title: "Diario Alimentare",
    description: "Compila il diario alimentare per almeno 7 giorni prima della tua visita usando l'app Biotekna Plus.",
  },
  {
    number: "2",
    title: "Prima Visita",
    description: "Analizziamo insieme il tuo diario alimentare e valutiamo le tue esigenze specifiche.",
  },
  {
    number: "3",
    title: "Piano Alimentare Personalizzato",
    description: "Ricevi il tuo piano alimentare creato su misura per i tuoi obiettivi.",
  },
  {
    number: "4",
    title: "Controlli Periodici",
    description: "Monitoriamo i progressi e adattiamo il piano alimentare in base ai risultati ottenuti.",
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
    image: "/foto/image-013-foto-nastia-cc1a9446.jpg",
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti estetici non invasivi e naturali.",
    href: "/servizi/medicina-estetica",
    image: "/foto/image-025-foto-nastia-cc1a9493.jpg",
  },
  {
    title: "Medicina Integrata",
    description: "Approccio olistico per mente e corpo.",
    href: "/servizi/medicina-integrata",
    image: "/foto/image-036-foto-nastia-cc1a9553.jpg",
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
        <title>Nutrizionista a Milano — Bionutrizione | Studio Pinoli</title>
        <meta
          name="description"
          content="Nutrizionista a Milano: piani alimentari personalizzati, diete per dimagrimento, nutrizione sportiva e clinica. Studio Pinoli zona Certosa. Prenota una consulenza."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero nutrition">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-010-foto-nastia-cc1a3172.jpg')" }}
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
            <h1>Nutrizionista a Milano</h1>
            <p>
              Percorsi di nutrizione personalizzati a Milano per ritrovare equilibrio, salute e benessere. Un approccio scientifico e su misura per le esigenze del tuo organismo.
            </p>
            <div className="page-hero-ctas">
              <Link  href={BOOKING_URL}
            
                 target="_blank"
                rel="noopener noreferrer" className="btn btn-primary">
                Prenota una visita
              </Link>
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama ora
              </a>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section">
          <div className="container">
            <div className="two-col-section">
              <div className="two-col-content">
                <h2>Piani di Nutrizione Personalizzati</h2>
                <p>
                Nel nostro Studio la nutrizione è parte di un approccio integrato alla salute e al benessere della persona. Attraverso una valutazione approfondita della composizione corporea, del metabolismo e delle abitudini di vita, siamo in grado di elaborare percorsi alimentari personalizzati, costruiti sulle reali esigenze di ogni paziente.
                </p>
                <p>
               L’obiettivo non è solo raggiungere il peso forma, ma migliorare l’equilibrio dell’organismo, sostenere le performance fisiche e favorire uno stile di vita sano e duraturo nel tempo. Il percorso terapeutico comprende:
                </p>
                <ul>
                  <li>Analisi dello stato nutrizionale e metabolico</li>
                  <li>Elaborazione di un piano alimentare personalizzato</li>
                  <li>Monitoraggio periodico dei risultati ottenuti</li>
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/foto/image-055-foto-nastia-cc1a9639.jpg"
                  alt="Consulenza nutrizionista Milano — bionutrizione Studio Pinoli"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
       

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
        {/* <section className="section section-light">
          <div className="container">
            <div className="two-col-section reverse">
              <div className="two-col-image">
                <Image
                  src="/foto/image-056-foto-nastia-cc1a9642.jpg"
                  alt="Programma nutrizionale personalizzato a Milano — Studio Pinoli"
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
        </section> */}

        {/* CTA Section */}
        <section className="cta-section" style={{ background: "var(--color-nutrition)" }}>
          <div className="container">
            <h2>Prenota la tua consulenza nutrizionale</h2>
            <p>
             Scopri il percorso alimentare personalizzato più adatto al tuo stile di vita e al tuo benessere.
            </p>
            <div className="cta-buttons">
              <Link  href={BOOKING_URL}
            
                 target="_blank"
                rel="noopener noreferrer" className="btn btn-primary">
                Prenota una visita
              </Link>
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama ora
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
