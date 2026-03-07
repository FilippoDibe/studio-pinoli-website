import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/odontoiatria.module.css";

const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";

const dentalServices = [
  { name: "Conservativa", desc: "Cura e ricostruzione dei denti danneggiati da carie o traumi." },
  { name: "Protesi", desc: "Soluzioni fisse o mobili per ripristinare estetica e funzione masticatoria." },
  { name: "Ortodonzia (fissa / allineatori)", desc: "Allineamento dentale con apparecchi tradizionali o trasparenti di ultima generazione." },
  { name: "Gnatologia", desc: "Diagnosi e trattamento dei disturbi dell'articolazione temporo-mandibolare (ATM)." },
  { name: "Implantologia", desc: "Sostituzione dei denti mancanti con impianti stabili e duraturi." },
  { name: "Estetica dentale", desc: "Trattamenti mirati a migliorare armonia e luminosità del sorriso." },
  { name: "Endodonzia", desc: "Terapie canalari per salvare denti compromessi da infezioni profonde." },
  { name: "Pedodonzia", desc: "Cure odontoiatriche dedicate ai bambini in un ambiente sereno e protetto." },
  { name: "Parodontologia", desc: "Prevenzione e trattamento delle malattie di gengive e tessuti di supporto." },
];

const hygieneServices = [
  { name: "Igiene dentale professionale", desc: "Rimozione di placca e tartaro per mantenere salute orale nel tempo." },
  { name: "Sbiancamento in poltrona", desc: "Trattamento professionale per denti più bianchi e luminosi." },
  { name: "Sbiancamento domiciliare", desc: "Protocollo personalizzato da effettuare a casa in totale sicurezza." },
];

const processSteps = [
  {
    number: "1",
    title: "Compilazione documenti e anamnesi",
    description: "All'arrivo in studio ti chiederemo di compilare i documenti per la privacy e l'anamnesi medica. Queste informazioni ci aiutano a comprendere il tuo stato di salute generale e a inquadrare correttamente la situazione clinica.",
  },
  {
    number: "2",
    title: "Visita e valutazione clinica",
    description: "Effettueremo la visita odontoiatrica con eventuali radiografie e fotografie diagnostiche. Questo ci permette di analizzare con precisione la tua situazione e individuare le cause dei problemi presenti.",
  },
  {
    number: "3",
    title: "Presentazione del piano di cura",
    description: "Al termine della visita ti illustreremo le possibili soluzioni terapeutiche più adatte al tuo caso. In presenza di situazioni complesse, il piano di cura verrà elaborato con maggiore approfondimento e condiviso successivamente.",
  },
  {
    number: "4",
    title: "Piano di cura e follow-up",
    description: "Una volta definito il piano di cura, la segreteria ti fornirà tutte le informazioni su preventivo e modalità di pagamento. Il nostro team ti accompagnerà durante tutto il percorso di trattamento e nei controlli successivi.",
  },
];

const faqs = [
  {
    question: "Quanto dura un impianto dentale?",
    answer: "Con le giuste cure e controlli regolari, un impianto dentale può durare tutta la vita. La percentuale di successo dell'implantologia è superiore al 95% a 10 anni. Nel nostro studio dentistico a Milano utilizziamo impianti in titanio di ultima generazione.",
  },
  {
    question: "L'implantologia è dolorosa?",
    answer: "No. L'intervento di implantologia viene eseguito in anestesia locale e non provoca dolore durante la procedura. Dopo l'intervento è normale un leggero gonfiore e fastidio, facilmente gestibile con antidolorifici comuni.",
  },
  {
    question: "La prima visita dal dentista è gratuita?",
    answer: "Sì, la prima visita presso Studio Pinoli è gratuita e senza impegno. Include una valutazione completa della tua salute orale, radiografie se necessarie e la presentazione di un piano di trattamento personalizzato.",
  },
  {
    question: "Offrite soluzioni di ortodonzia invisibile a Milano?",
    answer: "Sì, offriamo diverse soluzioni di ortodonzia invisibile con allineatori trasparenti, adatte sia agli adulti che agli adolescenti. Durante la visita valuteremo insieme il tipo di apparecchio — fisso o invisibile — più adatto al tuo caso.",
  },
  {
    question: "Con che frequenza fare la pulizia dei denti dal dentista?",
    answer: "Si consiglia una pulizia professionale dei denti ogni 6 mesi. Nei pazienti con tendenza al tartaro o con problemi gengivali, il nostro studio dentistico a Milano può raccomandare intervalli più frequenti.",
  },
];

const relatedServices = [
  {
    title: "Osteopatia",
    description: "Trattamenti manuali per disturbi dell'ATM e benessere articolare.",
    href: "/servizi/osteopatia",
    image: "/foto/image-045-foto-nastia-cc1a9602.jpg",
  },
  {
    title: "Bionutrizione",
    description: "Piani alimentari personalizzati per il tuo benessere.",
    href: "/servizi/bionutrizione",
    image: "/foto/image-024-foto-nastia-cc1a9492.jpg",
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti estetici non invasivi e naturali.",
    href: "/servizi/medicina-estetica",
    image: "/foto/image-025-foto-nastia-cc1a9493.jpg",
  },
];

// SVG icon paths in the same order as dentalServices
const iconPaths = [
  // Conservativa
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
  // Protesi
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  // Ortodonzia
  "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
  // Gnatologia
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  // Implantologia
  "M13 10V3L4 14h7v7l9-11h-7z",
  // Estetica dentale
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  // Endodonzia
  "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
  // Pedodonzia
  "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  // Parodontologia
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
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
        <title>Dentista a Milano — Odontoiatria | Studio Pinoli</title>
        <meta
          name="description"
          content="Dentista a Milano con oltre 35 anni di esperienza. Implantologia, ortodonzia, igiene orale, sbiancamento e protesi dentale. Studio Pinoli, zona Certosa. Prima visita gratuita."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-051-foto-nastia-cc1a9625.jpg')" }}
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
            <div className={styles.heroBadge}>✓ Prima Visita Gratuita</div>
            <h1>Dentista a Milano</h1>
            <p>
              Da oltre 35 anni il nostro studio dentistico a Milano offre cure odontoiatriche di eccellenza:
              implantologia, ortodonzia, igiene orale e molto altro. Un team di specialisti dedicato alla salute
              e alla bellezza del tuo sorriso.
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
                <h2>Il Tuo Dentista a Milano</h2>
                <p>
                  Studio Pinoli è un centro odontoiatrico a Milano che unisce esperienza clinica, tecnologie avanzate e attenzione alla persona. Il nostro obiettivo è offrire cure precise, affidabili e costruite sulle reali esigenze di ogni paziente.
                </p>
                <p>
                  Crediamo in un'odontoiatria attenta, che mette al centro la salute orale, il comfort e la qualità del percorso di cura.
                </p>
                <span><b>Il nostro approccio si basa su:</b></span>
                <ul>
                  <li>Tecnologie diagnostiche avanzate</li>
                  <li>Un team di professionisti qualificati</li>
                  <li>Trattamenti accurati e personalizzati</li>
                  <li>Ambiente sereno e accogliente</li>
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/foto/image-013-foto-nastia-cc1a9446.jpg"
                  alt="Sala trattamenti odontoiatria Studio Pinoli Milano zona Certosa"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Le nostre specializzazioni</span>
              <h2 className="section-title">Servizi di Odontoiatria</h2>
            </div>

            {/* Icon grid — dental services */}
            <div className={styles.iconGrid}>
              {dentalServices.map((s, i) => (
                <div key={i} className={styles.iconCard}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={iconPaths[i]} />
                  </svg>
                  <strong>{s.name}</strong>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Hygiene strip */}
            <p className="service-subsection-label">Servizi di Igiene Dentale</p>
            <div className={styles.hygieneStrip}>
              <div className={styles.hygieneGrid}>
                {hygieneServices.map((s, i) => (
                  <div key={i} className={styles.hygieneCard}>
                    <svg
                      className={styles.hygieneCheckIcon}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong>{s.name}</strong>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
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

            <div className={styles.stepper}>
              {processSteps.map((step, index) => (
                <div key={index} className={styles.stepperItem}>
                  <div className={styles.stepNum}>{step.number}</div>
                  <div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Prenota la tua visita odontoiatrica a Milano</h2>
            <p>
              Il nostro team di ti seguirà per una prima visita accurata, con valutazione completa della salute orale e definizione del percorso di cura più adatto alle tue esigenze.
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
