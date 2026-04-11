import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";
// Services with accent colors (matching home page)
const services = [
  {
    title: "Odontoiatria",
    description: "Implantologia, ortodonzia, igiene orale ed estetica dentale.",
    href: "/servizi/odontoiatria",
    color: "var(--color-dental)",
    colorDark: "var(--color-dental-dark)",
  },
  {
    title: "Bio-nutrizione",
    description: "Piani nutrizionali personalizzati per il tuo benessere.",
    href: "/servizi/bionutrizione",
    color: "var(--color-nutrition)",
    colorDark: "var(--color-nutrition-dark)",
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti non invasivi per valorizzare la tua bellezza.",
    href: "/servizi/medicina-estetica",
    color: "var(--color-aesthetic)",
    colorDark: "var(--color-aesthetic-dark)",
  },
  {
    title: "Osteopatia",
    description: "Postura, mobilità e benessere muscolo-scheletrico.",
    href: "/servizi/osteopatia",
    color: "var(--color-osteopatia)",
    colorDark: "var(--color-osteopatia-dark)",
  },
  {
    title: "Art-Terapia",
    description: "Percorsi creativi per l'equilibrio emotivo e il benessere.",
    href: "/servizi/art-terapia",
    color: "var(--color-art)",
    colorDark: "var(--color-art-dark)",
  },
];

// Timeline steps
const timelineSteps = [
  {
    number: "01",
    title: "Accoglienza",
    description: "Ti accogliamo nel nostro Studio con un sorriso. Il nostro staff ti guiderà nella compilazione dei documenti necessari e ti farà sentire a casa.",
    image: "/foto/image-045-foto-nastia-cc1a9602.jpg"
  },
  {
    number: "02",
    title: "Colloquio Conoscitivo",
    description: "Un dialogo aperto per comprendere le tue esigenze, la tua storia clinica e le tue aspettative. Ascoltiamo attentamente per offrirti le migliori cure",
    image: "/foto/image-046-foto-nastia-cc1a9608.jpg"
  },
  {
    number: "03",
    title: "Visita Clinica",
    description: "Ti presentiamo un piano di cure personalizzato, chiaro e trasparente. Discutiamo insieme le opzioni, i tempi e i costi senza sorprese.",
    image: "/foto/image-047-foto-nastia-cc1a9610.jpg"
  },
  {
    number: "04",
    title: "Piano di Cura",
    description: "Ti presentiamo un piano di trattamento personalizzato, chiaro e trasparente. Discutiamo insieme le opzioni, i tempi e i costi senza sorprese.",
    image: "/foto/image-048-foto-nastia-cc1a9613.jpg"
  }
];

// Benefits
const benefits = [

  {
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    title: "Durata 60 minuti",
    description: "Dedichiamo tutto il tempo necessario per conoscerci ed elaborare un piano di cura efficace"
  },
    {
    icon: "M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5S13.38 8.5 12 8.5 9.5 7.38 9.5 6s1.12-2.5 2.5-2.5zM17 11.5c-.55 0-1 .45-1 1v1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 1.1.9 2 2 2h1v3h4v-3h1c1.1 0 2-.9 2-2v-4c0-.55-.45-1-1-1z",
    title: "Professionista Dedicato",
    description: "Un medico di riferimento ti seguirà dall'anamnesi al trattamento, garantendo continuità clinica e un ascolto attento ad ogni visita."
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
    title: "Tecnologie Avanzate",
    description: "Diagnostica digitale e strumentazioni all'avanguardia per la creazione di un piano di terapia adatto alle tue esigenze"
  },
  {
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    title: "Preventivo Trasparente",
    description: "Al termine della tua prima visita riceverai un preventivo con prezzi chiari e dettagliati per ogni prestazione preventivata."
  }
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

// Scroll Timeline Component — RAF-driven, no React state for animations
function ScrollTimeline({ steps }) {
  const timelineRef = useRef(null);
  const trackFillRef = useRef(null);
  const itemRefs = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      if (!timelineRef.current || !trackFillRef.current) return;

      // Line fill: midpoint of viewport moving through the timeline container
      const tlRect = timelineRef.current.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const fill = Math.min(100, Math.max(0, ((mid - tlRect.top) / tlRect.height) * 100));
      trackFillRef.current.style.height = fill + "%";

      // Per-item smooth animation
      itemRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const isReverse = el.classList.contains("reverse");

        // Punto di riferimento sull'elemento: il suo quarto superiore
        const targetPoint = rect.top + rect.height * 0.25;
        // Range: da quando l'elemento è appena visibile (95% viewport) a quando è ben in view (32%)
        const startAt = window.innerHeight * 0.95;
        const endAt   = window.innerHeight * 0.32;
        const linear = Math.min(1, Math.max(0, (startAt - targetPoint) / (startAt - endAt)));
        // Ease-out cubico: parte rapida, rallenta dolcemente alla fine
        const progress = 1 - Math.pow(1 - linear, 2.8);

        const content = el.querySelector(".scroll-timeline-content");
        const image = el.querySelector(".scroll-timeline-image");
        const imgEl = image?.querySelector("img");
        const dot = el.querySelector(".scroll-timeline-dot");

        if (content) {
          content.style.opacity = String(progress);
          content.style.transform = `translateX(${(1 - progress) * (isReverse ? 18 : -18)}px)`;
        }
        if (image) {
          image.style.opacity = String(0.4 + progress * 0.6);
          image.style.transform = `translateX(${(1 - progress) * (isReverse ? -18 : 18)}px)`;
        }
        if (imgEl) {
          // Grayscale 100%→0% + brightness scura→piena: effetto "illuminazione"
          const gs = Math.round((1 - progress) * 100);
          const br = (0.55 + progress * 0.45).toFixed(3);
          imgEl.style.filter = `grayscale(${gs}%) brightness(${br})`;
        }
        if (dot) {
          if (progress > 0.7) dot.classList.add("active");
          else dot.classList.remove("active");
        }
      });
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="scroll-timeline" ref={timelineRef}>
      <div className="scroll-timeline-track">
        <div className="scroll-timeline-progress" ref={trackFillRef} style={{ height: "0%" }} />
      </div>

      {steps.map((step, index) => {
        const isReverse = index % 2 === 1;
        return (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
            className={`scroll-timeline-item${isReverse ? " reverse" : ""}`}
          >
            <div
              className="scroll-timeline-content"
              style={{ opacity: 0, transform: `translateX(${isReverse ? 18 : -18}px)` }}
            >
              <span className="scroll-timeline-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            <div className="scroll-timeline-dot-wrapper">
              <div className="scroll-timeline-dot">
                <span>{step.number}</span>
              </div>
            </div>

            <div
              className="scroll-timeline-image"
              style={{ opacity: 0.4, transform: `translateX(${isReverse ? -18 : 18}px)` }}
            >
              <Image
                src={step.image}
                alt={step.title}
                width={450}
                height={300}
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PrimaVisita() {
  return (
    <>
      <Head>
        <title>Prima Visita dal Dentista a Milano | Studio Pinoli</title>
        <meta
          name="description"
          content="Prima visita gratuita dal dentista a Milano presso Studio Pinoli. Valutazione completa della salute orale, piano di cura personalizzato e preventivo trasparente. Prenota ora."
        />
      </Head>

      <main id="main-content">
        {/* Hero */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-044-foto-nastia-cc1a9589.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Prima Visita</span>
            </nav>
            <h1>La Prima Visita In Studio</h1>
            <p>
              Ti accogliamo nel nostro Studio Medico a Milano, un ambiente sereno per conoscerci
              e capire insieme come prenderci cura di te.
            </p>
            <div className="page-hero-ctas">
              <Link  href={BOOKING_URL} target="_blank"
                rel="noopener noreferrer"  className="btn btn-primary">
                Prenota ora
              </Link>
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama ora
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}

        {/* Timeline Section with Scroll Progress */}
        <section className="section section-light pv-timeline-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il tuo percorso</span>
              <h2 className="section-title">Come Funziona la Prima Visita</h2>
              <p className="section-description">
                Ogni prima visita è pensata per farti sentire a tuo agio e garantirti la migliore esperienza possibile, fin dal primo momento.
              </p>
            </div>

            <ScrollTimeline steps={timelineSteps} />
          </div>
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">La Prima Visita In Pillole</span>
              <h2 className="section-title">Perché Scegliere Studio Pinoli</h2>
            </div>
            <div className="value-props-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="value-prop-item">
                  <div className="value-prop-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d={benefit.icon} />
                    </svg>
                  </div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> 
          {/* CTA → Pagina Servizi — full width, outside container */}
          <div className="pv-services-cta" style={{marginTop: "30px"}}>
            <div className="pv-services-cta-bg" aria-hidden="true" />
            <div className="pv-services-cta-inner">
              <div className="pv-services-cta-text">
                <span className="pv-services-cta-eyebrow">Approfondisci</span>
                <h3>La Prima Visita È Solo L'Inizio</h3>
                <p>
                  Questi quattro step descrivono il percorso generale di accoglienza comune a tutti i pazienti.
                  Ogni area di specializzazione — dall'Odontoiatria alla Bio-nutrizione, dalla Medicina Estetica all'Osteopatia — ha un proprio percorso clinico dedicato con protocolli, tempi e obiettivi specifici.
                </p>
              </div>
              <div className="pv-services-cta-action">
                <Link href="/i-nostri-servizi" className="pv-services-cta-btn">
                  Scopri tutti i servizi
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <ul className="pv-services-cta-pills" aria-label="Servizi disponibili">
                  <li className="pill-dental"><Link href="/servizi/odontoiatria">Odontoiatria</Link></li>
                  <li className="pill-nutrition"><Link href="/servizi/bionutrizione">Bio-nutrizione</Link></li>
                  <li className="pill-aesthetic"><Link href="/servizi/medicina-estetica">Medicina Estetica</Link></li>
                  <li className="pill-osteopatia"><Link href="/servizi/osteopatia">Osteopatia</Link></li>
                  <li className="pill-art"><Link href="/servizi/art-terapia">Art-Terapia</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        

        {/* What to Bring */}
        <section className="section">
          <div className="container">
            <div className="two-col-section">
              <div className="two-col-content">
                <span className="section-subtitle">Prima di venire</span>
                <h2>Cosa Portare</h2>
                <p>
               Per rendere la tua prima visita il più efficace possibile, ti consigliamo di portare con te alcuni documenti:
                </p>
<ul className="checklist-styled">
                  <li>
                    <span className="check-icon">✓</span>
                    <div>
                      <strong>Tessera sanitaria</strong>
                      <p>In corso di validità</p>
                    </div>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <div>
                      <strong>Radiografie precedenti</strong>
                      <p>Se ne hai di recenti, portale con te</p>
                    </div>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <div>
                      <strong>Lista farmaci</strong>
                      <p>Medicinali che stai assumendo</p>
                    </div>
                  </li>
                   <li>
                    <span className="check-icon">✓</span>
                    <div>
                      <strong>Lista esami clinici</strong>
                      <p>Se ne hai di recenti, portali con te</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/images/cosa-portare.jpeg"
                  alt="Dentista Studio Pinoli Milano — accoglienza prima visita"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Domande frequenti</span>
              <h2 className="section-title">Hai qualche dubbio?</h2>
              <p className="section-description">
                Le risposte alle domande più comuni sulla prima visita in Studio.
              </p>
            </div>
            <div className="faq-section-styled">
              {[
                {
                  question: "In cosa consiste la prima visita dal dentista?",
                  answer: "La prima visita comprende una valutazione della salute orale, l'analisi della situazione clinica e la raccolta delle informazioni utili per definire un piano di trattamento.",
                },
                {
                  question: "Quanto dura la prima visita odontoiatrica?",
                  answer: "Generalmente tra 30 e 60 minuti, a seconda della complessità del caso.",
                },
                {
                  question: "Durante la prima visita vengono fatte radiografie?",
                  answer: "Se necessario, possono essere eseguiti esami diagnostici per ottenere una valutazione più completa della situazione clinica.",
                },
                {
                  question: "È possibile ricevere un piano di trattamento dopo la visita?",
                  answer: "Sì. Dopo la valutazione il professionista può proporre le opzioni terapeutiche più adatte al caso specifico.",
                },
                {
                  question: "Posso fare domande durante la prima visita?",
                  answer: "Certamente. La prima visita è il momento ideale per chiarire dubbi sui trattamenti, sui tempi e sul percorso terapeutico.",
                },
              ].map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
