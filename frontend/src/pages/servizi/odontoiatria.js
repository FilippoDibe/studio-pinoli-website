import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Sub-services data
const subServices = [
  {
    title: "Implantologia",
    description: "Sostituzione di denti mancanti con impianti dentali di ultima generazione per un sorriso naturale e funzionale.",
    icon: "/images/implant.svg",
  },
  {
    title: "Ortodonzia",
    description: "Correzione di malocclusioni e allineamento dentale con apparecchi tradizionali e invisibili.",
    icon: "/images/ortodonzia-invisibile.svg",
  },
  {
    title: "Igiene Orale",
    description: "Pulizia professionale e prevenzione delle patologie orali per mantenere denti e gengive sani.",
    icon: "/images/dentist.svg",
  },
  {
    title: "Estetica Dentale",
    description: "Sbiancamento, faccette e trattamenti estetici per un sorriso luminoso e armonioso.",
    icon: "/images/dentist-chair.svg",
  },
  {
    title: "Endodonzia",
    description: "Trattamento dei canali radicolari per salvare denti compromessi da carie profonde o traumi.",
    icon: "/images/dentist-2.svg",
  },
  {
    title: "Protesi Dentale",
    description: "Corone, ponti e protesi rimovibili per ripristinare funzionalità ed estetica del sorriso.",
    icon: "/images/dentist-chair-2.svg",
  },
];

// Process steps
const processSteps = [
  {
    number: "1",
    title: "Prima Visita",
    description: "Colloquio conoscitivo e valutazione completa della tua situazione orale con tecnologie diagnostiche avanzate.",
  },
  {
    number: "2",
    title: "Piano di Cura",
    description: "Elaborazione di un piano di trattamento personalizzato con preventivo dettagliato e trasparente.",
  },
  {
    number: "3",
    title: "Trattamento",
    description: "Esecuzione del trattamento con tecniche all'avanguardia e massimo comfort del paziente.",
  },
  {
    number: "4",
    title: "Follow-up",
    description: "Controlli periodici e programma di mantenimento per garantire risultati duraturi nel tempo.",
  },
];

// FAQ data
const faqs = [
  {
    question: "Quanto dura un impianto dentale?",
    answer: "Con le giuste cure e controlli regolari, un impianto dentale può durare tutta la vita. La percentuale di successo degli impianti è superiore al 95% a 10 anni.",
  },
  {
    question: "L'implantologia è dolorosa?",
    answer: "L'intervento viene eseguito in anestesia locale e non provoca dolore. Dopo l'intervento è normale un leggero gonfiore e fastidio, facilmente gestibile con farmaci antidolorifici.",
  },
  {
    question: "Quanto costa una visita odontoiatrica?",
    answer: "La prima visita ha un costo contenuto e include la valutazione completa, radiografie se necessarie e il piano di trattamento. Contattaci per maggiori informazioni.",
  },
  {
    question: "Offrite soluzioni di ortodonzia invisibile?",
    answer: "Sì, offriamo diverse soluzioni di ortodonzia invisibile tra cui allineatori trasparenti. Durante la visita valuteremo insieme la soluzione più adatta al tuo caso.",
  },
];

const relatedServices = [
  {
    title: "Bionutrizione",
    description: "Diete personalizzate per il tuo benessere completo.",
    href: "/servizi/bionutrizione",
    image: "/media/studio-pinoli-social-3/images/image-024-foto-nastia-cc1a9492.jpg",
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

export default function Odontoiatria() {
  return (
    <>
      <Head>
        <title>Odontoiatria | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Servizi di odontoiatria a Milano: implantologia, ortodonzia, igiene orale, estetica dentale. Oltre 35 anni di esperienza. Prenota la tua visita."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/media/studio-pinoli-social-3/images/image-051-foto-nastia-cc1a9625.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/i-nostri-servizi">Servizi</Link>
              <span>/</span>
              <span>Odontoiatria</span>
            </nav>
            <h1>Odontoiatria</h1>
            <p>
              Da oltre 35 anni offriamo cure odontoiatriche di eccellenza a Milano.
              Un team di specialisti dedicati alla salute e alla bellezza del tuo sorriso.
            </p>
            <div className="page-hero-ctas">
              <Link href="/contatti" className="btn btn-primary">
                Prenota una visita
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
                <h2>Il Tuo Sorriso, La Nostra Passione</h2>
                <p>
                  Studio Pinoli è un punto di riferimento per l'odontoiatria a Milano da oltre
                  35 anni. Il nostro team di specialisti utilizza le più moderne tecnologie e
                  tecniche per garantire trattamenti efficaci e minimamente invasivi.
                </p>
                <p>
                  Dalla prevenzione alla riabilitazione completa, offriamo un servizio
                  odontoiatrico completo in un ambiente accogliente e sereno, dove il
                  comfort del paziente è la nostra priorità.
                </p>
                <ul>
                  <li>Tecnologie diagnostiche all'avanguardia</li>
                  <li>Approccio minimamente invasivo</li>
                  <li>Team di specialisti qualificati</li>
                  <li>Ambiente sereno e accogliente</li>
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/media/studio-pinoli-social-3/images/image-013-foto-nastia-cc1a9446.jpg"
                  alt="Studio dentistico moderno"
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
              <span className="section-subtitle">Le nostre specializzazioni</span>
              <h2 className="section-title">Servizi di Odontoiatria</h2>
            </div>

            <div className="sub-services-grid">
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
                  <div className="process-step-number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Prenota La Tua Visita Odontoiatrica</h2>
            <p>
              Il nostro team è pronto ad accoglierti per una valutazione completa
              e un piano di trattamento personalizzato.
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

        {/* FAQ Section */}
        <section className="section section-light">
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
        <section className="section">
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
