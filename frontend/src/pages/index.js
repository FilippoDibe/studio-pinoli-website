import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import postsData from "./api/posts.json";

// Animated Counter Hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, target, duration]);

  return { count, ref };
}

// Stat Item Component
function StatItem({ number, suffix, label }) {
  const { count, ref } = useCountUp(number);

  return (
    <div className="hero-stat" ref={ref}>
      <span className="hero-stat-number">
        {count.toLocaleString('it-IT')}<span className="hero-stat-suffix">{suffix}</span>
      </span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

// Services data
const services = [
  {
    title: "Odontoiatria",
    description: "Implantologia, ortodonzia, igiene dentale e tutti i trattamenti per un sorriso sano e bello.",
    href: "/servizi/odontoiatria",
    image: "/images/14_Services_Dental_Care-Hero.jpg",
    color: "#0066CC"
  },
  {
    title: "Bionutrizione",
    description: "Percorsi nutrizionali personalizzati per raggiungere il tuo peso forma e migliorare il benessere.",
    href: "/servizi/bionutrizione",
    image: "/images/home-bionutrizione.jpg",
    color: "#27AE60"
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti non invasivi per contrastare i segni del tempo e valorizzare la tua bellezza naturale.",
    href: "/servizi/medicina-estetica",
    image: "/images/home-trattamenti-estetici.jpg",
    color: "#8E44AD"
  },
  {
    title: "Medicina Integrata",
    description: "Un approccio olistico che unisce le cure tradizionali all'aromaterapia e ai rimedi naturali.",
    href: "/servizi/medicina-integrata",
    image: "/images/chi-siamo-medicina-integrata.jpg",
    color: "#16A085"
  }
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
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <Image
              src="/images/chi-siamo-studio.jpg"
              alt="Studio Pinoli Milano"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="hero-overlay" />

          <div className="container">
            <div className="hero-content">
              <p className="hero-eyebrow">Studio Dentistico a Milano</p>
              <h1>La tua salute,<br />la nostra passione</h1>
              <p className="hero-text">
                Da oltre 35 anni ci prendiamo cura del tuo sorriso e del tuo benessere
                con un approccio integrato e personalizzato.
              </p>
              <div className="hero-ctas">
                <Link href="/prima-visita" className="btn btn-primary btn-lg">
                  Prenota una visita gratuita
                </Link>
                <a href="tel:+390242272381" className="btn btn-white btn-lg">
                  02 4272381
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="container">
              <div className="hero-stats-grid">
                <StatItem number={35} suffix="+" label="Anni di esperienza" />
                <StatItem number={15000} suffix="+" label="Pazienti soddisfatti" />
                <StatItem number={4} suffix="" label="Aree specialistiche" />
                <StatItem number={98} suffix="%" label="Tasso soddisfazione" />
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section">
          <div className="container">
            <div className="intro-grid">
              <div className="intro-content">
                <h2>Benessere a 360°</h2>
                <p className="intro-lead">
                  Non siamo solo un dentista. Siamo un centro medico che integra
                  odontoiatria, nutrizione, estetica e medicina olistica per
                  prendersi cura di te in modo completo.
                </p>
                <p>
                  Il Dott. Luca Pinoli e il suo team ti accolgono in uno studio
                  moderno e accogliente, dove la tecnologia più avanzata si unisce
                  a un approccio umano e attento alle tue esigenze.
                </p>
                <Link href="/chi-siamo" className="link-arrow">
                  Scopri la nostra storia
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="intro-image">
                <Image
                  src="/images/chi-siamo-team-professionisti.jpg"
                  alt="Team Studio Pinoli"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header text-center">
              <h2>I nostri servizi</h2>
              <p>Quattro aree di specializzazione per il tuo benessere completo</p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="service-card-home">
                  <div className="service-card-image">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="service-card-overlay" />
                  </div>
                  <div className="service-card-body">
                    <div className="service-card-accent" style={{ background: service.color }} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-card-link">
                      Scopri di più
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Prima Visita */}
        <section className="section-cta-blue">
          <div className="container">
            <div className="cta-blue-grid">
              <div className="cta-blue-content">
                <h2>Prima visita gratuita</h2>
                <p>
                  Il primo passo verso il tuo benessere. Ti accogliamo per un colloquio
                  conoscitivo e una valutazione completa, senza impegno.
                </p>
                <ul className="cta-blue-list">
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Colloquio conoscitivo approfondito
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Visita con diagnostica avanzata
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Piano di cura personalizzato
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Preventivo trasparente e senza sorprese
                  </li>
                </ul>
                <div className="cta-blue-buttons">
                  <Link href="/contatti" className="btn btn-white btn-lg">
                    Prenota ora
                  </Link>
                  <Link href="/prima-visita" className="btn btn-outline-white btn-lg">
                    Come funziona
                  </Link>
                </div>
              </div>
              <div className="cta-blue-image">
                <Image
                  src="/images/home-prima-visita.jpg"
                  alt="Prima visita gratuita"
                  width={550}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        {recentPosts.length > 0 && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2>Dal nostro blog</h2>
                <Link href="/blog" className="link-arrow">
                  Tutti gli articoli
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              <div className="blog-grid-home">
                {recentPosts.map((post) => (
                  <article key={post.id} className="blog-card-home">
                    <Link href={`/blog/${post.slug}`}>
                      <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <span className="blog-card-link">
                        Leggi l'articolo →
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        <section className="section-contact">
          <div className="container">
            <div className="contact-grid-home">
              <div className="contact-info-home">
                <h2>Vieni a trovarci</h2>
                <p>
                  Lo studio si trova in una posizione centrale e facilmente raggiungibile.
                </p>
                <address>
                  <strong>Studio Pinoli</strong><br />
                  Via Losanna, 16<br />
                  20154 Milano (MI)
                </address>
                <p className="contact-phone-home">
                  <a href="tel:+390242272381">02 4272381</a>
                </p>
                <Link href="/contatti" className="btn btn-primary">
                  Contattaci
                </Link>
              </div>
              <div className="contact-map-home">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5!2d9.1686!3d45.4896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c14d8e6f6b67%3A0x5f8f8e8e8e8e8e8e!2sVia%20Losanna%2C%2016%2C%2020154%20Milano%20MI!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
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
  return {
    props: {
      posts: postsData || [],
    },
  };
}
