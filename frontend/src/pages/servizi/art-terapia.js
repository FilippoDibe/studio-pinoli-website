import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/art-terapia.module.css";

const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";

const benefits = [
  "Ridurre stress e tensioni emotive",
  "Migliorare la gestione dell'ansia",
  "Favorire l'espressione delle emozioni",
  "Sviluppare consapevolezza e equilibrio interiore",
  "Supportare il benessere psicologico",
  "Gestire difficoltà emotive durante i percorsi di cura",
];

const valuePros = [
  {
    title: "Accessibile a Tutti",
    description:
      "Non è necessario avere competenze artistiche. Il percorso è guidato e pensato per chiunque voglia esplorare il proprio mondo emotivo.",
    iconPath:
      "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z",
  },
  {
    title: "Ambiente Sicuro",
    description:
      "Uno spazio accogliente e protetto dove esprimere emozioni attraverso l'arte, senza giudizi e con la guida di un professionista.",
    iconPath:
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Percorso Personalizzato",
    description:
      "Ogni incontro è costruito sulle esigenze individuali della persona, con attività creative mirate al benessere emotivo.",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    title: "Supporto ai Percorsi di Cura",
    description:
      "L'art-terapia può affiancare altri trattamenti dello studio, aiutando a gestire l'ansia legata alle cure mediche e odontoiatriche.",
    iconPath:
      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
  },
];

const faqs = [
  {
    question: "Cos'è l'art-terapia e a cosa serve?",
    answer:
      "L'art-terapia è una disciplina che utilizza l'espressione artistica come strumento di supporto emotivo e crescita personale. Attraverso il disegno, il colore e altre forme creative, è possibile esplorare emozioni, ridurre lo stress e favorire una maggiore consapevolezza di sé. Non è una lezione d'arte, ma un percorso terapeutico.",
  },
  {
    question: "Devo saper disegnare per fare art-terapia?",
    answer:
      "Assolutamente no. L'art-terapia non richiede alcuna competenza artistica. L'obiettivo non è creare un'opera d'arte, ma usare il processo creativo come strumento di esplorazione emotiva. Il risultato finale non viene valutato esteticamente.",
  },
  {
    question: "A chi è indicata l'art-terapia?",
    answer:
      "L'art-terapia è indicata a chiunque voglia esplorare il proprio benessere emotivo: adulti che vivono momenti di stress, persone che vogliono lavorare sulla propria consapevolezza, o chi desidera un supporto emotivo durante percorsi di cura medica o odontoiatrica.",
  },
  {
    question: "Quanti incontri sono necessari?",
    answer:
      "Il percorso di art-terapia viene definito in base alle esigenze individuali. Può trattarsi di incontri singoli di esplorazione o di un percorso strutturato nel tempo. Il numero di sessioni verrà concordato insieme durante il primo colloquio.",
  },
];

const relatedServices = [
  {
    title: "Medicina Integrata",
    description: "Approccio olistico per mente e corpo in equilibrio.",
    href: "/servizi/medicina-integrata",
    image: "/foto/image-036-foto-nastia-cc1a9553.jpg",
  },
  {
    title: "Osteopatia",
    description: "Trattamenti manuali per benessere muscolare e articolare.",
    href: "/servizi/osteopatia",
    image: "/foto/image-045-foto-nastia-cc1a9602.jpg",
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti estetici non invasivi e naturali.",
    href: "/servizi/medicina-estetica",
    image: "/foto/image-025-foto-nastia-cc1a9493.jpg",
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

export default function ArtTerapia() {
  return (
    <>
      <Head>
        <title>Art-Terapia a Milano — Benessere Emotivo | Studio Pinoli</title>
        <meta
          name="description"
          content="Art-terapia a Milano: percorsi di benessere emotivo attraverso l'espressione creativa. Riduzione dello stress, gestione dell'ansia e consapevolezza di sé. Studio Pinoli."
        />
      </Head>

      <main id="main-content">
        {/* Hero */}
        <section className="service-hero art">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-048-foto-nastia-cc1a9613.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/i-nostri-servizi">Servizi</Link>
              <span>/</span>
              <span>Art-Terapia</span>
            </nav>
            <h1>Art-Terapia a Milano</h1>
            <p>
              L'art-terapia è una disciplina che utilizza l'espressione artistica come strumento di supporto emotivo e crescita personale. Attraverso il disegno, il colore e altre forme creative, è possibile esplorare emozioni, ridurre lo stress e favorire una maggiore consapevolezza di sé.
            </p>
            <div className="page-hero-ctas">
              <Link href="/contatti" className="btn btn-primary">
                Prenota un incontro
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
                <h2>Benessere emotivo attraverso l'espressione creativa</h2>
                <p>
                  L'art-terapia usa il disegno, il colore e altre forme creative come strumenti
                  di supporto emotivo e crescita personale.
                </p>
                <p>
                  Nel nostro studio l'art-terapia rappresenta uno spazio dedicato al benessere emotivo della persona e può essere un valido supporto anche nei percorsi di cura, aiutando a gestire ansia, tensione e difficoltà emotive.
                </p>
                <p style={{ fontSize: "0.92rem", color: "var(--gray-500)", fontStyle: "italic" }}>
                  Non è necessario avere competenze artistiche: il percorso è guidato
                  e accessibile a tutti.
                </p>
                <div className={styles.pullQuote}>
                  <span className={styles.pullQuoteBar} />
                  <p>"Non importa saper disegnare — importa saper sentire."</p>
                </div>
              </div>
              <div className="two-col-image">
                <Image
                  src="/foto/image-050-foto-nastia-cc1a9620.jpg"
                  alt="Seduta di art-terapia Studio Pinoli Milano"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* A Cosa Serve */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Cosa può fare per te</span>
              <h2 className="section-title">A Cosa Serve l'Art-Terapia</h2>
              <p style={{ maxWidth: 620, margin: "0 auto", color: "var(--gray-500)", textAlign: "center" }}>
                L'art-terapia può aiutare a:
              </p>
            </div>

            <div className={styles.numberedList}>
              {benefits.map((item, i) => (
                <div key={i} className={styles.numberedItem}>
                  <span className={styles.bigNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.itemText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="section">
          <div className="container">
            <div className="two-col-section reverse">
              <div className="two-col-image">
                <Image
                  src="/foto/image-029-foto-nastia-cc1a9504.jpg"
                  alt="Percorso guidato di art-terapia Studio Pinoli"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <div className={`two-col-content ${styles.journeyContent}`}>
                <h2>Un Percorso di Ascolto e Crescita Personale</h2>
                <p>
                  Attraverso attività creative guidate, l'art-terapia permette di esplorare
                  il proprio mondo emotivo in un ambiente sicuro e accogliente.
                </p>
                <p>
                  Il percorso viene costruito in base alle esigenze individuali e può
                  rappresentare un momento di pausa, riflessione e riequilibrio nella
                  vita quotidiana — oppure integrarsi con altri trattamenti dello studio
                  per un supporto emotivo durante i percorsi di cura.
                </p>
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ borderColor: "var(--color-art)", color: "var(--color-art)" }}
                >
                  Prenota una visita
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Perché Scegliere */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I vantaggi</span>
              <h2 className="section-title">Perché Scegliere l'Art-Terapia</h2>
            </div>
            <div className={styles.warmGrid}>
              {valuePros.map((v, i) => (
                <div key={i} className={styles.warmCard}>
                  <div className={styles.warmCardIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
                      <path d={v.iconPath} />
                    </svg>
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" style={{ background: "var(--color-art)" }}>
          <div className="container">
            <h2>Prenota un Incontro di Art-Terapia a Milano</h2>
            <p>
              Scopri come un percorso di art-terapia può aiutarti a ritrovare equilibrio,
              serenità e benessere emotivo. Il primo passo è una semplice conversazione.
            </p>
            <div className="cta-buttons">
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Prenota una visita
              </Link>
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama ora
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

        {/* Related */}
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
