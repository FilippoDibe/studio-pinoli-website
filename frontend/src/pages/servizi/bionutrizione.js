import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/bionutrizione.module.css";

const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";

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
    question: "Perché l'alimentazione è importante per la salute orale?",
    answer: "Una dieta equilibrata contribuisce alla salute delle gengive, riduce il rischio di infiammazioni e supporta il benessere generale dell'organismo.",
  },
  {
    question: "Quando è utile una consulenza nutrizionale?",
    answer: "Può essere utile in caso di squilibri alimentari, difficoltà digestive, stanchezza persistente o quando si desidera migliorare il proprio stile di vita o la propria performance sportiva.",
  },
  {
    question: "Qual è la differenza tra dietologo e nutrizionista?",
    answer: "Il dietologo è un medico laureato in medicina e chirurgia con specializzazione in scienza dell’alimentazione. Può formulare diete anche in presenza di patologie e prescrivere eventuali esami o farmaci. Il nutrizionista, invece, è generalmente un biologo specializzato in nutrizione che si occupa di educazione alimentare e piani nutrizionali personalizzati per migliorare lo stile di vita e il benessere generale.",
  },
  {
    question: "Il piano alimentare è personalizzato?",
    answer: "Sì. Ogni percorso nutrizionale viene costruito tenendo conto delle abitudini alimentari, dello stato di salute e degli obiettivi della persona.",
  },
  {
    question: "Quanto tempo serve per vedere i risultati di un percorso nutrizionale?",
    answer: "I tempi possono variare da persona a persona, ma molti pazienti iniziano a percepire benefici già dopo le prime settimane.",
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
    title: "Osteopatia",
    description: "Trattamenti manuali per il benessere muscolare e articolare.",
    href: "/servizi/osteopatia",
    image: "/foto/image-045-foto-nastia-cc1a9602.jpg",
  },
  {
    title: "Art-Terapia",
    description: "Percorsi creativi per il benessere emotivo e psicologico.",
    href: "/servizi/art-terapia",
    image: "/foto/image-050-foto-nastia-cc1a9620.jpg",
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
            <h1>Dietologo a Milano</h1>
            <p>
              Percorsi di nutrizione personalizzati a Milano per ritrovare equilibrio, salute e benessere. Un approccio scientifico e su misura per le esigenze del tuo organismo.
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
                  L'obiettivo non è solo raggiungere il peso forma, ma migliorare l'equilibrio dell'organismo, sostenere le performance fisiche e favorire uno stile di vita sano e duraturo nel tempo. Il percorso terapeutico comprende:
                </p>
                <ul className={styles.greenList}>
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

       

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il tuo percorso</span>
              <h2 className="section-title">Come Funziona</h2>
            </div>

            <div className={styles.stepGrid}>
              {processSteps.map((step, index) => (
                <div key={index} className={styles.stepCard}>
                  <span className={styles.stepBigNum}>{"0" + step.number}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" style={{ background: "var(--color-nutrition)" }}>
          <div className="container">
            <h2>Prenota la tua consulenza nutrizionale</h2>
            <p>
              Scopri il percorso alimentare personalizzato più adatto al tuo stile di vita e al tuo benessere.
            </p>
            <div className="cta-buttons">
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
