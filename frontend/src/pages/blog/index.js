import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import postsData from "../api/posts.json";
import categoriesData from "../api/categories.json";

const PAGE_SIZE = 24;

// Prefers yoast OG image, falls back to first <img> in content
function getPostImage(post) {
  const ogImages = post?.yoast_head_json?.og_image;
  if (ogImages && ogImages.length > 0 && ogImages[0].url) return ogImages[0].url;
  const content = post?.content?.rendered;
  if (!content) return null;
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

const FALLBACK_IMAGES = [
  "/foto/image-009-foto-nastia-cc1a3167.jpg",
  "/foto/image-043-foto-nastia-cc1a9578.jpg",
  "/foto/image-038-foto-nastia-cc1a9559.jpg",
  "/foto/image-007-foto-nastia-cc1a3019.jpg",
  "/foto/image-039-foto-nastia-cc1a9560.jpg",
  "/foto/image-012-foto-nastia-cc1a3200.jpg",
];

function getFallbackImage(index) {
  return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
}

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function Blog({ posts, categories }) {
  const [activeCat, setActiveCat] = useState(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = activeCat
    ? posts.filter((p) => p.categories?.includes(activeCat))
    : posts;

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  function selectCategory(id) {
    setActiveCat(id);
    setVisible(PAGE_SIZE);
  }

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
            style={{ backgroundImage: "url('/foto/image-023-foto-nastia-cc1a9489.jpg')" }}
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

        <section className="section">
          <div className="container">
            {/* Category Filter */}
            {categories.length > 0 && (
              <div className="blog-filter" role="group" aria-label="Filtra per categoria">
                <button
                  className={`blog-filter-btn${activeCat === null ? " active" : ""}`}
                  onClick={() => selectCategory(null)}
                >
                  Tutti
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`blog-filter-btn${activeCat === cat.id ? " active" : ""}`}
                    onClick={() => selectCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}

            {shown.length > 0 ? (
              <>
                {/* Featured Post — solo senza filtro categoria attivo */}
                {activeCat === null && shown[0] && (
                  <article className="blog-featured">
                    <div className="blog-featured-image">
                      <Image
                        src={getPostImage(shown[0]) || getFallbackImage(0)}
                        alt={stripHtml(shown[0].title.rendered)}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                      />
                      <div className="blog-featured-overlay" />
                    </div>
                    <div className="blog-featured-content">
                      <span className="blog-featured-badge">In Evidenza</span>
                      <p className="blog-card-date">
                        {new Date(shown[0].date).toLocaleDateString("it-IT", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h2>
                        <Link href={`/blog/${shown[0].slug}`}>
                          <span dangerouslySetInnerHTML={{ __html: shown[0].title.rendered }} />
                        </Link>
                      </h2>
                      {shown[0].excerpt?.rendered && (
                        <p className="blog-featured-excerpt">
                          {stripHtml(shown[0].excerpt.rendered).substring(0, 200)}...
                        </p>
                      )}
                      <Link href={`/blog/${shown[0].slug}`} className="btn btn-primary">
                        Leggi l&apos;articolo
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                )}

                {/* Post Grid */}
                <div className="blog-grid-large">
                  {(activeCat === null ? shown.slice(1) : shown).map((post, index) => (
                    <article key={post.id} className="blog-card-large">
                      <Link href={`/blog/${post.slug}`} className="blog-card-image-link">
                        <div className="blog-card-image-wrapper">
                          <Image
                            src={getPostImage(post) || getFallbackImage(index + 1)}
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
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
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
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                {hasMore && (
                  <div className="blog-load-more">
                    <button
                      className="btn btn-primary"
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    >
                      Carica altri articoli
                    </button>
                    <p className="blog-load-more-count">
                      Mostrati {shown.length} di {filtered.length} articoli
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="blog-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                <h3>Nessun articolo in questa categoria</h3>
                <p>Prova a selezionare un&apos;altra categoria.</p>
                <button className="btn btn-primary" onClick={() => selectCategory(null)}>
                  Vedi tutti gli articoli
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Filtra solo categorie con almeno 1 post
  const categories = (categoriesData || []).filter((c) => c.count > 0);
  return {
    props: {
      posts: postsData || [],
      categories,
    },
  };
}
