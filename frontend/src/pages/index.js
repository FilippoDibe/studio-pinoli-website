import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import postsData from "./api/posts.json";
import styles from "../styles/StudioHome.module.css";
import ServiceCard from "@/components/ui/ServiceCard";
const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";


const IMAGES = {
  hero: "/foto/image-003-foto-anna-sof-5706.jpg",
  about: "/foto/image-042-foto-nastia-cc1a9571.jpg",
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
    image: "/servizi/medicina-estetica.jpg",
    alt: "Trattamento medicina estetica viso Milano Studio Pinoli",
    accent: "#c16d43",
    theme: "aesthetic",
  },
  {
    tag: "Osteopatia",
    title: "Osteopatia a Milano",
    description: "Valutazioni e trattamenti osteopatici per migliorare postura, mobilità e benessere muscolo-scheletrico, in integrazione con il percorso clinico complessivo.",
    href: "/servizi/osteopatia",
    image: "/servizi/osteopatia-hd.jpg",
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
              <h1 className={styles.heroTag}>Studio Medico Dentistico a Milano</h1>
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
                <h2>Studio Medico Dentistico a Milano, cinque aree di competenza integrate</h2>
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
  <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaGrid}>
              <div className={styles.ctaContent}>
                <span className={styles.sectionTagLight}>Prima visita</span>
                <h3 style={{fontSize:"2.5rem", marginTop:"20px", color:"white"}}>Prenota una prima visita in Studio </h3>
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

      

      

        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h2>Contatti – Studio Medico Dentistico a Milano</h2>
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
          {/* {posts.length > 0 && (
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
        )} */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const latestPosts = Array.isArray(postsData) ? postsData.slice(0, 3) : [];
  return { props: { posts: latestPosts } };
}
