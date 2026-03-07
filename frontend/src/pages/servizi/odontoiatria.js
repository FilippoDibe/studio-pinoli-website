import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

// Process steps
const processSteps = [
  {
    number: "1",
    title: "Compilazione documenti e anamnesi",
    description: "All’arrivo in studio ti chiederemo di compilare i documenti per la privacy e l’anamnesi medica. Queste informazioni ci aiutano a comprendere il tuo stato di salute generale e a inquadrare correttamente la situazione clinica.",
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

// FAQ data
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
            <h1>Dentista a Milano</h1>
            <p>
              Da oltre 35 anni il nostro studio dentistico a Milano offre cure odontoiatriche di eccellenza:
              implantologia, ortodonzia, igiene orale e molto altro. Un team di specialisti dedicato alla salute
              e alla bellezza del tuo sorriso.
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
                <h2>Il Tuo Dentista a Milano</h2>
                <p>
                 Studio Pinoli è un centro odontoiatrico a Milano che unisce esperienza clinica, tecnologie avanzate e attenzione alla persona. Il nostro obiettivo è offrire cure precise, affidabili e costruite sulle reali esigenze di ogni paziente.
                </p>
                <p>
Crediamo in un’odontoiatria attenta, che mette al centro la salute orale, il comfort e la qualità del percorso di cura.
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

            <div className="service-detail-grid">
              {dentalServices.map((s, i) => (
                <div key={i} className="service-detail-item dental">
                  <span className="service-detail-dot" />
                  <div className="service-detail-body">
                    <strong>{s.name}</strong>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="service-subsection-label">Servizi di Igiene Dentale</p>
            <div className="service-detail-grid">
              {hygieneServices.map((s, i) => (
                <div key={i} className="service-detail-item dental">
                  <span className="service-detail-dot" />
                  <div className="service-detail-body">
                    <strong>{s.name}</strong>
                    <p>{s.desc}</p>
                  </div>
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
            <h2>Prenota la tua visita odontoiatrica a Milano</h2>
            <p>
          Il nostro team di ti seguirà per una prima visita accurata, con valutazione completa della salute orale e definizione del percorso di cura più adatto alle tue esigenze.
            </p>
            <div className="cta-buttons">
              <Link  href={BOOKING_URL}
            
                 target="_blank"
                rel="noopener noreferrer"  className="btn btn-primary">
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
