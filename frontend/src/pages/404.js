import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Pagina non trovata | Studio Pinoli Milano</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main id="main-content">
        <section className="error-page-section">
          <div className="container">
            <div className="error-page-inner">
              <div className="error-page-code">404</div>
              <h1 className="error-page-title">Pagina non trovata</h1>
              <p className="error-page-text">
                La pagina che stai cercando non esiste o è stata spostata.<br />
                Torna alla home o scopri i nostri servizi.
              </p>
              <div className="error-page-actions">
                <Link href="/" className="btn btn-primary">
                  Torna alla Home
                </Link>
                <Link href="/i-nostri-servizi" className="btn btn-outline">
                  I Nostri Servizi
                </Link>
              </div>
              <nav className="error-page-links" aria-label="Link utili">
                <Link href="/servizi/odontoiatria">Odontoiatria</Link>
                <Link href="/servizi/bionutrizione">Bio-nutrizione</Link>
                <Link href="/servizi/medicina-estetica">Medicina Estetica</Link>
                <Link href="/contatti">Contatti</Link>
                <Link href="/blog">Blog</Link>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
