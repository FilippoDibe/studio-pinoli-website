import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";

// Services data
const services = [
  {
    title: "Odontoiatria",
    description:
      "Da oltre 35 anni offriamo cure odontoiatriche di eccellenza. Implantologia, ortodonzia, igiene orale, estetica dentale, endodonzia e protesi: un servizio completo per il tuo sorriso.",
    image: "/images/14_Services_Dental_Care-Hero.jpg",
    icon: "/images/dentist-chair.svg",
    href: "/servizi/odontoiatria",
    theme: "dental",
  },
  {
    title: "Bionutrizione",
    description:
      "Diete personalizzate e piani alimentari su misura per raggiungere il tuo peso forma e migliorare il benessere. Consulenze nutrizionali per sportivi, patologie e stile di vita sano.",
    image: "/images/home-bionutrizione.jpg",
    icon: "/images/diet.svg",
    href: "/servizi/bionutrizione",
    theme: "nutrition",
  },
  {
    title: "Medicina Estetica",
    description:
      "Trattamenti estetici non invasivi per contrastare i segni del tempo. Filler, biorivitalizzazione, mesoterapia e soluzioni anti-aging per risultati naturali e duraturi.",
    image: "/images/home-trattamenti-estetici.jpg",
    icon: "/images/17_Services_SpaBeauty-Logo.png",
    href: "/servizi/medicina-estetica",
    theme: "aesthetic",
  },
  {
    title: "Medicina Integrata",
    description:
      "Un approccio olistico alla salute che unisce corpo e mente. Oli essenziali, aromaterapia e medicina olistica per ritrovare equilibrio e benessere completo.",
    image: "/images/chi-siamo-medicina-integrata.jpg",
    icon: "/images/Dentista-A-Milano-Medicina-Integrata.svg",
    href: "/servizi/medicina-integrata",
    theme: "integrative",
  },
];

// Value propositions
const valueProps = [
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    title: "Oltre 35 Anni di Esperienza",
    description: "Professionalità consolidata e aggiornamento continuo per garantire le migliori cure.",
  },
  {
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    title: "Approccio Integrato",
    description: "Combiniamo odontoiatria, nutrizione e medicina olistica per il tuo benessere completo.",
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    title: "Team Specializzato",
    description: "Professionisti qualificati pronti ad accoglierti e guidarti nel percorso di cura.",
  },
  {
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    title: "Tecnologie Moderne",
    description: "Strumentazioni all'avanguardia per diagnosi precise e trattamenti efficaci.",
  },
];

// FAQ Data
const faqs = [
  {
    question: "Quali servizi offrite in studio?",
    answer:
      "Offriamo un approccio integrato alla salute con quattro aree principali: Odontoiatria (implantologia, ortodonzia, igiene orale, estetica dentale), Bionutrizione (diete personalizzate, piani alimentari), Medicina Estetica (filler, biorivitalizzazione, anti-aging) e Medicina Integrata (oli essenziali, aromaterapia, approccio olistico).",
  },
  {
    question: "Cosa significa approccio integrato alla salute?",
    answer:
      "Il nostro approccio integrato considera la persona nella sua totalità. Crediamo che la salute orale, l'alimentazione e il benessere psico-fisico siano interconnessi. Per questo offriamo servizi che lavorano in sinergia per raggiungere uno stato di salute ottimale.",
  },
  {
    question: "Come posso prenotare una prima visita?",
    answer:
      "Puoi prenotare una prima visita chiamando il numero 02 4272381, inviando un'email a info@studiopinoli.it, oppure compilando il form di contatto sul nostro sito. Ti risponderemo entro 24 ore per confermare l'appuntamento.",
  },
  {
    question: "Offrite consulenze nutrizionali online?",
    answer:
      "Sì, offriamo la possibilità di effettuare una prima consulenza nutrizionale tramite videochiamata. Tuttavia, per il piano alimentare personalizzato e i controlli periodici, è necessario prenotare un appuntamento in studio.",
  },
  {
    question: "Quali sono i tempi di attesa per un appuntamento?",
    answer:
      "Cerchiamo sempre di garantire tempi di attesa brevi. Per le urgenze siamo disponibili anche in giornata. Per visite programmate, solitamente riusciamo a fissare un appuntamento entro una settimana.",
  },
  {
    question: "Accettate pagamenti rateizzati?",
    answer:
      "Sì, offriamo diverse opzioni di pagamento rateizzato per rendere i nostri trattamenti accessibili a tutti. Contattaci per maggiori informazioni sulle modalità disponibili.",
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

export default function INosttiServizi() {
  return (
    <>
      <Head>
        <title>I Nostri Servizi | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Odontoiatria, Bionutrizione, Medicina Estetica e Medicina Integrata a Milano. Scopri i nostri servizi per il tuo benessere completo."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/images/14_Services_Dental_Care-Hero.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>I Nostri Servizi</span>
            </nav>
            <h1>I Nostri Servizi</h1>
            <p>
              Un approccio integrato alla salute: Odontoiatria, Bionutrizione, Medicina
              Estetica e Medicina Integrata per il tuo benessere completo.
            </p>
            <div className="page-hero-ctas">
              <Link href="/contatti" className="btn btn-primary">
                Prenota un appuntamento
              </Link>
              <Link href="/prima-visita" className="btn btn-secondary">
                Prima visita gratuita
              </Link>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il nostro approccio</span>
              <h2 className="section-title">Il Corpo è Un Sistema Che Vive In Equilibrio</h2>
              <p className="section-description">
                Per questo abbiamo una visione integrata di medicina, odontoiatria e
                nutrizione. Il nostro obiettivo è guardare alla totalità del paziente e del
                suo benessere generale, creando percorsi di cura personalizzati che
                considerano ogni aspetto della salute.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Macro Services Grid */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Aree di specializzazione</span>
              <h2 className="section-title">Scegli Il Tuo Percorso di Cura</h2>
            </div>

            <div className="macro-services-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  icon={service.icon}
                  href={service.href}
                  theme={service.theme}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I nostri punti di forza</span>
              <h2 className="section-title">Perché Scegliere Studio Pinoli</h2>
            </div>

            <div className="value-props-grid">
              {valueProps.map((prop, index) => (
                <div key={index} className="value-prop-item">
                  <div className="value-prop-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d={prop.icon} />
                    </svg>
                  </div>
                  <h4>{prop.title}</h4>
                  <p>{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Inizia Il Tuo Percorso Verso Il Benessere</h2>
            <p>
              Prenota una consulenza con i nostri specialisti e scopri il percorso di
              cura più adatto alle tue esigenze.
            </p>
            <div className="cta-buttons">
              <Link href="/contatti" className="btn btn-primary">
                Prenota una visita
              </Link>
              <a href="tel:+390242272381" className="btn btn-secondary">
                Chiama ora: 02 4272381
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

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="blue-box" style={{ maxWidth: 800, margin: "0 auto" }}>
              <h3>Fai Il Primo Passo Verso Il Tuo Benessere</h3>
              <p>
                Il nostro team è pronto ad accoglierti e guidarti nel percorso di cura più
                adatto a te. Contattaci per una consulenza personalizzata.
              </p>
              <Link href="/contatti" className="btn">
                Prenota ora la tua visita
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
