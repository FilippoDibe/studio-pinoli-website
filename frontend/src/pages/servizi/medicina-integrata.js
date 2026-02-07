import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Treatments data
const treatments = [
  {
    title: "Oli Essenziali",
    description: "Utilizzo terapeutico di essenze naturali per stimolare il benessere fisico e mentale attraverso la memoria olfattiva.",
    icon: "M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z",
  },
  {
    title: "Aromaterapia",
    description: "Trattamenti che sfruttano le proprietà benefiche degli aromi per favorire il rilassamento e l'equilibrio emotivo.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    title: "Medicina Olistica",
    description: "Un approccio che considera la persona nella sua interezza, integrando corpo, mente e spirito nel percorso di cura.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
  },
  {
    title: "Equilibrio Psico-fisico",
    description: "Percorsi personalizzati per ritrovare l'armonia tra benessere fisico e mentale, riducendo stress e tensioni.",
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
  },
];

// Benefits
const benefits = [
  {
    title: "Approccio Naturale",
    description: "Utilizziamo rimedi naturali e tecniche non invasive per stimolare i processi di guarigione del corpo.",
  },
  {
    title: "Visione Integrata",
    description: "Consideriamo la persona nella sua totalità, non solo i sintomi ma le cause profonde del malessere.",
  },
  {
    title: "Percorsi Personalizzati",
    description: "Ogni trattamento è studiato sulle tue specifiche esigenze e sul tuo percorso di vita.",
  },
  {
    title: "Benessere Duraturo",
    description: "L'obiettivo è un benessere profondo e duraturo, non solo il sollievo temporaneo dei sintomi.",
  },
];

// FAQ data
const faqs = [
  {
    question: "Cos'è la medicina integrata?",
    answer: "La medicina integrata è un approccio che combina le terapie della medicina convenzionale con quelle complementari, considerando la persona nella sua interezza: corpo, mente e spirito. L'obiettivo è raggiungere il massimo stato di benessere.",
  },
  {
    question: "Come funziona la terapia con oli essenziali?",
    answer: "Gli oli essenziali vengono utilizzati per stimolare la memoria olfattiva e il sistema limbico, quella parte del cervello che gestisce le emozioni. Attraverso l'olfatto possiamo influenzare positivamente il nostro stato d'animo e il benessere generale.",
  },
  {
    question: "Questi trattamenti possono sostituire le cure mediche tradizionali?",
    answer: "No, la medicina integrata non sostituisce le cure mediche tradizionali ma le affianca. È un approccio complementare che lavora in sinergia con la medicina convenzionale per ottenere i migliori risultati per il paziente.",
  },
  {
    question: "Per quali problematiche è indicata la medicina integrata?",
    answer: "La medicina integrata è particolarmente indicata per gestire lo stress, l'ansia, disturbi del sonno, dolori cronici, stanchezza e in generale per chi desidera migliorare il proprio stato di benessere generale.",
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

export default function MedicinaIntegrata() {
  return (
    <>
      <Head>
        <title>Medicina Integrata | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Medicina integrata e olistica a Milano: oli essenziali, aromaterapia, approccio mente-corpo. Scopri un percorso di benessere completo."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero integrative">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/images/chi-siamo-medicina-integrata.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/i-nostri-servizi">Servizi</Link>
              <span>/</span>
              <span>Medicina Integrata</span>
            </nav>
            <h1>Medicina Integrata</h1>
            <p>
              Un approccio olistico alla salute che unisce corpo e mente.
              Scopri il potere degli oli essenziali e dell'aromaterapia per il tuo benessere.
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
                <h2>La Salute Come Equilibrio</h2>
                <p>
                  La medicina integrata considera la persona nella sua totalità,
                  riconoscendo che il benessere fisico, mentale ed emotivo sono
                  profondamente interconnessi.
                </p>
                <p>
                  Il nostro approccio combina le conoscenze della medicina tradizionale
                  con terapie complementari come l'aromaterapia e l'uso degli oli essenziali,
                  per creare percorsi di cura personalizzati che vanno oltre il semplice
                  trattamento dei sintomi.
                </p>
                <ul>
                  <li>Visione olistica della salute</li>
                  <li>Terapie naturali e non invasive</li>
                  <li>Attenzione alla persona, non solo ai sintomi</li>
                  <li>Integrazione con le cure tradizionali</li>
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/images/immagine-benessere.jpg"
                  alt="Medicina integrata e benessere"
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
              <h2 className="section-title">Servizi di Medicina Integrata</h2>
            </div>

            <div className="sub-services-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {treatments.map((treatment, index) => (
                <div key={index} className="sub-service-card" style={{ borderColor: "var(--color-integrative)" }}>
                  <div className="sub-service-icon" style={{ color: "var(--color-integrative)" }}>
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

        {/* Oils Section */}
        <section className="section">
          <div className="container">
            <div className="two-col-section reverse">
              <div className="two-col-image">
                <Image
                  src="/images/peppermint-gb70190b82_1920.jpg"
                  alt="Oli essenziali"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <div className="two-col-content">
                <h2>Il Potere degli Oli Essenziali</h2>
                <p>
                  Gli oli essenziali sono estratti naturali concentrati che catturano
                  l'essenza aromatica delle piante. Attraverso l'olfatto, questi aromi
                  possono influenzare profondamente il nostro stato d'animo e il nostro
                  benessere.
                </p>
                <p>
                  La memoria olfattiva è una delle più potenti: un profumo può rievocare
                  ricordi, emozioni e stati d'animo. Sfruttiamo questa connessione per
                  creare percorsi terapeutici personalizzati.
                </p>
                <h3>I Benefici dell'Aromaterapia</h3>
                <ul>
                  <li>Riduzione dello stress e dell'ansia</li>
                  <li>Miglioramento della qualità del sonno</li>
                  <li>Aumento della concentrazione e dell'energia</li>
                  <li>Supporto all'equilibrio emotivo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I vantaggi</span>
              <h2 className="section-title">Perché Scegliere la Medicina Integrata</h2>
            </div>

            <div className="value-props-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="value-prop-item">
                  <div className="value-prop-icon" style={{ background: "rgba(22, 160, 133, 0.1)", color: "var(--color-integrative)" }}>
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

        {/* CTA Section */}
        <section className="cta-section" style={{ background: "var(--color-integrative)" }}>
          <div className="container">
            <h2>Inizia Il Tuo Percorso di Benessere</h2>
            <p>
              Scopri come la medicina integrata può aiutarti a ritrovare l'equilibrio
              e il benessere che meriti.
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
              <div className="service-card">
                <h3>Odontoiatria</h3>
                <p>Cure odontoiatriche di eccellenza per il tuo sorriso.</p>
                <Link href="/servizi/odontoiatria" className="btn btn-outline">
                  Scopri di più
                </Link>
              </div>
              <div className="service-card">
                <h3>Bionutrizione</h3>
                <p>Diete personalizzate per il tuo benessere completo.</p>
                <Link href="/servizi/bionutrizione" className="btn btn-outline">
                  Scopri di più
                </Link>
              </div>
              <div className="service-card">
                <h3>Medicina Estetica</h3>
                <p>Trattamenti estetici non invasivi e naturali.</p>
                <Link href="/servizi/medicina-estetica" className="btn btn-outline">
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
