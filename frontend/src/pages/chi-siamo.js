import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Stats with numeric values for animation
const stats = [
  { number: 35, suffix: "+", label: "Anni di Esperienza" },
  { number: 15000, suffix: "+", label: "Pazienti Soddisfatti" },
  { number: 5, suffix: "", label: "Aree di Specializzazione" },
  { number: 98, suffix: "%", label: "Tasso di Soddisfazione" }
];

// Team members
const clinicalTeam = [
  {
    name: "Dr. Luca Maria Pinoli",
    role: "Medico Chirurgo, Odontoiatra",
    description: "Direttore sanitario dello Studio, specializzato in odontostomatologia e bio-nutrizione, con oltre 35 anni di esperienza è uno specialista nel campo dell’estetica dentale e della medicina integrata. Unisce la cura orale al benessere globale della persona, unendo tecniche avanzate di cura dentale a terapie naturali e nutrizionali che prendono in considerazione ogni aspetto della salute dell’individuo.",
    image: "/team/LUCA-MARIA.jpeg",
    color: "var(--color-dental)",
    specialty: "Odontoiatria",
  },
  {
    name: "Dr.ssa Diana Mihaela Bulache",
    role: "Igienista Dentale",
    description: "Igienista dentale specializzata nella prevenzione e nel mantenimento della salute orale. Promuove la salute orale come parte integrante del benessere complessivo dei nostri pazienti, attraverso trattamenti personalizzati e consigli pratici per una corretta igiene orale.",
    image: "/team/DIANA.jpeg",
    color: "var(--color-dental)",
    specialty: "Igiene Dentale",
  },
  {
    name: "Dr.ssa Marta Plutino",
    role: "Ortodontista",
    description: "Specialista in ortodonzia per adulti e bambini, con competenza in trattamenti fissi, mobili e allineatori invisibili. Guida ogni paziente verso un sorriso armonico con tecniche contemporanee, rispettando funzionalità occlusale ed estetica.",
    image: "/team/MARTA.jpeg",
    color: "var(--color-dental)",
    specialty: "Ortodonzia",
  },
  {
    name: "Dr. Alessandro Ploner",
    role: "Osteopata",
    description: "Osteopata specializzato nel trattamento di disfunzioni muscolo-scheletriche, posturali e cranio-sacrali. Collabora con l'équipe medica dello studio in ottica integrata, offrendo percorsi per dolori cronici, tensioni cervicali e problematiche correlate alla salute orale.",
    image: "/team/ALESSANDRO.jpeg",
    color: "var(--color-osteopatia)",
    specialty: "Osteopatia",
  },
  {
    name: "Dr.ssa Irina Metliaeva",
    role: "Art-Terapeuta",
    description: "Art-terapeuta con formazione in psicologia e terapia espressiva. Conduce percorsi di arte-terapia orientati alla gestione dello stress, all'equilibrio emotivo e al benessere psico-fisico, in un contesto clinico strutturato che valorizza l'espressione come strumento di cura.",
    image: "/team/IRINA.jpeg",
    color: "var(--color-art)",
    specialty: "Art-Terapia",
  },
];

const supportTeam = [
  {
    name: "Francesca Mazzardo",
    role: "Dirigente ASO",
    description: "Assistente alla Poltrona con anni di esperienza clinica e ruolo di coordinamento operativo. Supporta l'équipe medica durante le procedure garantendo efficienza, sicurezza e un ambiente sereno per ogni paziente.",
    image: "/team/FRANCESCA.jpeg",
  },
  {
    name: "Viktoriia Kushnyrik",
    role: "Assistente alla Poltrona (ASO)",
    description: "Assistente alla Poltrona con formazione specialistica nel supporto alle procedure odontoiatriche. Contribuisce con precisione e attenzione alla qualità di ogni trattamento, assicurando continuità e serenità al paziente in ogni fase della visita.",
    image: "/team/VIKTORIIA.jpeg",
  },
  {
    name: "Gabriella Mazzardo",
    role: "Segreteria",
    description: "Responsabile dell'accoglienza e della gestione amministrativa dello studio. Primo punto di contatto per i pazienti: coordina gli appuntamenti, gestisce le comunicazioni e si assicura che ogni visita sia organizzata con cura e puntualità.",
    image: "/team/GABRIELLA.jpeg",
  },
  {
    name: "Lorenzo Di Benedetto",
    role: "Amministratore",
    description: "Responsabile dell'amministrazione e della gestione strategica dello studio. Supervisiona i processi organizzativi, la comunicazione e le attività operative con l'obiettivo di garantire la migliore esperienza possibile ai pazienti e al team.",
    image: "/team/LORENZO.jpeg",
  },
];


// Values
const values = [
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    title: "Eccellenza",
    description: "Puntiamo alla massima qualità nella realizzazione di ogni piano di cura."
  },
  {
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    title: "Fiducia",
    description: "Costruiamo relazioni durature basate sulla trasparenza e sul rispetto reciproco."
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
    title: "Innovazione",
    description: "Ogni paziente è unico e merita un'attenzione personalizzata e premurosa."
  },
  {
    icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    title: "Approccio Umano",
    description: "Ogni paziente è unico e merita un'attenzione personalizzata e premurosa."
  }
];

// Team Carousel Component
function TeamCarousel({ members, label }) {
  const [current, setCurrent] = useState(0);
  const total = members.length;
  const timerRef = useRef(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("next");
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % total);
        setAnimating(false);
      }, 300);
    }, 4500);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (idx, dir = "next") => {
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((idx + total) % total);
      setAnimating(false);
    }, 300);
    startTimer();
  };

  const member = members[current];

  return (
    <div className="team-carousel">
      <p className="team-group-label">{label}</p>
      <div className={`team-carousel-card ${animating ? `exit-${direction}` : "enter"}`}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        {member.specialty && (
          <span className="team-carousel-badge" style={{ "--member-color": member.color }}>{member.specialty}</span>
        )}
        <div className="team-carousel-name-bar">
          <h4>{member.name}</h4>
          <p className="team-carousel-role">{member.role}</p>
        </div>
        <div className="team-carousel-overlay">
          <h4>{member.name}</h4>
          <p className="team-carousel-role">{member.role}</p>
          <p className="team-carousel-bio">{member.description}</p>
        </div>
      </div>
      <div className="team-carousel-controls">
        <button className="team-carousel-btn" onClick={() => go(current - 1, "prev")} aria-label="Precedente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div className="team-carousel-dots">
          {members.map((_, i) => (
            <button
              key={i}
              className={`team-carousel-dot${i === current ? " active" : ""}`}
              onClick={() => go(i, i > current ? "next" : "prev")}
              aria-label={members[i].name}
            />
          ))}
        </div>
        <button className="team-carousel-btn" onClick={() => go(current + 1, "next")} aria-label="Successivo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  );
}

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
        <title>Chi Siamo | Studio Dentistico Pinoli Milano dal 1989</title>
        <meta
          name="description"
          content="Studio Pinoli a Milano: dentisti e specialisti con oltre 35 anni di esperienza in odontoiatria, bionutrizione e medicina estetica. Scopri il nostro team e la nostra storia."
        />
      </Head>

      <main id="main-content">
        {/* Hero */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-020-foto-nastia-cc1a9475.jpg')" }}
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
             Da oltre 35 anni il nostro Studio Medico Dentistico a Milano si prende cura del sorriso e del benessere complessivo della persona. Un team di specialisti dedicati alla tua salute ed al tuo sorriso, pronti a dedicarti un’esperienza di cura personalizzata ed attenta ad ogni tua esigenza.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="container">
            <div className="about-hero-section">
              <div className="about-hero-content">
                <span className="section-subtitle">LA NOSTRA FILOSOFIA</span>
                <h2>Un Sorriso Sano Come Riflesso di Un Corpo in Armonia</h2>
                <p className="lead">
               La <b>missione</b> del nostro Studio Medico Dentistico a Milano è trasformare l’odontoiatria in un percorso di salute globale e di benessere complessivo per ogni paziente. 
                </p>
                <p className="lead">
                 I nostri <b>valori</b> si fondano sull’integrazione tra cura dentale e salute generale, rispettando l’interconnessione tra bocca, corpo e mente. Ci impegniamo a trattare ogni paziente con un approccio integrato, mirando non solo alla soluzione del problema, ma anche al suo benessere psico-fisico. 
                </p>
                {/* <p>
                  La nostra filosofia si basa sull'ascolto attento delle esigenze di ogni
                  paziente e sulla personalizzazione dei percorsi di cura: nessun protocollo
                  standard, solo trattamenti su misura per te.
                </p> */}
              </div>
              <div className="about-hero-image">
                <Image
                  src="/foto/image-021-foto-nastia-cc1a9478.jpg"
                  alt="Il team dello Studio Pinoli — dentisti e specialisti a Milano"
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

        {/* Team — Premium Layout */}
        <section className="section team-premium-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il nostro team</span>
              <h2 className="section-title">I Professionisti al Tuo Servizio</h2>
              <p className="section-description">
             Sarai accolto e seguito da un team di specialisti qualificati pronti ad offrirti cure di eccellenza.
              </p>
            </div>

            {/* Director — featured hero card */}
            <div className="team-director-card">
              <div className="team-director-info">
                <span className="team-director-label"> Direttore Sanitario</span>
                <h3>{clinicalTeam[0].name}</h3>
                <p className="team-director-role">{clinicalTeam[0].role}</p>
                <p className="team-director-bio">{clinicalTeam[0].description}</p>
                <span className="team-director-badge">{clinicalTeam[0].specialty}</span>
              </div>
              <div className="team-director-photo">
                <Image
                  src={clinicalTeam[0].image}
                  alt={clinicalTeam[0].name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="420px"
                />
              </div>
            </div>

            {/* Two carousels side by side */}
            <div className="team-carousels-row">
              <TeamCarousel members={clinicalTeam.slice(1)} label="Staff Clinico" />
              <TeamCarousel members={supportTeam} label="Staff di Studio" />
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
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama In Studio
              </a>
            </div>
          </div>
        </section>
        {/* Mission */}
        <section className="section section-light">
          <div className="container">
            <div className="two-col-section">
              <div className="two-col-image">
                <Image
                  src="/foto/image-029-foto-nastia-cc1a9504.jpg"
                  alt="Approccio integrato odontoiatria e benessere Studio Pinoli Milano"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <div className="two-col-content">
                <span className="section-subtitle">La nostra missione</span>
                <h2>Un Approccio Integrato alla Salute</h2>
                <p>
               Crediamo che il benessere sia il risultato dell'equilibrio tra corpo e mente. Per questo abbiamo sviluppato un approccio che integra diverse discipline:
                </p>
                <ul>
                  <li><strong>Odontoiatria</strong> - Per la salute del tuo sorriso</li>
                  <li><strong>Bio-nutrizione</strong> - Per un'alimentazione equilibrata</li>
                  <li><strong>Osteopartia</strong> - Per ritrovare equilibrio tra postura e movimento</li>
                  <li><strong>Medicina Estetica</strong> - Per valorizzare la tua bellezza naturale</li>
                  <li><strong>Art-Terapia</strong> - Per favorire benessere emotivo e serenità nel tuo percorso di cura</li>
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
              <p className="section-description" style={{ textWrap: "pretty" }}>
                Il nostro Studio Medico Dentistico si trova in Via Domenico Cimarosa 4, Milano (Corso Vercelli), facilmente raggiungibile in auto, con la metro M1 (Fermata Pagano) o con il tram (linee n.&nbsp;16, 29 e 30).
              </p>
            </div>

            <div className="two-col-section" style={{ marginTop: "40px" }}>
              <div className="two-col-content">
                <h3>Studio Pinoli</h3>
                <p style={{ fontSize: "1.1rem", marginBottom: "24px" }}>
                  <strong>Via Domenico Cimarosa, 4</strong><br />
                  20144 Milano - MI
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "30px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "40px", height: "40px", background: "var(--gray-100)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Telefono:</strong> <a href="tel:+393316713904">+39 3316713904</a>
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
                    src="https://maps.google.com/maps?q=Via+Domenico+Cimarosa+4,+20144+Milano+MI&output=embed&hl=it"
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

      
      </main>
    </>
  );
}
