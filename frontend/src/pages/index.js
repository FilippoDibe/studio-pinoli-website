import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import postsData from "./api/posts.json";
import styles from "../styles/StudioHome.module.css";

const IMAGES = {
  hero: "/media/studio-pinoli-social-3/images/image-003-foto-anna-sof-5706.jpg",
  about: "/media/studio-pinoli-social-3/images/image-018-foto-nastia-cc1a9472.jpg",
  primaVisita: "/media/studio-pinoli-social-3/images/image-019-foto-nastia-cc1a9473.jpg",
};
const HERO_VIDEO = "/media/studio-pinoli-social-3/videos/video-031-video-nastia-cc1a9649-mp4.mp4";

const services = [
  {
    title: "Odontoiatria",
    description: "Implantologia, ortodonzia, igiene e trattamenti specialistici per la salute del sorriso.",
    href: "/servizi/odontoiatria",
    image: "/media/studio-pinoli-social-3/images/image-013-foto-nastia-cc1a9446.jpg",
    accent: "#0066cc",
  },
  {
    title: "Bionutrizione",
    description: "Piani nutrizionali personalizzati per ritrovare energia, equilibrio e benessere quotidiano.",
    href: "/servizi/bionutrizione",
    image: "/media/studio-pinoli-social-3/images/image-024-foto-nastia-cc1a9492.jpg",
    accent: "#2a9d5b",
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti non invasivi per valorizzare i lineamenti in modo naturale e armonico.",
    href: "/servizi/medicina-estetica",
    image: "/media/studio-pinoli-social-3/images/image-025-foto-nastia-cc1a9493.jpg",
    accent: "#c16d43",
  },
  {
    title: "Medicina Integrata",
    description: "Un approccio completo che combina odontoiatria, prevenzione e benessere globale.",
    href: "/servizi/medicina-integrata",
    image: "/media/studio-pinoli-social-3/images/image-036-foto-nastia-cc1a9553.jpg",
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
        <title>Studio Pinoli | Dentista a Milano</title>
        <meta
          name="description"
          content="Studio Pinoli a Milano: odontoiatria, bionutrizione, medicina estetica e medicina integrata. Prenota la prima visita in studio."
        />
      </Head>

      <main id="main-content" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <Image
              src={IMAGES.hero}
              alt="Studio Pinoli a Milano"
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
              <h1>La tua salute, il nostro metodo</h1>
              <p>
                Un centro professionale dove odontoiatria e benessere si incontrano per offrirti un percorso
                personalizzato, chiaro e orientato al risultato.
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
                <h2>Un unico studio, piu aree di competenza</h2>
                <p>
                  Da Studio Pinoli trovi un team multidisciplinare che lavora in sinergia: odontoiatria,
                  nutrizione, medicina estetica e medicina integrata in un percorso costruito su di te.
                </p>
                <p>
                  Ti accompagniamo con un approccio concreto, tecnologie aggiornate e attenzione reale
                  all&apos;esperienza in studio.
                </p>
                <Link href="/chi-siamo" className={styles.textLink}>
                  Scopri il team
                </Link>
              </div>
              <div className={styles.aboutImageWrap}>
                <Image
                  src={IMAGES.about}
                  alt="Team medico dello Studio Pinoli"
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
                      alt={service.title}
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
                <h2>Inizia con una valutazione completa</h2>
                <p>
                  La prima visita e il momento in cui analizziamo la tua situazione clinica, ascoltiamo gli obiettivi
                  e definiamo il piano migliore per te.
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
                  alt="Accoglienza prima visita Studio Pinoli"
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
                <p>Ti aspettiamo in studio a Milano. Il team e disponibile per informazioni e appuntamenti.</p>
                <address>
                  <strong>Studio Pinoli</strong>
                  <br />
                  Via Losanna, 16
                  <br />
                  20154 Milano (MI)
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
