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
    description: "Ti accogliamo nel nostro studio con un sorriso. Il nostro staff ti guiderà nella compilazione dei documenti necessari e ti farà sentire a casa.",
    image: "/media/studio-pinoli-social-3/images/image-045-foto-nastia-cc1a9602.jpg"
  },
  {
    number: "02",
    title: "Colloquio Conoscitivo",
    description: "Un dialogo aperto per comprendere le tue esigenze, la tua storia clinica e le tue aspettative. Ascoltiamo attentamente per offrirti la miglior cura possibile.",
    image: "/media/studio-pinoli-social-3/images/image-046-foto-nastia-cc1a9608.jpg"
  },
  {
    number: "03",
    title: "Visita Clinica",
    description: "Esame approfondito della tua salute orale con tecnologie diagnostiche all'avanguardia. Radiografie digitali e scanner 3D per una diagnosi precisa.",
    image: "/media/studio-pinoli-social-3/images/image-047-foto-nastia-cc1a9610.jpg"
  },
  {
    number: "04",
    title: "Piano di Cura",
    description: "Ti presentiamo un piano di trattamento personalizzato, chiaro e trasparente. Discutiamo insieme le opzioni, i tempi e i costi senza sorprese.",
    image: "/media/studio-pinoli-social-3/images/image-048-foto-nastia-cc1a9613.jpg"
  }
];

// Benefits
const benefits = [

  {
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    title: "Durata 60 minuti",
    description: "Dedichiamo tutto il tempo necessario per conoscerci ed elaborare un piano di terapia efficace"
  },
    {
    icon: "M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5S13.38 8.5 12 8.5 9.5 7.38 9.5 6s1.12-2.5 2.5-2.5zM17 11.5c-.55 0-1 .45-1 1v1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 1.1.9 2 2 2h1v3h4v-3h1c1.1 0 2-.9 2-2v-4c0-.55-.45-1-1-1z",
    title: "Professionista Dedicato",
    description: "Un medico di riferimento ti segue dall'anamnesi al trattamento, garantendo continuità clinica e un ascolto attento ad ogni visita."
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
    title: "Tecnologie Avanzate",
    description: "Diagnostica digitale e strumentazioni all'avanguardia per la creazione di un piano di terapia adatto alle tue esigenze"
  },
  {
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    title: "Preventivo Trasparente",
    description: "Nessuna sorpresa: prezzi chiari e dettagliati."
  }
];

// Scroll Timeline Component
function ScrollTimeline({ steps }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;

      // Calculate how much of the timeline is visible/passed
      const startOffset = rect.top - windowHeight * 0.5;
      const endOffset = rect.bottom - windowHeight * 0.5;
      const totalScrollable = timelineHeight;

      if (startOffset > 0) {
        setScrollProgress(0);
      } else if (endOffset < 0) {
        setScrollProgress(100);
      } else {
        const progress = Math.abs(startOffset) / totalScrollable * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-timeline" ref={timelineRef}>
      {/* Center Line */}
      <div className="scroll-timeline-track">
        <div
          className="scroll-timeline-progress"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Timeline Items */}
      {steps.map((step, index) => {
        const stepProgress = (index / (steps.length - 1)) * 100;
        const isActive = scrollProgress >= stepProgress;

        return (
          <div
            key={index}
            className={`scroll-timeline-item ${index % 2 === 1 ? "reverse" : ""} ${isActive ? "active" : ""}`}
          >
            <div className="scroll-timeline-content">
              <span className="scroll-timeline-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            <div className="scroll-timeline-dot-wrapper">
              <div className={`scroll-timeline-dot ${isActive ? "active" : ""}`}>
                <span>{step.number}</span>
              </div>
            </div>

            <div className="scroll-timeline-image">
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
            style={{ backgroundImage: "url('/media/studio-pinoli-social-3/images/image-044-foto-nastia-cc1a9589.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Prima Visita</span>
            </nav>
            <h1>La Nostra Prima Visita</h1>
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
        <section className="section">
          <div className="container">
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

        {/* Timeline Section with Scroll Progress */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il tuo percorso</span>
              <h2 className="section-title">Come Funziona la Prima Visita</h2>
              <p className="section-description">
                Ogni prima visita dal dentista nel nostro studio a Milano è pensata per farti sentire
                a tuo agio e garantirti la migliore esperienza possibile, fin dal primo momento.
              </p>
            </div>

            <ScrollTimeline steps={timelineSteps} />

            {/* CTA → Pagina Servizi */}
            <div className="pv-services-cta">
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
                    <li><Link href="/servizi/odontoiatria">Odontoiatria</Link></li>
                    <li><Link href="/servizi/bionutrizione">Bio-nutrizione</Link></li>
                    <li><Link href="/servizi/medicina-estetica">Medicina Estetica</Link></li>
                    <li><Link href="/servizi/osteopatia">Osteopatia</Link></li>
                    <li><Link href="/servizi/art-terapia">Art-Terapia</Link></li>
                  </ul>
                </div>
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
                  Per rendere la tua prima visita il più efficace possibile, ti consigliamo
                  di portare con te alcuni documenti:
                </p>
                <ul className="checklist-styled">
                  <li>
                    <span className="check-icon">✓</span>
                    <div>
                      <strong>Documento d'identità</strong>
                      <p>Carta d'identità o passaporto valido</p>
                    </div>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <div>
                      <strong>Tessera sanitaria</strong>
                      <p>Se disponibile</p>
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
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/media/studio-pinoli-social-3/images/image-050-foto-nastia-cc1a9620.jpg"
                  alt="Dentista Studio Pinoli Milano — accoglienza prima visita"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
