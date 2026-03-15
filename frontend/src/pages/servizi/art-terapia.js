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
    question: "Cos'è l'art-terapia e come funziona?",
    answer:
      "L'art-terapia utilizza attività creative come disegno, pittura o modellazione manuale per favorire l'espressione delle emozioni e migliorare il benessere psicologico.",
  },
  {
    question: "A chi è rivolta l'art-terapia?",
    answer:
      "Può essere utile per adulti, adolescenti e bambini che desiderano migliorare la gestione delle emozioni o ridurre lo stress.",
  },
  {
    question: "Serve avere capacità artistiche per partecipare?",
    answer:
      "No. L'obiettivo non è il risultato estetico ma il processo creativo e l'espressione personale.",
  },
  {
    question: "Quali benefici può offrire l'art-terapia?",
    answer:
      "Può aiutare a ridurre stress e tensione emotiva, migliorare la consapevolezza di sé e favorire il benessere psicologico.",
  },
  {
    question: "Come si svolge una seduta di art-terapia?",
    answer:
      "Durante l'incontro vengono proposte attività creative guidate che permettono di esplorare emozioni e vissuti attraverso il linguaggio artistico.",
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
  {
    title: "Osteopatia",
    description: "Trattamenti manuali per benessere muscolare e articolare.",
    href: "/servizi/osteopatia",
    image: "/foto/image-045-foto-nastia-cc1a9602.jpg",
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
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source src="/art-terapia/WhatsApp%20Video%202026-03-14%20at%2011.33.43%20%281%29.mp4" type="video/mp4" />
          </video>
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

        {/* Specialist */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">La tua specialista</span>
              <h2 className="section-title">Chi Ti Seguirà</h2>
            </div>
            <div className="specialist-solo-card" style={{ "--specialist-accent": "var(--color-art)" }}>
              <div className="specialist-photo-wrap">
                <Image
                  src="/team/IRINA.jpeg"
                  alt="Dr.ssa Irina Metliaeva — Art-Terapeuta Studio Pinoli Milano"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                  sizes="340px"
                />
              </div>
              <div className="specialist-info-panel">
                <span className="specialist-role-tag">Art-Terapia</span>
                <h3>Dr.ssa Irina Metliaeva</h3>
                <span className="specialist-sub-role">Art-Terapeuta</span>
                <p>Art-terapeuta con formazione in psicologia e terapia espressiva. Conduce percorsi di arte-terapia orientati alla gestione dello stress, all'equilibrio emotivo e al benessere psico-fisico, in un contesto clinico strutturato che valorizza l'espressione creativa come strumento di cura autentica.</p>
              </div>
            </div>
          </div>
        </section>

        {/* A Cosa Serve */}
        <section className="section">
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
