import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    title: "Gratuita",
    description: "La prima visita è completamente gratuita e senza impegno."
  },
  {
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    title: "Durata 45 minuti",
    description: "Dedichiamo tutto il tempo necessario per conoscerti."
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
    title: "Tecnologie Avanzate",
    description: "Diagnostica digitale e strumentazioni all'avanguardia."
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
        <title>Prima Visita | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Prenota la tua prima visita gratuita allo Studio Pinoli. Ti accogliamo per un colloquio conoscitivo e una valutazione completa della tua salute orale."
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
            <h1>La Tua Prima Visita</h1>
            <p>
              Il primo passo verso il tuo sorriso ideale. Ti accogliamo in un ambiente
              sereno per conoscerti e capire insieme come prenderci cura di te.
            </p>
            <div className="page-hero-ctas">
              <Link href="/contatti" className="btn btn-primary">
                Prenota ora - È gratuita
              </Link>
              <a href="tel:+390242272381" className="btn btn-secondary">
                Chiama: 02 4272381
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
                Un percorso studiato per farti sentire a tuo agio e garantirti la migliore esperienza.
              </p>
            </div>

            <ScrollTimeline steps={timelineSteps} />
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
                  alt="Team Studio Pinoli"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Prenota la Tua Prima Visita Gratuita</h2>
            <p>
              Il nostro team è pronto ad accoglierti. Chiamaci o compila il form per fissare un appuntamento.
            </p>
            <div className="cta-buttons">
              <Link href="/contatti" className="btn btn-primary">
                Prenota online
              </Link>
              <a href="tel:+390242272381" className="btn btn-secondary">
                Chiama: 02 4272381
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
