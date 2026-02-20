import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Sub-services data
const subServices = [
  {
    title: "Implantologia a Milano",
    description: "Sostituzione di denti mancanti con impianti dentali in titanio di ultima generazione. Oltre il 95% di successo a 10 anni. Risultati naturali e duraturi.",
    icon: "/images/implant.svg",
  },
  {
    title: "Ortodonzia a Milano",
    description: "Correzione di malocclusioni e allineamento dentale con apparecchi fissi tradizionali o allineatori invisibili (ortodonzia invisibile). Per adulti e bambini.",
    icon: "/images/ortodonzia-invisibile.svg",
  },
  {
    title: "Igiene Orale Professionale",
    description: "Pulizia dei denti professionale, ablazione del tartaro e prevenzione delle malattie parodontali. Consigliata ogni 6 mesi per mantenere gengive e denti sani.",
    icon: "/images/dentist.svg",
  },
  {
    title: "Estetica Dentale",
    description: "Sbiancamento denti professionale, faccette in porcellana e trattamenti estetici per un sorriso luminoso, bianco e armonioso.",
    icon: "/images/dentist-chair.svg",
  },
  {
    title: "Endodonzia (Devitalizzazione)",
    description: "Trattamento dei canali radicolari per salvare denti compromessi da carie profonde, ascessi o traumi. Procedura precisa e indolore con anestesia locale.",
    icon: "/images/dentist-2.svg",
  },
  {
    title: "Protesi Dentale",
    description: "Corone in ceramica, ponti fissi e protesi rimovibili per ripristinare funzionalità estetica del sorriso. Materiali di alta qualità per risultati naturali.",
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
            <h1>Odontoiatria a Milano</h1>
            <p>
              Da oltre 35 anni il nostro studio dentistico a Milano offre cure odontoiatriche di eccellenza:
              implantologia, ortodonzia, igiene orale e molto altro. Un team di specialisti dedicato alla salute
              e alla bellezza del tuo sorriso.
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
                <h2>Il Tuo Dentista a Milano dal 1989</h2>
                <p>
                  Studio Pinoli è un punto di riferimento per l'odontoiatria a Milano da oltre
                  35 anni. Il nostro team di dentisti e specialisti utilizza le tecnologie più moderne
                  per garantire trattamenti efficaci, precisi e minimamente invasivi.
                </p>
                <p>
                  Dalla prevenzione alla riabilitazione orale completa — implantologia, ortodonzia,
                  sbiancamento e protesi — offriamo tutto ciò di cui hai bisogno in un unico studio
                  dentistico a Milano, in zona Certosa.
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
                  alt="Sala trattamenti odontoiatria Studio Pinoli Milano zona Certosa"
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
            <h2>Prenota la Tua Visita Dentistica a Milano</h2>
            <p>
              Il nostro team di dentisti a Milano è pronto ad accoglierti per una prima visita gratuita,
              con valutazione completa e piano di trattamento personalizzato.
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
