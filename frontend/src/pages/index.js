import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/StudioHome.module.css";
import ServiceCard from "@/components/ui/ServiceCard";
const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";

const IMAGES = {
  hero: "/foto/image-003-foto-anna-sof-5706.jpg",
  about: "/images/logo.png",
  primaVisita: "/images/ingresso.jpeg",
};
const HERO_VIDEO = "/video/hero-pinoli.mp4";

const services = [
  {
    tag: "Odontoiatria",
    title: "Odontoiatria a Milano",
    description: "Odontoiatria conservativa, protesi, implantologia, ortodonzia invisibile, igiene professionale ed estetica dentale per garantire salute, funzionalità e un sorriso armonico nel tempo.",
    href: "/servizi/odontoiatria",
    image: "/servizi/odontoriatria.jpg",
    alt: "Trattamento odontoiatrico presso Studio Pinoli Milano",
    accent: "#0066cc",
    theme: "dental",
  },
  {
    tag: "Bio-nutrizione",
    title: "Bio-nutrizione a Milano",
    description: "Piani nutrizionali personalizzati per migliorare energia, composizione corporea e performance mentale, con un approccio scientifico e monitoraggio costante nel tempo.",
    href: "/servizi/bionutrizione",
    image: "/servizi/Biochimica-nutrizione_Immagine_blog-.jpg",
    alt: "Consulenza bionutrizione e dieta personalizzata Milano Studio Pinoli",
    accent: "#2a9d5b",
    theme: "nutrition",
  },
  {
    tag: "Medicina Estetica",
    title: "Medicina Estetica a Milano",
    description: "Trattamenti non invasivi e protocolli medicali per valorizzare i lineamenti in modo naturale, con risultati eleganti e armonici.",
    href: "/servizi/medicina-estetica",
    image: "/servizi/medicinaestetica.jpg",
    alt: "Trattamento medicina estetica viso Milano Studio Pinoli",
    accent: "#c16d43",
    theme: "aesthetic",
  },
  {
    tag: "Osteopatia",
    title: "Osteopatia a Milano",
    description: "Valutazioni e trattamenti osteopatici per migliorare postura, mobilità e benessere muscolo-scheletrico, in integrazione con il percorso clinico complessivo.",
    href: "/servizi/osteopatia",
    image: "/servizi/osteopatia.jpg",
    alt: "Trattamenti osteopatici Studio Pinoli Milano",
    accent: "#5c6bc0",
    theme: "osteopatia",
  },
  {
    tag: "Art-Terapia",
    title: "Art-Terapia a Milano",
    description: "Percorsi di art-terapia orientati alla gestione dello stress, all’equilibrio emotivo e al benessere psico-fisico, in un contesto medico strutturato.",
    href: "/servizi/art-terapia",
    image: "/servizi/art-terapia-hd.jpg",
    alt: "Trattamenti art-terapia Studio Pinoli Milano",
    accent: "#a0522d",
    theme: "art",
  },
];
const valueProps = [
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    title: "Oltre 35 Anni di Esperienza",
    description: "Professionalità consolidata e aggiornamento continuo per garantire le migliori cure.",
  },
  {
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    title: "Approccio Integrato",
    description: "Combiniamo odontoiatria, nutrizione e medicina integrata per il tuo benessere completo.",
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    title: "Team Specializzato",
    description: "Professionisti qualificati pronti ad accoglierti e guidarti nel tuo percorso di cura.",
  },
  {
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    title: "Tecnologie Moderne",
    description: "Strumentazioni all'avanguardia per diagnosi precise e trattamenti efficaci.",
  },
];
const studioStats = [
  { numeric: 35,    suffix: "+",  label: "Anni di esperienza" },
  { numeric: 15000, suffix: "+",  label: "Pazienti seguiti" },
  { numeric: 5,     suffix: "",   label: "Aree specialistiche" },
  { numeric: 98,    suffix: "%",  label: "Soddisfazione" },
];

function StatCard({ numeric, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const fps = 60;
          const steps = Math.round((duration / 1000) * fps);
          let step = 0;
          const timer = setInterval(() => {
            step++;
            // easeOutQuad
            const progress = 1 - Math.pow(1 - step / steps, 2);
            const current = Math.round(progress * numeric);
            setCount(current);
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric]);

  const formatted = count >= 1000 ? count.toLocaleString("it-IT") : String(count);

  return (
    <article ref={ref} className={styles.statCard}>
      <strong>{formatted}{suffix}</strong>
      <span>{label}</span>
    </article>
  );
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Pinoli | Dentista a Milano dal 1989</title>
        <meta
          name="description"
          content="Studio Pinoli, dentista a Milano dal 1989. Odontoiatria, implantologia, ortodonzia, bionutrizione e medicina estetica in un unico studio. Prima visita gratuita."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Studio Pinoli | Dentista a Milano dal 1989" />
        <meta property="og:description" content="Studio Pinoli, dentista a Milano dal 1989. Odontoiatria, implantologia, ortodonzia, bionutrizione e medicina estetica in un unico studio." />
        <meta property="og:image" content="https://www.studiopinoli.it/foto/image-003-foto-anna-sof-5706.jpg" />
        {/* Schema.org JSON-LD — LocalBusiness / Dentist */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Dentist", "MedicalClinic"],
              "name": "Studio Pinoli",
              "description": "Studio medico dentistico a Milano dal 1989. Odontoiatria, bionutrizione, medicina estetica, osteopatia e art-terapia.",
              "url": "https://www.studiopinoli.it",
              "telephone": "+390242272381",
              "email": "info@studiopinoli.it",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Domenico Cimarosa, 4",
                "addressLocality": "Milano",
                "postalCode": "20144",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.4645,
                "longitude": 9.1565
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              ],
              "image": "https://www.studiopinoli.it/foto/image-003-foto-anna-sof-5706.jpg",
              "priceRange": "€€",
              "medicalSpecialty": ["Dentistry", "Nutrition", "Aesthetic Medicine"]
            })
          }}
        />
      </Head>

      <main id="main-content" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <Image
              src={IMAGES.hero}
              alt="Studio dentistico Pinoli — sala accoglienza pazienti a Milano"
              fill
              priority
              sizes="100vw"
              className={styles.heroImageFallback}
            />
            <video
              className={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={IMAGES.hero}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
          </div>
          <div className={styles.heroOverlay} />

          <div className="container">
            <div className={styles.heroContent}>
              <p className={styles.heroTag}>Studio Medico Dentistico a Milano</p>
              <h1>Odontoiatria, Bio-Nutrizione e Medicina integrata</h1>
              <p>
               Studio Medico Dentistico nel cuore di Milano specializzato in odontoiatria, bio-nutrizione e medicina integrata, con percorsi personalizzati per chi ricerca qualità, precisione e risultati duraturi nel tempo.
              </p>
              <div className={styles.heroActions}>
                <Link     href={BOOKING_URL}     target="_blank"
                rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  Prenota una visita
                </Link>
                 
                <a href="tel:+393316713904" className="btn btn-white btn-lg">
                  Chiama in Studio
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {studioStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className="container">
            <div className={styles.aboutGrid}>
                <div className={styles.logoBrandPanel}>
                  <div className={styles.logoBrandRingOuter} aria-hidden="true" />
                  <div className={styles.logoBrandRing} aria-hidden="true" />
                  <div className={styles.logoBrandRing2} aria-hidden="true" />
                  <div className={styles.logoBrandAccent} aria-hidden="true" />
                  <div className={styles.logoBrandInner}>
                    <Image
                      src="/images/logo.png"
                      alt="Studio Pinoli"
                      width={260}
                      height={260}
                      style={{ width: "auto", height: "auto", maxWidth: "500px", position: "relative", zIndex: 1 }}
                    />
                  </div>
                </div>
              <div className={styles.aboutContent}>
                <span className={styles.sectionTag}>Chi siamo</span>
                <h2>Studio Medico Dentistico a Milano</h2>
                <p>
                  <b>Studio Pinoli</b>, situato nel cuore di Milano, è uno Studio Medico Dentistico specializzato in <b>odontoiatria, bio-nutrizione e medicina integrata</b>. 
                </p>
                <p>
               Da oltre 35 anni, accompagniamo i nostri pazienti con un approccio clinico integrato, grazie all’utilizzo di tecnologie avanzate e un’attenzione costante alla qualità dell’esperienza clinica in Studio.
                </p>
                <Link href="/chi-siamo" className={styles.textLink}>
                  Scopri il nostro team &rarr;
                </Link>
              </div>
            
            </div>
          </div>
        </section>

        
        {/* Services mosaic */}
        <section className="mosaic-section">
          <div className="mosaic-section-bg" aria-hidden="true" />
          <div className="mosaic-section-topline" aria-hidden="true" />
          <div className="container">
            <div className="mosaic-header">
              <div className="mosaic-header-logo">
                <Image
                  src="/images/studio-pinoli-logo-oriz-1.png"
                  alt="Studio Pinoli"
                  width={180}
                  height={68}
                  style={{ width: "100%", height: "auto", filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div className="mosaic-header-divider" aria-hidden="true" />
              <div className="mosaic-header-text">
                <span className="mosaic-section-subtitle">Aree di specializzazione</span>
                <h2 className="mosaic-section-title">Le Nostre Aree di Specializzazione</h2>
              </div>
            </div>
            <div className="mosaic-services-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  href={service.href}
                  theme={service.theme}
                  num={String(index + 1).padStart(2, "0")}
                />
              ))}
            </div>
          </div>
        </section>
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
        <section style={{marginBottom: '100px'}} className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaGrid}>
              <div className={styles.ctaContent}>
                <span className={styles.sectionTagLight}>Prima visita</span>
                <h3 style={{fontSize:"2.5rem", marginTop:"20px", color:"white"}}>Prenota una prima visita in Studio </h3>
                <p>
               La prima visita è il momento in cui analizziamo la tua situazione clinica, ascoltiamo i tuoi obiettivi e definiamo il piano di cure migliore per te. 
                </p>
                <ul>
                  <li>Analisi del quadro clinico</li>
                  <li>Piano di cura personalizzato</li>
                  <li>Preventivo chiaro e trasparente</li>
                </ul>
                <div className={styles.ctaActions}>
                  <Link href={BOOKING_URL} className="btn btn-white btn-lg"  target="_blank"
                rel="noopener noreferrer" >
                    Prenota ora
                  </Link>
                  <Link href="/prima-visita" className={styles.ctaGhostBtn}>
                    Come funziona
                  </Link>
                </div>
              </div>
              <div className={styles.ctaImageWrap}>
                <Image
                  src={IMAGES.primaVisita}
                  alt="Prima visita dentista gratuita Studio Pinoli Milano"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.coverImage}
                />
              </div>
            </div>
          </div>
        </section>

      

        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h2>Contatti – Studio Medico Dentistico a Milano</h2>
                <p>Ti aspettiamo nel nostro <b>Studio Medico Dentistico a Milano</b>  per informazioni, consulenze e appuntamenti personalizzati.</p>
                <address>
                  <strong>Studio Pinoli</strong>
                  <br />
                  Via Domenico Cimarosa, 4
                  <br />
                  20144 Milano (MI)
                </address>
                
                <Link style={{ marginTop: '1.2rem' }} href="/contatti" className="btn btn-primary">
                  Contattaci
                </Link>
              </div>
              <div className={styles.mapWrap}>
                <iframe
                  src="https://maps.google.com/maps?q=Via+Domenico+Cimarosa+4,+20144+Milano+MI&output=embed&hl=it"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Studio Pinoli"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

