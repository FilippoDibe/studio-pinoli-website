import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Timeline steps
const timelineSteps = [
  {
    number: "01",
    title: "Accoglienza",
    description: "Ti accogliamo nel nostro studio con un sorriso. Il nostro staff ti guiderà nella compilazione dei documenti necessari e ti farà sentire a casa.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    image: "/images/chi-siamo-studio.jpg"
  },
  {
    number: "02",
    title: "Colloquio Conoscitivo",
    description: "Un dialogo aperto per comprendere le tue esigenze, la tua storia clinica e le tue aspettative. Ascoltiamo attentamente per offrirti la miglior cura possibile.",
    icon: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z",
    image: "/images/Dentista-a-Milano-team.jpg"
  },
  {
    number: "03",
    title: "Visita Clinica",
    description: "Esame approfondito della tua salute orale con tecnologie diagnostiche all'avanguardia. Radiografie digitali e scanner 3D per una diagnosi precisa.",
    icon: "M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z",
    image: "/images/home-prima-visita.jpg"
  },
  {
    number: "04",
    title: "Piano di Cura",
    description: "Ti presentiamo un piano di trattamento personalizzato, chiaro e trasparente. Discutiamo insieme le opzioni, i tempi e i costi senza sorprese.",
    icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
    image: "/images/prima-visita-odontoiatrica.jpg"
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
            style={{ backgroundImage: "url('/images/home-prima-visita.jpg')" }}
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

        {/* Timeline Section */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il tuo percorso</span>
              <h2 className="section-title">Come Funziona la Prima Visita</h2>
              <p className="section-description">
                Un percorso studiato per farti sentire a tuo agio e garantirti la migliore esperienza.
              </p>
            </div>

            <div className="vertical-timeline">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                  <div className="timeline-content">
                    <div className="timeline-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <div className="timeline-line">
                    <div className="timeline-dot">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d={step.icon} />
                      </svg>
                    </div>
                  </div>
                  <div className="timeline-image">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={500}
                      height={350}
                      style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                    />
                  </div>
                </div>
              ))}
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
                  src="/images/chi-siamo-team.jpg"
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
