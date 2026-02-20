import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import postsData from "./api/posts.json";
import styles from "../styles/StudioHome.module.css";

const IMAGES = {
  hero: "/media/studio-pinoli-social-3/images/image-003-foto-anna-sof-5706.jpg",
  about: "/media/studio-pinoli-social-3/images/image-042-foto-nastia-cc1a9571.jpg",
  primaVisita: "/media/studio-pinoli-social-3/images/image-057-foto-nastia-cc1a9651.jpg",
};
const HERO_VIDEO = "/media/studio-pinoli-social-3/videos/hero-home-horizontal.mp4";

const services = [
  {
    title: "Odontoiatria",
    description: "Implantologia, ortodonzia, igiene orale ed estetica dentale a Milano. Oltre 35 anni di esperienza per la salute del tuo sorriso.",
    href: "/servizi/odontoiatria",
    image: "/media/studio-pinoli-social-3/images/image-051-foto-nastia-cc1a9625.jpg",
    alt: "Trattamento odontoiatrico presso Studio Pinoli Milano",
    accent: "#0066cc",
  },
  {
    title: "Bionutrizione",
    description: "Piani alimentari personalizzati e consulenza nutrizionale a Milano per ritrovare energia, equilibrio e benessere duraturo.",
    href: "/servizi/bionutrizione",
    image: "/media/studio-pinoli-social-3/images/image-054-foto-nastia-cc1a9637.jpg",
    alt: "Consulenza bionutrizione e dieta personalizzata Milano Studio Pinoli",
    accent: "#2a9d5b",
  },
  {
    title: "Medicina Estetica",
    description: "Filler, biorivitalizzazione e trattamenti anti-aging a Milano. Risultati naturali con approccio non invasivo.",
    href: "/servizi/medicina-estetica",
    image: "/media/studio-pinoli-social-3/images/image-057-foto-nastia-cc1a9651.jpg",
    alt: "Trattamento medicina estetica viso Milano Studio Pinoli",
    accent: "#c16d43",
  },
  {
    title: "Medicina Integrata",
    description: "Approccio olistico che combina terapie naturali, aromaterapia e oli essenziali per il benessere globale a Milano.",
    href: "/servizi/medicina-integrata",
    image: "/media/studio-pinoli-social-3/images/image-058-foto-nastia-cc1a9658.jpg",
    alt: "Medicina integrata e benessere olistico Studio Pinoli Milano",
    accent: "#0f807d",
  },
];

const studioStats = [
  { value: "35+", label: "Anni di esperienza" },
  { value: "15.000+", label: "Pazienti seguiti" },
  { value: "4", label: "Aree specialistiche" },
  { value: "98%", label: "Soddisfazione" },
];

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
              <span className={styles.heroTag}>Studio Dentistico a Milano</span>
              <h1>La tua salute,<br />il nostro metodo</h1>
              <p>
                Il tuo dentista a Milano dal 1989: odontoiatria, implantologia, bionutrizione e medicina estetica
                in un unico studio. Un percorso personalizzato, chiaro e orientato al risultato.
              </p>
              <div className={styles.heroActions}>
                <Link href="/prima-visita" className="btn btn-primary btn-lg">
                  Prenota la prima visita
                </Link>
                <a href="tel:+390242272381" className="btn btn-white btn-lg">
                  02 4272381
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {studioStats.map((stat) => (
                <article key={stat.label} className={styles.statCard}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className="container">
            <div className={styles.aboutGrid}>
              <div className={styles.aboutContent}>
                <span className={styles.sectionTag}>Chi siamo</span>
                <h2>Un unico studio a Milano, quattro aree di competenza</h2>
                <p>
                  Da Studio Pinoli trovi un team multidisciplinare guidato dal Dott. Luca Pinoli: dentista a Milano
                  con oltre 35 anni di esperienza in odontoiatria, nutrizione, medicina estetica e medicina integrata,
                  con un percorso costruito su di te.
                </p>
                <p>
                  Tecnologie diagnostiche aggiornate, approccio minimamente invasivo e attenzione reale
                  all&apos;esperienza del paziente: questo è Studio Pinoli.
                </p>
                <Link href="/chi-siamo" className={styles.textLink}>
                  Scopri il team &rarr;
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
              <h2>Le aree principali dello studio</h2>
              <p>Percorsi specialistici integrati per la salute orale e il benessere complessivo.</p>
            </div>
            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <Link key={service.title} href={service.href} className={styles.serviceCard}>
                  <div className={styles.serviceImageWrap}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className={styles.coverImage}
                    />
                    <div className={styles.serviceImageOverlay} />
                  </div>
                  <div className={styles.serviceBody}>
                    <span style={{ backgroundColor: service.accent }} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <small>Scopri di piu</small>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaGrid}>
              <div className={styles.ctaContent}>
                <span className={styles.sectionTagLight}>Prima visita</span>
                <h2>Prima visita gratuita a Milano</h2>
                <p>
                  La prima visita è il momento in cui il nostro dentista a Milano analizza la tua situazione clinica,
                  ascolta i tuoi obiettivi e definisce il piano di cura migliore per te. È gratuita e senza impegno.
                </p>
                <ul>
                  <li>Analisi del quadro clinico</li>
                  <li>Piano di cura personalizzato</li>
                  <li>Preventivo chiaro e trasparente</li>
                </ul>
                <div className={styles.ctaActions}>
                  <Link href="/contatti" className="btn btn-white btn-lg">
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
                <h2>Contatti</h2>
                <p>Ti aspettiamo nel nostro studio dentistico a Milano. Il team è disponibile per informazioni e appuntamenti.</p>
                <address>
                  <strong>Studio Pinoli</strong>
                  <br />
                  Via G. Chiminello 6
                  <br />
                  20146 Milano (Certosa) MI
                </address>
                <p className={styles.phone}>
                  <a href="tel:+390242272381">02 4272381</a>
                </p>
                <Link href="/contatti" className="btn btn-primary">
                  Contattaci
                </Link>
              </div>
              <div className={styles.mapWrap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5!2d9.1686!3d45.4896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c14d8e6f6b67%3A0x5f8f8e8e8e8e8e8e!2sVia%20Losanna%2C%2016%2C%2020154%20Milano%20MI!5e0!3m2!1sit!2sit!4v1234567890"
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
