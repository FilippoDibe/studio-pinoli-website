import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/StudioHome.module.css";
import { BOOKING_URL } from "@/lib/constants";

const carouselServices = [
  {
    tag: "Odontoiatria",
    title: "Odontoiatria a Milano",
    description: "Da oltre 35 anni offriamo cure odontoiatriche di eccellenza. Implantologia, ortodonzia, igiene orale, estetica dentale, endodonzia e protesi: un servizio completo per il tuo sorriso.",
    href: "/servizi/odontoiatria",
    image: "/servizi/odontoriatria.jpg",
    alt: "Trattamento odontoiatrico presso Studio Pinoli Milano",
    accent: "#0066cc",
  },
  {
    tag: "Bio-nutrizione",
    title: "Bio-nutrizione a Milano",
    description: "Piani nutrizionali personalizzati per migliorare energia, composizione corporea e performance mentale, con un approccio scientifico e monitoraggio costante nel tempo.",
    href: "/servizi/bionutrizione",
    image: "/servizi/Biochimica-nutrizione_Immagine_blog-.jpg",
    alt: "Consulenza bionutrizione e dieta personalizzata Milano Studio Pinoli",
    accent: "#2a9d5b",
  },
  {
    tag: "Medicina Estetica",
    title: "Medicina Estetica a Milano",
    description: "Trattamenti non invasivi e protocolli medicali per valorizzare i lineamenti in modo naturale, con risultati eleganti e armonici.",
    href: "/servizi/medicina-estetica",
    image: "/servizi/medicinaestetica.jpg",
    alt: "Trattamento medicina estetica viso Milano Studio Pinoli",
    accent: "#c16d43",
  },
  {
    tag: "Osteopatia",
    title: "Osteopatia a Milano",
    description: "Valutazioni e trattamenti osteopatici per migliorare postura, mobilità e benessere muscolo-scheletrico, in integrazione con il percorso clinico complessivo.",
    href: "/servizi/osteopatia",
    image: "/servizi/osteopatia.jpg",
    alt: "Trattamenti osteopatici Studio Pinoli Milano",
    accent: "#5c6bc0",
  },
  {
    tag: "Art-Terapia",
    title: "Art-Terapia a Milano",
    description: "Percorsi di art-terapia orientati alla gestione dello stress, all'equilibrio emotivo e al benessere psico-fisico, in un contesto medico strutturato.",
    href: "/servizi/art-terapia",
    image: "/servizi/art-terapia-hd.jpg",
    alt: "Trattamenti art-terapia Studio Pinoli Milano",
    accent: "#a0522d",
  },
];

function ServiceCarousel() {
  const total = carouselServices.length;
  const [current, setCurrent] = useState(0);
  const [progKey, setProgKey] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
      setProgKey((k) => k + 1);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (idx) => {
    setCurrent((idx + total) % total);
    setProgKey((k) => k + 1);
    startTimer();
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {carouselServices.map((service, i) => (
          <div key={i} className={styles.carouselSlide}>
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="100vw"
              className={styles.coverImage}
              style={{
                objectFit: service.objectFit || "cover",
                objectPosition: service.objectPosition || "center center",
              }}
              priority={i === 0}
            />
            <div className={styles.slideOverlay}>
              <span
                className={styles.slideTag}
                style={{ borderColor: service.accent, color: "#fff", background: `${service.accent}33` }}
              >
                {service.tag}
              </span>
              <h2 className={styles.slideTitle}>{service.title}</h2>
              <p className={styles.slideDesc}>{service.description}</p>
              <Link href={service.href} className={styles.slideLink}>
                Scopri di più <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`}
        onClick={() => go(current - 1)}
        aria-label="Servizio precedente"
      >
        ‹
      </button>
      <button
        className={`${styles.carouselBtn} ${styles.carouselBtnNext}`}
        onClick={() => go(current + 1)}
        aria-label="Servizio successivo"
      >
        ›
      </button>

      <div className={styles.carouselDots} role="tablist">
        {carouselServices.map((s, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={s.title}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      <div key={progKey} className={styles.carouselProgress} />
    </div>
  );
}

// FAQ Data
const faqs = [
  {
    question: "Quali servizi offre uno Studio Dentistico multidisciplinare a Milano?",
    answer:
      "Uno studio multidisciplinare integra diverse competenze per prendersi cura della salute della persona in modo completo. Oltre all'odontoiatria, Studio Pinoli offre percorsi legati alla nutrizione, all'osteopatia ed al benessere emotivo, con un approccio coordinato tra professionisti.",
  },
  {
    question: "Perché scegliere uno Studio che integra più discipline?",
    answer:
      "Molti disturbi sono collegati tra loro: alimentazione, postura, salute orale e stress possono influenzarsi reciprocamente. Un approccio integrato permette di individuare le cause dei problemi e non solo i sintomi.",
  },
  {
    question: "Come capire quale trattamento è più adatto alle proprie esigenze?",
    answer:
      "La soluzione migliore è una prima valutazione specialistica. Durante la visita vengono analizzate le esigenze del paziente e viene proposto un percorso personalizzato.",
  },
  {
    question: "È possibile seguire più trattamenti contemporaneamente?",
    answer:
      "Sì. In alcuni casi odontoiatria, nutrizione e osteopatia possono essere integrate per migliorare i risultati e il benessere generale.",
  },
  {
    question: "Quando è consigliato rivolgersi a uno Studio Medico multidisciplinare?",
    answer:
      "Quando si desidera un approccio più completo alla salute o quando diversi aspetti - come postura, alimentazione o salute orale - influiscono sul benessere quotidiano.",
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
          content="Odontoiatria, Bio-nutrizione, Medicina Estetica, Osteopatia e Art-Terapia a Milano. Scopri i nostri 5 servizi per il tuo benessere completo."
        />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-037-foto-nastia-cc1a9555.jpg')" }}
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
              Cinque aree di specializzazione per la tua salute a 360°: Odontoiatria, Bio-nutrizione, Medicina Estetica, Osteopatia e Art-Terapia.
            </p>
            <div className="page-hero-ctas">
              <Link   href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer" className="btn btn-primary">
                Prenota un appuntamento
              </Link>
              <Link href="/prima-visita" className="btn btn-secondary">
                Prima visita
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
               Per questo abbiamo una visione integrata di medicina, odontoiatria e nutrizione 
Il nostro obiettivo è guardare alla totalità del paziente e del suo benessere generale. Partendo dal sintomo indaghiamo sulla causa del problema, creando percorsi di cura personalizzati che considerano ogni aspetto della salute del paziente. 

              </p>
            </div>
          </div>
        </section>
        {/* Percorso di Cura */}
        <section className="percorso-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Come funziona</span>
              <h2 className="section-title">Il Tuo Percorso di Cura</h2>
              <p className="section-description">
                Ogni paziente è unico. Per questo costruiamo insieme un percorso personalizzato che parte dall&apos;ascolto.
              </p>
            </div>
            <div className="percorso-steps">
              <div className="percorso-step">
                <span className="percorso-step-number" aria-hidden="true">01</span>
                <div className="percorso-step-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                </div>
                <h4>Prima Visita</h4>
                <p>Un colloquio approfondito per conoscere la tua storia clinica e i tuoi obiettivi di salute.</p>
              </div>
              <div className="percorso-step">
                <span className="percorso-step-number" aria-hidden="true">02</span>
                <div className="percorso-step-icon percorso-step-icon--2">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                </div>
                <h4>Diagnosi Integrata</h4>
                <p>Valutazione multidisciplinare che considera ogni aspetto del tuo benessere fisico ed emotivo.</p>
              </div>
              <div className="percorso-step">
                <span className="percorso-step-number" aria-hidden="true">03</span>
                <div className="percorso-step-icon percorso-step-icon--3">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                </div>
                <h4>Piano Personalizzato</h4>
                <p>Un percorso su misura costruito intorno alle tue esigenze, in collaborazione con i nostri specialisti.</p>
              </div>
              <div className="percorso-step">
                <span className="percorso-step-number" aria-hidden="true">04</span>
                <div className="percorso-step-icon percorso-step-icon--4">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <h4>Cura e Follow-up</h4>
                <p>Trattamenti mirati e monitoraggio continuo per accompagnarti verso i tuoi risultati nel tempo.</p>
              </div>
            </div>
     
          </div>
        </section>

        {/* Services Carousel */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.sectionTag}>I nostri servizi</span>
              <h2>Scegli il Tuo Percorso di Cura</h2>
              <p>Cinque aree di specializzazione per accompagnarti verso la salute e il benessere che meriti.</p>
            </div>
            <ServiceCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Fai Il Primo Passo Verso Il Tuo Benessere</h2>
            <p>
              Prenota una consulenza con i nostri specialisti e scopri il percorso di
              cura più adatto alle tue esigenze.
            </p>
            <div className="cta-buttons">
              <Link href={BOOKING_URL} target="_blank"
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

    
      </main>
    </>
  );
}
