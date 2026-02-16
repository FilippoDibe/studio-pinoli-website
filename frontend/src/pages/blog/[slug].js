import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import postsData from "../api/posts.json";

// Helper function to extract first image from content
function extractFirstImage(content) {
  if (!content) return null;
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

// Helper function to get a fallback image
function getFallbackImage() {
  return "/media/studio-pinoli-social-3/images/image-005-foto-nastia-cc1a3017.jpg";
}

// Helper to strip HTML tags
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

// Calculate reading time
function calculateReadingTime(content) {
  if (!content) return 5;
  const text = stripHtml(content);
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <>
        <Head><title>Post non trovato | Studio Pinoli</title></Head>
        <main id="main-content">
          <section className="service-hero dental">
            <div
              className="service-hero-bg"
              style={{ backgroundImage: "url('/media/studio-pinoli-social-3/images/image-006-foto-nastia-cc1a3018.jpg')" }}
            />
            <div className="service-hero-overlay" />
            <div className="container">
              <h1>Post non trovato</h1>
              <p>Il contenuto che stai cercando non esiste o è stato rimosso.</p>
            </div>
          </section>
          <div className="section">
            <div className="container" style={{ textAlign: "center" }}>
              <Link href="/blog" className="btn btn-primary">
                Torna al Blog
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  const heroImage = extractFirstImage(post.content?.rendered) || getFallbackImage();
  const readingTime = calculateReadingTime(post.content?.rendered);
  const publishDate = new Date(post.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Head>
        <title>{stripHtml(post.title.rendered)} | Blog Studio Pinoli</title>
        <meta
          name="description"
          content={stripHtml(post.excerpt?.rendered)?.substring(0, 160) || `${stripHtml(post.title.rendered)} - Blog Studio Dentistico Pinoli Milano`}
        />
        <meta property="og:title" content={stripHtml(post.title.rendered)} />
        <meta property="og:description" content={stripHtml(post.excerpt?.rendered)?.substring(0, 160)} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="article" />
      </Head>

      <main id="main-content">
        {/* Article Hero */}
        <section className="article-hero">
          <div className="article-hero-bg">
            <Image
              src={heroImage}
              alt={stripHtml(post.title.rendered)}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="article-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{stripHtml(post.title.rendered).substring(0, 30)}...</span>
            </nav>
            <div className="article-hero-meta">
              <span className="article-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                </svg>
                {publishDate}
              </span>
              <span className="article-reading-time">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                {readingTime} min di lettura
              </span>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </div>
        </section>

        {/* Article Content */}
        <article className="article-wrapper">
          <div className="container">
            <div className="article-content">
              <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

              {/* Share Buttons */}
              <div className="article-share">
                <span className="article-share-label">Condividi:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-share-btn facebook"
                  aria-label="Condividi su Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(stripHtml(post.title.rendered))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-share-btn twitter"
                  aria-label="Condividi su Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(stripHtml(post.title.rendered))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-share-btn linkedin"
                  aria-label="Condividi su LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(stripHtml(post.title.rendered) + ' ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-share-btn whatsapp"
                  aria-label="Condividi su WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>

              {/* Back to Blog */}
              <div className="article-navigation">
                <Link href="/blog" className="btn btn-outline">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                  </svg>
                  Torna al Blog
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Hai Domande?</h2>
            <p>
              Il nostro team è a tua disposizione per rispondere a qualsiasi domanda.
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

export async function getStaticPaths() {
  const paths = postsData.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = postsData.find(p => p.slug === params.slug) || null;
  return { props: { post } };
}
