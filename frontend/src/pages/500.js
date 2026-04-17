import Head from "next/head";
import Link from "next/link";

export default function ServerError() {
  return (
    <>
      <Head>
        <title>Errore del server | Studio Pinoli Milano</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main id="main-content">
        <section className="error-page-section">
          <div className="container">
            <div className="error-page-inner">
              <div className="error-page-code">500</div>
              <h1 className="error-page-title">Errore del server</h1>
              <p className="error-page-text">
                Si è verificato un errore imprevisto. Ci scusiamo per il disagio.<br />
                Riprova tra qualche minuto o contattaci direttamente.
              </p>
              <div className="error-page-actions">
                <Link href="/" className="btn btn-primary">
                  Torna alla Home
                </Link>
                <a href="tel:+393316713904" className="btn btn-outline">
                  Chiamaci: +39 331 671 3904
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
