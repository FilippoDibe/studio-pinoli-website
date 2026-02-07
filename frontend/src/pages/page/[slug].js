import axios from "axios";
import Head from "next/head";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Page({ page }) {
  if (!page) {
    return (
      <>
        <Head><title>Pagina non trovata | Studio Pinoli</title></Head>
        <div className="page-hero">
          <div className="container">
            <h1>Pagina non trovata</h1>
            <p>Il contenuto che stai cercando non esiste o e stato rimosso.</p>
          </div>
        </div>
        <div className="page-content">
          <div className="container" style={{ textAlign: "center" }}>
            <Link href="/" className="btn btn-blue">
              Torna alla Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{page.title.rendered} | Studio Pinoli</title>
        <meta
          name="description"
          content={page.excerpt?.rendered?.replace(/<[^>]*>/g, "").substring(0, 160) || `${page.title.rendered} - Studio Dentistico Pinoli Milano`}
        />
      </Head>

      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>{page.title.rendered}</span>
          </div>
          <h1>{page.title.rendered}</h1>
          {page.excerpt?.rendered && (
            <p dangerouslySetInnerHTML={{ __html: page.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 200) }} />
          )}
          <div className="page-hero-ctas">
            <Link href="/contatti" className="btn btn-primary">
              Prenota un appuntamento
            </Link>
            <Link href="/prima-visita" className="btn btn-secondary">
              Richiedi una consulenza online
            </Link>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="wp-content">
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Fai il Primo Passo Verso il Tuo Benessere</h2>
          <div className="cta-buttons">
            <Link href="/contatti" className="btn btn-primary">
              Prenota ora la tua visita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(`${API}/pages`);
  const paths = res.data.map((p) => ({
    params: { slug: p.slug },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(`${API}/pages/${params.slug}`);
    return { props: { page: res.data }, revalidate: 60 };
  } catch {
    return { props: { page: null } };
  }
}
