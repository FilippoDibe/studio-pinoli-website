import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ui/ServiceCard";
import postsData from "./api/posts.json";

// 4 Macro Services
const services = [
  {
    title: "Odontoiatria",
    description: "Da oltre 35 anni offriamo cure odontoiatriche di eccellenza. Implantologia, ortodonzia, igiene orale e molto altro.",
    image: "/images/14_Services_Dental_Care-Hero.jpg",
    icon: "/images/dentist-chair.svg",
    href: "/servizi/odontoiatria",
    theme: "dental",
  },
  {
    title: "Bionutrizione",
    description: "Diete personalizzate e piani alimentari su misura per raggiungere il tuo peso forma e migliorare il benessere.",
    image: "/images/home-bionutrizione.jpg",
    icon: "/images/diet.svg",
    href: "/servizi/bionutrizione",
    theme: "nutrition",
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti estetici non invasivi per contrastare i segni del tempo. Filler, biorivitalizzazione e anti-aging.",
    image: "/images/home-trattamenti-estetici.jpg",
    icon: "/images/17_Services_SpaBeauty-Logo.png",
    href: "/servizi/medicina-estetica",
    theme: "aesthetic",
  },
  {
    title: "Medicina Integrata",
    description: "Un approccio olistico alla salute che unisce corpo e mente. Oli essenziali, aromaterapia e benessere completo.",
    image: "/images/chi-siamo-medicina-integrata.jpg",
    icon: "/images/Dentista-A-Milano-Medicina-Integrata.svg",
    href: "/servizi/medicina-integrata",
    theme: "integrative",
  },
];

// Features
const features = [
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    title: "Ambiente Sereno",
    description: "Uno studio accogliente dove il tuo benessere è la nostra priorità."
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    title: "Team Specializzato",
    description: "Professionisti qualificati pronti a guidarti nel percorso di cura."
  },
  {
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
    title: "Cure Personalizzate",
    description: "Ogni trattamento è studiato sulle tue specifiche esigenze."
  },
  {
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    title: "Tecnologie Moderne",
    description: "Strumentazioni all'avanguardia per diagnosi e trattamenti efficaci."
  }
];

export default function Home({ posts }) {
  const recentPosts = posts.slice(0, 4);

  return (
    <>
      <Head>
        <title>Studio Pinoli | Odontoiatria, Bionutrizione e Medicina Integrata a Milano</title>
        <meta name="description" content="Studio Pinoli - Da oltre 35 anni il dentista a Milano vicino a te. Odontoiatria, bionutrizione, medicina estetica e integrata. Prenota la tua prima visita." />
      </Head>

      <main id="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Studio Pinoli</h1>
              <p className="hero-subtitle">
                Odontoiatria, Bionutrizione e Medicina Integrata a Milano.<br />
                Da oltre 35 anni al servizio del tuo benessere.
              </p>
              <div className="hero-ctas">
                <Link href="/contatti" className="btn btn-primary">
                  Prenota un appuntamento
                </Link>
                <Link href="/i-nostri-servizi" className="btn btn-secondary">
                  Scopri i nostri servizi
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Da Oltre 35 Anni Il Dentista a Milano Vicino a Te</h2>
            <p>
              Cerchi un dentista a Milano? Vuoi rimetterti in forma con una dieta personalizzata?
              Desideri ritrovare il tuo benessere completo?
            </p>
            <p>
              Studio Pinoli offre un approccio integrato alla salute: odontoiatria, bionutrizione,
              medicina estetica e medicina integrata. Crediamo che il benessere nasca dall'equilibrio
              tra corpo e mente.
            </p>
            <Link href="/chi-siamo" className="btn btn-outline">
              Scopri chi siamo
            </Link>
          </div>
        </section>

        {/* Services Section - 4 Macro Cards */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I nostri servizi</span>
              <h2 className="section-title">Un Approccio Integrato alla Salute</h2>
              <p className="section-description">
                Quattro aree di specializzazione per prenderci cura del tuo benessere a 360 gradi.
              </p>
            </div>

            <div className="macro-services-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  icon={service.icon}
                  href={service.href}
                  theme={service.theme}
                />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/i-nostri-servizi" className="btn btn-blue">
                Scopri tutti i servizi
              </Link>
            </div>
          </div>
        </section>

        {/* About Section with Image */}
        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div className="about-image">
                <Image
                  src="/images/chi-siamo-studio.jpg"
                  alt="Studio Pinoli Milano"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
              <div className="about-content">
                <h2>L'Esperienza al Servizio del Tuo Benessere</h2>
                <p>
                  Da oltre 35 anni offriamo cure odontoiatriche di alta qualità,
                  servizi di bionutrizione, trattamenti estetici e medicina integrata
                  per il tuo benessere fisico completo.
                </p>
                <Link href="/chi-siamo" className="btn btn-outline">
                  Scopri chi siamo
                </Link>

                <h3 style={{ marginTop: 40 }}>Prima Visita in Studio</h3>
                <ul className="check-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Visita dello Studio
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Colloquio conoscitivo
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Raccolta dati digitale
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Piano di cura personalizzato
                  </li>
                </ul>
                <Link href="/prima-visita" className="btn btn-blue">
                  Scopri di più
                </Link>
              </div>
            </div>

            {/* Features */}
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="60" height="60">
                      <path d={feature.icon} />
                    </svg>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section section-light">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <span className="section-subtitle">Vuoi saperne di più?</span>
                <h2>Contatta il Tuo Dentista a Milano</h2>
                <p>
                  Situati nel cuore di Milano, siamo facilmente raggiungibili sia
                  con i mezzi pubblici che in auto. Vieni a trovarci per una prima
                  visita o per maggiori informazioni sui nostri servizi.
                </p>
                <ul className="check-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Cure Personalizzate
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Una Struttura d'avanguardia
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Un'Equipe a Disposizione a 360°
                  </li>
                </ul>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
                  <Link href="/contatti" className="btn btn-primary">
                    Contattaci
                  </Link>
                  <a href="tel:+390242272381" className="btn btn-outline">
                    Chiama: 02 4272381
                  </a>
                </div>
              </div>
              <div className="about-image">
                <Image
                  src="/images/chi-siamo-team.jpg"
                  alt="Team Studio Pinoli"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Fai il Primo Passo Verso il Tuo Benessere</h2>
            <p>
              Prenota una consulenza con i nostri specialisti e scopri il percorso
              di cura più adatto alle tue esigenze.
            </p>
            <div className="cta-buttons">
              <Link href="/contatti" className="btn btn-primary">
                Prenota ora la tua visita
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        {recentPosts.length > 0 && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-subtitle">Dal nostro blog</span>
                <h2 className="section-title">Consigli per la Tua Salute</h2>
                <p className="section-description">
                  Pubblichiamo contenuti utili per il benessere del tuo corpo.
                  Segui il nostro Blog per rimanere aggiornato.
                </p>
              </div>

              <div className="blog-grid">
                {recentPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image">
                      <div style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"
                      }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="blog-card-content">
                      <p className="blog-card-category">Salute e Benessere</p>
                      <h3>
                        <Link href={`/blog/${post.slug}`}>
                          {post.title.rendered}
                        </Link>
                      </h3>
                      <Link href={`/blog/${post.slug}`} className="blog-card-link">
                        Leggi tutto
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
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
