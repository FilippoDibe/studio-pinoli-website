import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Stats with numeric values for animation
const stats = [
  { number: 35, suffix: "+", label: "Anni di Esperienza" },
  { number: 15000, suffix: "+", label: "Pazienti Soddisfatti" },
  { number: 4, suffix: "", label: "Aree di Specializzazione" },
  { number: 98, suffix: "%", label: "Tasso di Soddisfazione" }
];

// Team members
const team = [
  {
    name: "Dott. Luca Pinoli",
    role: "Direttore Sanitario",
    description: "Specialista in Odontoiatria con oltre 35 anni di esperienza nel settore.",
    image: "/images/chi-siamo-dr-luca-pinoli.jpg"
  },
  {
    name: "Dott.ssa Rosa Nelly de Olazabal",
    role: "Odontoiatra",
    description: "Specializzata in implantologia e protesi dentale.",
    image: "/images/chi-siamo-odontoiatria.jpg"
  },
  {
    name: "Bionutrizionista",
    role: "Specialista Nutrizione",
    description: "Esperta in nutrizione clinica e piani alimentari personalizzati.",
    image: "/images/bionutrizionista.jpg"
  }
];

// Values
const values = [
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    title: "Eccellenza",
    description: "Puntiamo alla massima qualità in ogni trattamento, utilizzando tecnologie all'avanguardia."
  },
  {
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    title: "Fiducia",
    description: "Costruiamo relazioni durature basate sulla trasparenza e sul rispetto reciproco."
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
    title: "Innovazione",
    description: "Aggiornamento continuo per offrire le soluzioni più moderne ed efficaci."
  },
  {
    icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    title: "Approccio Umano",
    description: "Ogni paziente è unico e merita un'attenzione personalizzata e premurosa."
  }
];

// Animated Counter Component
function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="stat-number animated">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ChiSiamo() {
  return (
    <>
      <Head>
        <title>Chi Siamo | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Scopri la storia e il team di Studio Pinoli. Da oltre 35 anni ci prendiamo cura del benessere dei nostri pazienti a Milano."
        />
      </Head>

      <main id="main-content">
        {/* Hero */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/images/chi-siamo-studio.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Chi Siamo</span>
            </nav>
            <h1>Chi Siamo</h1>
            <p>
              Da oltre 35 anni ci prendiamo cura del benessere dei nostri pazienti.
              Un team di professionisti dedicati alla tua salute.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="container">
            <div className="about-hero-section">
              <div className="about-hero-content">
                <span className="section-subtitle">La nostra storia</span>
                <h2>Più di 35 Anni al Servizio del Tuo Sorriso</h2>
                <p className="lead">
                  Studio Pinoli nasce dalla passione per l'odontoiatria e dalla volontà
                  di offrire un servizio di eccellenza ai pazienti milanesi.
                </p>
                <p>
                  Nel corso degli anni abbiamo ampliato la nostra offerta, integrando
                  servizi di bionutrizione, medicina estetica e medicina integrata,
                  per un approccio completo al benessere della persona.
                </p>
                <p>
                  La nostra filosofia si basa sull'ascolto attento delle esigenze di
                  ogni paziente e sulla personalizzazione dei percorsi di cura.
                </p>
              </div>
              <div className="about-hero-image">
                <Image
                  src="/images/chi-siamo-team-professionisti.jpg"
                  alt="Team Studio Pinoli"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            {/* Stats with Animated Counters */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                  <h4>{stat.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I nostri valori</span>
              <h2 className="section-title">Cosa Ci Guida</h2>
            </div>

            <div className="value-props-grid">
              {values.map((value, index) => (
                <div key={index} className="value-prop-item">
                  <div className="value-prop-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d={value.icon} />
                    </svg>
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il nostro team</span>
              <h2 className="section-title">Professionisti al Tuo Servizio</h2>
              <p className="section-description">
                Un team di specialisti qualificati e costantemente aggiornati sulle
                ultime novità del settore.
              </p>
            </div>

            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-card-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={280}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="team-card-content">
                    <h4>{member.name}</h4>
                    <p className="team-card-role">{member.role}</p>
                    <p>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section section-light">
          <div className="container">
            <div className="two-col-section">
              <div className="two-col-image">
                <Image
                  src="/images/chi-siamo-medicina-integrata.jpg"
                  alt="Approccio integrato"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <div className="two-col-content">
                <span className="section-subtitle">La nostra missione</span>
                <h2>Un Approccio Integrato alla Salute</h2>
                <p>
                  Crediamo che il benessere sia il risultato dell'equilibrio tra corpo e mente.
                  Per questo abbiamo sviluppato un approccio che integra diverse discipline:
                </p>
                <ul>
                  <li><strong>Odontoiatria</strong> - Per la salute del tuo sorriso</li>
                  <li><strong>Bionutrizione</strong> - Per un'alimentazione equilibrata</li>
                  <li><strong>Medicina Estetica</strong> - Per valorizzare la tua bellezza naturale</li>
                  <li><strong>Medicina Integrata</strong> - Per il benessere globale</li>
                </ul>
                <Link href="/i-nostri-servizi" className="btn btn-blue" style={{ marginTop: "20px" }}>
                  Scopri i nostri servizi
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Dove siamo</span>
              <h2 className="section-title">Vieni a Trovarci</h2>
              <p className="section-description">
                Situati nel cuore di Milano, siamo facilmente raggiungibili con mezzi pubblici e privati.
              </p>
            </div>

            <div className="two-col-section" style={{ marginTop: "40px" }}>
              <div className="two-col-content">
                <h3>Studio Pinoli</h3>
                <p style={{ fontSize: "1.1rem", marginBottom: "24px" }}>
                  <strong>Via G. Chiminello 6</strong><br />
                  20146 Milano (Certosa) MI
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "30px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "40px", height: "40px", background: "var(--gray-100)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Telefono:</strong> <a href="tel:+390242272381">02 4272381</a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "40px", height: "40px", background: "var(--gray-100)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Email:</strong> <a href="mailto:info@studiopinoli.it">info@studiopinoli.it</a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "40px", height: "40px", background: "var(--gray-100)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Orari:</strong> Lun - Ven: 9:00 - 19:00
                    </div>
                  </div>
                </div>

                <Link href="/contatti" className="btn btn-primary">
                  Contattaci
                </Link>
              </div>
              <div className="two-col-image">
                <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", height: "350px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4!2d9.14!3d45.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI5JzI0LjAiTiA5wrAwOCcyNC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Inizia il Tuo Percorso con Noi</h2>
            <p>
              Prenota una visita e scopri come possiamo aiutarti a raggiungere il benessere che meriti.
            </p>
            <div className="cta-buttons">
              <Link href="/prima-visita" className="btn btn-primary">
                Prenota la prima visita
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
