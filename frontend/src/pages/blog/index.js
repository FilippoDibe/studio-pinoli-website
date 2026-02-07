import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const API = process.env.NEXT_PUBLIC_API_URL;

// Helper function to extract first image from content
function extractFirstImage(content) {
  if (!content) return null;
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

// Helper function to get a fallback image based on index
function getFallbackImage(index) {
  const images = [
    "/images/14_Services_Dental_Care-Hero.jpg",
    "/images/home-bionutrizione.jpg",
    "/images/home-trattamenti-estetici.jpg",
    "/images/chi-siamo-medicina-integrata.jpg",
    "/images/home-prima-visita.jpg",
    "/images/chi-siamo-team-professionisti.jpg"
  ];
  return images[index % images.length];
}

// Helper to strip HTML tags
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Studio Dentistico Pinoli Milano</title>
        <meta
          name="description"
          content="Leggi gli ultimi articoli del nostro blog sulla salute dentale, consigli per l'igiene orale e novità dallo Studio Dentistico Pinoli."
        />
      </Head>

      <main id="main-content">
        {/* Hero */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/images/14_Services_Dental_Care-Hero.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Blog</span>
            </nav>
            <h1>Il Nostro Blog</h1>
            <p>
              Articoli, consigli e novità sulla salute dentale, nutrizione,
              medicina estetica e benessere integrato.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section">
          <div className="container">
            {posts.length > 0 ? (
              <>
                {/* Featured Post */}
                {posts[0] && (
                  <article className="blog-featured">
                    <div className="blog-featured-image">
                      <Image
                        src={extractFirstImage(posts[0].content?.rendered) || getFallbackImage(0)}
                        alt={stripHtml(posts[0].title.rendered)}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                      />
                      <div className="blog-featured-overlay" />
                    </div>
                    <div className="blog-featured-content">
                      <span className="blog-featured-badge">In Evidenza</span>
                      <p className="blog-card-date">
                        {new Date(posts[0].date).toLocaleDateString("it-IT", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h2>
                        <Link href={`/blog/${posts[0].slug}`}>
                          <span dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }} />
                        </Link>
                      </h2>
                      {posts[0].excerpt?.rendered && (
                        <p className="blog-featured-excerpt">
                          {stripHtml(posts[0].excerpt.rendered).substring(0, 200)}...
                        </p>
                      )}
                      <Link href={`/blog/${posts[0].slug}`} className="btn btn-primary">
                        Leggi l'articolo
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                )}

                {/* Rest of Posts */}
                <div className="blog-grid-large">
                  {posts.slice(1).map((post, index) => (
                    <article key={post.id} className="blog-card-large">
                      <Link href={`/blog/${post.slug}`} className="blog-card-image-link">
                        <div className="blog-card-image-wrapper">
                          <Image
                            src={extractFirstImage(post.content?.rendered) || getFallbackImage(index + 1)}
                            alt={stripHtml(post.title.rendered)}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                          <div className="blog-card-image-overlay" />
                        </div>
                      </Link>
                      <div className="blog-card-body">
                        <p className="blog-card-date">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                          </svg>
                          {new Date(post.date).toLocaleDateString("it-IT", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <h3>
                          <Link href={`/blog/${post.slug}`}>
                            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                          </Link>
                        </h3>
                        {post.excerpt?.rendered && (
                          <p className="blog-card-excerpt">
                            {stripHtml(post.excerpt.rendered).substring(0, 120)}...
                          </p>
                        )}
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
              </>
            ) : (
              <div className="blog-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <h3>Nessun articolo disponibile</h3>
                <p>
                  Torna presto per nuovi contenuti sul benessere e la salute!
                </p>
                <Link href="/" className="btn btn-primary">
                  Torna alla Home
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section section-light">
          <div className="container">
            <div className="newsletter-cta">
              <div className="newsletter-content">
                <h2>Resta Aggiornato</h2>
                <p>
                  Iscriviti per ricevere i nostri ultimi articoli su salute dentale,
                  nutrizione e benessere direttamente nella tua inbox.
                </p>
              </div>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="La tua email"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Iscriviti
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Prenota la Tua Prima Visita</h2>
            <p>
              Hai domande sulla tua salute? Vieni a trovarci per una consulenza personalizzata.
            </p>
            <div className="cta-buttons">
              <Link href="/contatti" className="btn btn-primary">
                Prenota un appuntamento
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
  try {
    const res = await axios.get(`${API}/posts`);
    return {
      props: { posts: res.data },
      revalidate: 60,
    };
  } catch {
    return { props: { posts: [] } };
  }
}
