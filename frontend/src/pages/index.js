import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import postsData from "./api/posts.json";
import styles from "../styles/StudioHome.module.css";
const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";


const IMAGES = {
  hero: "/media/studio-pinoli-social-3/images/image-003-foto-anna-sof-5706.jpg",
  about: "/media/studio-pinoli-social-3/images/image-042-foto-nastia-cc1a9571.jpg",
  primaVisita: "/prima-visita/prima-visita.jpg",
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
    image: "/servizi/medicina-estetica.jpg",
    alt: "Trattamento medicina estetica viso Milano Studio Pinoli",
    accent: "#c16d43",
  },
  // {
  //   tag: "Medicina Integrata",
  //   title: "Medicina Integrata",
  //   description: "Approccio olistico che combina terapie naturali, aromaterapia e oli essenziali per il benessere globale a Milano.",
  //   href: "/servizi/medicina-integrata",
  //   image: "/media/studio-pinoli-social-3/images/image-058-foto-nastia-cc1a9658.jpg",
  //   alt: "Medicina integrata e benessere olistico Studio Pinoli Milano",
  //   accent: "#0f807d",
  // },
    {
    tag: "Osteopatia",
    title: "Osteopatia a Milano",
    description: "Valutazioni e trattamenti osteopatici per migliorare postura, mobilità e benessere muscolo-scheletrico, in integrazione con il percorso clinico complessivo.",
    href: "/servizi/osteopatia",

    image: "/servizi/osteopatia-hd.jpg",
    alt: "Trattamenti osteopatici Studio Pinoli Milano",
    accent: "#0f807d",
  },
    {
    tag: "Art-Terapia",
    title: "Art-Terapia a Milano",
    description: "Percorsi di art-terapia orientati alla gestione dello stress, all’equilibrio emotivo e al benessere psico-fisico, in un contesto medico strutturato.",
    href: "/servizi/art-terapia",
    image: "/servizi/art-terapia-hd.jpg",
    alt: "Trattamenti art-terapia Studio Pinoli Milano",
    accent: "#0f807d",
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

function ServiceCarousel() {
  const total = services.length;
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
        {services.map((service, i) => (
          <div key={i} className={styles.carouselSlide}>
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="100vw"
              className={styles.coverImage}
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
        {services.map((s, i) => (
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

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Studio Pinoli | Dentista a Milano dal 1989</title>
        <meta
          name="description"
          content="Studio Pinoli, dentista a Milano dal 1989. Odontoiatria, implantologia, ortodonzia, bionutrizione e medicina estetica in un unico studio. Prima visita gratuita."
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
              <h1 className={styles.heroTag}>Studio Dentistico a Milano</h1>
              <h1>Odontoiatria, Bio-Nutrizione e Medicina integrata</h1>
              <p>
               Centro medico nel cuore di Milano specializzato in odontoiatria, bio-nutrizione e medicina olistica, con percorsi personalizzati per chi ricerca qualità, precisione e risultati duraturi nel tempo.
              </p>
              <div className={styles.heroActions}>
                <Link href="/prima-visita" className="btn btn-primary btn-lg">
                  Prenota la prima visita
                </Link>
                <a href="tel:+393316713904" className="btn btn-white btn-lg">
                  Chiama ora
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
              <div className={styles.aboutContent}>
                <span className={styles.sectionTag}>Chi siamo</span>
                <h2>Studio medico a Milano, cinque aree di competenza integrate</h2>
                <p>
                  <b>Studio Pinoli</b>, situato nel cuore di Milano, è uno Studio medico specializzato in <b>odontoiatria, bio-nutrizione e medicina integrata</b>. Lo Studio, guidato dalla direzione sanitaria del Dr. Luca Maria Pinoli, offre un ambiente dove professionisti del benessere lavorano in sinergia per offrirti un percorso di cure personalizzato.
                </p>
                <p>
               Da oltre 35 anni, accompagniamo i nostri pazienti con un approccio clinico integrato, grazie all’utilizzo di tecnologie avanzate e un’attenzione costante alla qualità dell’esperienza clinica in Studio.
                </p>
                <Link href="/chi-siamo" className={styles.textLink}>
                  Scopri il nostro team &rarr;
                </Link>
              </div>
              <div className={styles.aboutImageWrap}>
                <Image
                  src={IMAGES.about}
                  alt="Il team di dentisti e specialisti dello Studio Pinoli a Milano"
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  className={styles.coverImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.sectionTag}>Servizi</span>
              <h2>Le aree di specializzazione dello Studio</h2>
              <p>Offriamo percorsi clinici integrati per la salute orale, l’equilibrio psico-fisico e il benessere estetico del paziente.</p>
            </div>
            <ServiceCarousel />
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaGrid}>
              <div className={styles.ctaContent}>
                <span className={styles.sectionTagLight}>Prima visita</span>
                <h3 style={{fontSize:"2.5rem", marginTop:"20px"}}>Prenota una prima visita in Studio </h3>
                <p>
               La prima visita e il momento in cui analizziamo la tua situazione clinica, ascoltiamo i tuoi obiettivi e definiamo il piano di cure migliore per te. 
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

        {posts.length > 0 && (
          <section className={styles.blogSection}>
            <div className="container">
              <div className={styles.blogHead}>
                <h2>Dal nostro blog</h2>
                <Link href="/blog" className={styles.textLink}>
                  Tutti gli articoli
                </Link>
              </div>
              <div className={styles.blogGrid}>
                {posts.map((post) => (
                  <article key={post.id} className={styles.blogCard}>
                    <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <Link href={`/blog/${post.slug}`} className={styles.textLink}>
                      Leggi articolo
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h2>Contatti – Studio Dentistico a Milano</h2>
                <p>Ti aspettiamo nel nostro <b>Studio medico dentistico a Milano</b>  per informazioni, consulenze e appuntamenti personalizzati.</p>
                <address>
                  <strong>Studio Pinoli</strong>
                  <br />
                  Via Domenico Cimarosa, 4
                  <br />
                  20144 Milano (MI)
                </address>
                <p className={styles.phone}>
                  <a href="tel:+393316713904">+39 3316713904</a>
                </p>
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

export async function getStaticProps() {
  const latestPosts = Array.isArray(postsData) ? postsData.slice(0, 3) : [];
  return { props: { posts: latestPosts } };
}
