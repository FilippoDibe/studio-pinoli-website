import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import postsData from "./api/posts.json";

// Quick service links for homepage (simpler than full cards)
const quickServices = [
  { name: "Odontoiatria", href: "/servizi/odontoiatria", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6z", color: "var(--color-dental)" },
  { name: "Bionutrizione", href: "/servizi/bionutrizione", icon: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05l-5 2v5.12c0 .68-.06 1.36-.18 2.02l-.33 1.79c-.05.29-.24.53-.51.65l-1.49.69V22h2.57zM1 21.99h2v-10l-2.5 2.5.83.84L4 12.66V22h2v-8.66l-1.83 1.84.83.83.83-.84L8 17.16V22h6v-4.83l-.98-.98-1.02.98V14h-2v3.17l-1.17 1.17H7.5c-.83 0-1.5-.67-1.5-1.5V10.5L4 12.5V22H2v-9l-1 1v8z", color: "var(--color-nutrition)" },
  { name: "Medicina Estetica", href: "/servizi/medicina-estetica", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", color: "var(--color-aesthetic)" },
  { name: "Medicina Integrata", href: "/servizi/medicina-integrata", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v-2h2v-2h-2V9.5h-2V12H9v2h2v2z", color: "var(--color-integrative)" },
];

// Stats for homepage
const stats = [
  { number: 35, suffix: "+", label: "Anni di Esperienza" },
  { number: 15000, suffix: "+", label: "Pazienti Soddisfatti" },
  { number: 4, suffix: "", label: "Specializzazioni" },
  { number: 98, suffix: "%", label: "Soddisfazione" },
];

export default function Home({ posts }) {
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      <Head>
        <title>Studio Pinoli | Dentista a Milano - Odontoiatria e Benessere</title>
        <meta name="description" content="Studio Pinoli - Da oltre 35 anni il dentista a Milano vicino a te. Odontoiatria, bionutrizione, medicina estetica e integrata. Prenota la tua prima visita gratuita." />
      </Head>

      <main id="main-content">
        {/* Hero Section - Full Width with Video/Image Background */}
        <section className="home-hero">
          <div className="home-hero-bg">
            <Image
              src="/images/14_Services_Dental_Care-Hero.jpg"
              alt="Studio Pinoli Milano"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="home-hero-overlay" />
          <div className="container">
            <div className="home-hero-content">
              <span className="home-hero-badge">Da oltre 35 anni a Milano</span>
              <h1>Il Tuo Benessere<br />È la Nostra Missione</h1>
              <p>
                Odontoiatria d'eccellenza, bionutrizione, medicina estetica e integrata.
                Un approccio completo per prenderci cura di te.
              </p>
              <div className="home-hero-ctas">
                <Link href="/prima-visita" className="btn btn-primary btn-lg">
                  Prima Visita Gratuita
                </Link>
                <a href="tel:+390242272381" className="btn btn-glass">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  02 4272381
                </a>
              </div>
            </div>
          </div>

          {/* Quick Service Links */}
          <div className="home-hero-services">
            {quickServices.map((service, index) => (
              <Link key={index} href={service.href} className="quick-service-link">
                <div className="quick-service-icon" style={{ background: service.color }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d={service.icon} />
                  </svg>
                </div>
                <span>{service.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Bar */}
        <section className="home-stats-bar">
          <div className="container">
            <div className="home-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="home-stat-item">
                  <span className="home-stat-number">
                    {stat.number.toLocaleString()}{stat.suffix}
                  </span>
                  <span className="home-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="container">
            <div className="home-about-grid">
              <div className="home-about-images">
                <div className="home-about-img-main">
                  <Image
                    src="/images/chi-siamo-studio.jpg"
                    alt="Studio Pinoli"
                    width={500}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="home-about-img-float">
                  <Image
                    src="/images/chi-siamo-team-professionisti.jpg"
                    alt="Team"
                    width={250}
                    height={200}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="home-about-content">
                <span className="section-subtitle">Chi Siamo</span>
                <h2>Da Oltre 35 Anni il Dentista a Milano Vicino a Te</h2>
                <p className="lead">
                  Studio Pinoli offre un approccio integrato alla salute:
                  odontoiatria, bionutrizione, medicina estetica e medicina integrata.
                </p>
                <p>
                  Crediamo che il benessere nasca dall'equilibrio tra corpo e mente.
                  Il nostro team di specialisti lavora insieme per offrirti
                  percorsi di cura personalizzati e completi.
                </p>
                <ul className="home-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Tecnologie all'avanguardia
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Team multidisciplinare
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Piani di cura personalizzati
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Prima visita gratuita
                  </li>
                </ul>
                <Link href="/chi-siamo" className="btn btn-outline">
                  Scopri di più su di noi
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I Nostri Servizi</span>
              <h2 className="section-title">Un Approccio Integrato al Benessere</h2>
              <p className="section-description">
                Quattro aree di specializzazione per prenderci cura di te a 360 gradi
              </p>
            </div>

            <div className="home-services-preview">
              <div className="home-service-card">
                <div className="home-service-img">
                  <Image src="/images/14_Services_Dental_Care-Hero.jpg" alt="Odontoiatria" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="home-service-content">
                  <div className="home-service-icon" style={{ background: "var(--color-dental)" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                  </div>
                  <h3>Odontoiatria</h3>
                  <p>Implantologia, ortodonzia, igiene orale e tutti i trattamenti per il tuo sorriso.</p>
                  <Link href="/servizi/odontoiatria">Scopri di più →</Link>
                </div>
              </div>

              <div className="home-service-card">
                <div className="home-service-img">
                  <Image src="/images/home-bionutrizione.jpg" alt="Bionutrizione" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="home-service-content">
                  <div className="home-service-icon" style={{ background: "var(--color-nutrition)" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                  </div>
                  <h3>Bionutrizione</h3>
                  <p>Diete personalizzate e piani alimentari per il tuo benessere e peso forma.</p>
                  <Link href="/servizi/bionutrizione">Scopri di più →</Link>
                </div>
              </div>

              <div className="home-service-card">
                <div className="home-service-img">
                  <Image src="/images/home-trattamenti-estetici.jpg" alt="Medicina Estetica" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="home-service-content">
                  <div className="home-service-icon" style={{ background: "var(--color-aesthetic)" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                  </div>
                  <h3>Medicina Estetica</h3>
                  <p>Trattamenti non invasivi per contrastare i segni del tempo.</p>
                  <Link href="/servizi/medicina-estetica">Scopri di più →</Link>
                </div>
              </div>

              <div className="home-service-card">
                <div className="home-service-img">
                  <Image src="/images/chi-siamo-medicina-integrata.jpg" alt="Medicina Integrata" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="home-service-content">
                  <div className="home-service-icon" style={{ background: "var(--color-integrative)" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                  </div>
                  <h3>Medicina Integrata</h3>
                  <p>Approccio olistico con oli essenziali e aromaterapia.</p>
                  <Link href="/servizi/medicina-integrata">Scopri di più →</Link>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/i-nostri-servizi" className="btn btn-primary">
                Vedi tutti i servizi
              </Link>
            </div>
          </div>
        </section>

        {/* Prima Visita CTA */}
        <section className="home-prima-visita">
          <div className="container">
            <div className="home-pv-grid">
              <div className="home-pv-content">
                <span className="section-subtitle">Prima Visita Gratuita</span>
                <h2>Il Primo Passo Verso il Tuo Benessere</h2>
                <p>
                  Prenota la tua prima visita gratuita. Ti accoglieremo in studio per un
                  colloquio conoscitivo e una valutazione completa.
                </p>
                <ul className="home-pv-steps">
                  <li><span>1</span> Accoglienza in studio</li>
                  <li><span>2</span> Colloquio conoscitivo</li>
                  <li><span>3</span> Visita e diagnosi</li>
                  <li><span>4</span> Piano di cura personalizzato</li>
                </ul>
                <div className="home-pv-ctas">
                  <Link href="/prima-visita" className="btn btn-primary">
                    Scopri come funziona
                  </Link>
                  <Link href="/contatti" className="btn btn-outline">
                    Prenota ora
                  </Link>
                </div>
              </div>
              <div className="home-pv-image">
                <Image
                  src="/images/home-prima-visita.jpg"
                  alt="Prima Visita"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        {recentPosts.length > 0 && (
          <section className="section section-light">
            <div className="container">
              <div className="section-header">
                <span className="section-subtitle">Dal Nostro Blog</span>
                <h2 className="section-title">Consigli per la Tua Salute</h2>
              </div>

              <div className="home-blog-grid">
                {recentPosts.map((post) => (
                  <article key={post.id} className="home-blog-card">
                    <div className="home-blog-img">
                      <div className="home-blog-placeholder">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="home-blog-content">
                      <h3>
                        <Link href={`/blog/${post.slug}`}>
                          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                      </h3>
                      <Link href={`/blog/${post.slug}`} className="home-blog-link">
                        Leggi l'articolo →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <Link href="/blog" className="btn btn-outline">
                  Vai al blog
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Prenota il Tuo Appuntamento</h2>
            <p>
              Il nostro team è a tua disposizione. Contattaci per prenotare
              una visita o per qualsiasi informazione.
            </p>
            <div className="cta-buttons">
              <Link href="/contatti" className="btn btn-primary">
                Contattaci
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

export async function getStaticProps() {
  return {
    props: {
      posts: postsData || [],
    },
  };
}
