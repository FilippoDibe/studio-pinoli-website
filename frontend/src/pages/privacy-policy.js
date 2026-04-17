import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy e Cookie Policy | Studio Pinoli Milano</title>
        <meta
          name="description"
          content="Informativa sulla privacy e sui cookie di Studio Pinoli Milano. Trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679)."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <main id="main-content">

        {/* Hero */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-006-foto-nastia-cc1a3018.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Privacy Policy</span>
            </nav>
            <h1>Privacy Policy e Cookie Policy</h1>
            <p>Informativa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)</p>
          </div>
        </section>

        {/* Contenuto */}
        <article className="section section-light">
          <div className="container">
            <div className="privacy-content">

              <p className="privacy-updated">
                Titolare del trattamento: <strong>FDB Studio Associato S.r.l.</strong> — P.IVA 13562380967<br />
                Sede: Via Domenico Cimarosa, 4 — 20144 Milano (MI)<br />
                Email: <a href="mailto:info@studiopinoli.it">info@studiopinoli.it</a><br />
                Ultimo aggiornamento: aprile 2026
              </p>

              <h2>1. Informativa ai sensi dell'art. 13 GDPR</h2>
              <p>
                FDB Studio Associato S.r.l., titolare del sito <strong>www.studiopinoli.it</strong>, pone la massima attenzione
                alla riservatezza, alla tutela e alla sicurezza dei dati personali relativi ai soggetti con cui entra in contatto.
              </p>
              <p>
                La presente informativa descrive le modalità di gestione del sito in riferimento al trattamento dei dati personali
                degli utenti che lo consultano, ed è resa ai sensi dell'art. 13 del Regolamento Generale sulla Protezione dei Dati
                (GDPR — Reg. UE 2016/679) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
              </p>
              <p>
                L'informativa è valida esclusivamente per il presente sito web e non per altri siti eventualmente raggiungibili
                tramite link in esso presenti.
              </p>

              <h2>2. Tipologie di dati trattati</h2>

              <h3>2.1 Dati di navigazione</h3>
              <p>
                I sistemi informatici acquisiscono, nel corso del normale esercizio, alcuni dati la cui trasmissione è implicita
                nell'uso dei protocolli Internet. Rientrano in questa categoria gli indirizzi IP, i nomi a dominio dei computer
                degli utenti, gli indirizzi URI delle risorse richieste, l'orario della richiesta, il metodo utilizzato, la
                dimensione del file ottenuto in risposta e altri parametri relativi al sistema operativo dell'utente.
              </p>
              <p>
                Questi dati sono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per
                controllarne il corretto funzionamento. Non sono comunicati a terzi.
              </p>

              <h3>2.2 Dati forniti volontariamente dall'utente</h3>
              <p>
                L'utente può fornire i propri dati personali (nome, email, numero di telefono) compilando il modulo di contatto
                presente sul sito o inviando email agli indirizzi indicati. Il mancato conferimento dei dati obbligatori comporta
                l'impossibilità di evadere la richiesta.
              </p>

              <h2>3. Cookie</h2>
              <p>
                Un "cookie" è un piccolo file di testo depositato sul dispositivo dell'utente da un sito web. Questo sito utilizza
                le seguenti tipologie di cookie:
              </p>

              <h3>3.1 Cookie tecnici (sempre attivi)</h3>
              <p>
                Cookie necessari al funzionamento del sito. Non richiedono il consenso dell'utente e non raccolgono informazioni
                utilizzabili per scopi di marketing.
              </p>

              <h3>3.2 Cookie analitici — Google Analytics 4 (solo previo consenso)</h3>
              <p>
                Questo sito utilizza <strong>Google Analytics 4</strong>, un servizio di analisi web fornito da Google LLC
                ("Google"), <strong>esclusivamente previo consenso esplicito dell'utente</strong>. Google Analytics utilizza cookie
                per analizzare come gli utenti utilizzano il sito. Le informazioni raccolte (incluso l'indirizzo IP anonimizzato)
                vengono trasmesse a Google e depositate su server negli Stati Uniti nel rispetto delle clausole contrattuali
                standard approvate dalla Commissione Europea.
              </p>
              <p>
                L'utente può revocare il consenso in qualsiasi momento tramite il banner cookie presente sul sito, oppure
                rifiutarsi di usare i cookie selezionando l'impostazione appropriata sul proprio browser. Per maggiori
                informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>.
              </p>
              <p>
                Il codice di tracciamento Google Analytics <strong>non viene caricato</strong> prima che l'utente abbia espresso
                il proprio consenso.
              </p>

              <h3>3.3 Gestione dei cookie</h3>
              <p>
                L'utente può gestire le proprie preferenze cookie in qualsiasi momento:
              </p>
              <ul>
                <li>Tramite il banner cookie presente sul sito al primo accesso</li>
                <li>Tramite le impostazioni del proprio browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Tramite strumenti come <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a></li>
              </ul>
              <p>
                La disabilitazione dei soli cookie analitici non compromette la funzionalità del sito.
              </p>

              <h2>4. Finalità e base giuridica del trattamento</h2>
              <ul>
                <li><strong>Gestione delle richieste di contatto</strong> — base giuridica: esecuzione di misure precontrattuali su richiesta dell'interessato (art. 6.1.b GDPR)</li>
                <li><strong>Analisi statistica del traffico</strong> (Google Analytics 4) — base giuridica: consenso dell'interessato (art. 6.1.a GDPR)</li>
                <li><strong>Sicurezza e prevenzione abusi</strong> — base giuridica: legittimo interesse (art. 6.1.f GDPR)</li>
              </ul>

              <h2>5. Modalità del trattamento</h2>
              <p>
                I dati personali sono trattati con strumenti informatici adottando specifiche misure di sicurezza per prevenire
                la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
              </p>

              <h2>6. Periodo di conservazione</h2>
              <ul>
                <li>Dati del modulo di contatto: conservati per il tempo necessario a evadere la richiesta e comunque non oltre 24 mesi</li>
                <li>Dati di navigazione (log): conservati per il tempo strettamente necessario alle finalità di sicurezza</li>
                <li>Cookie analitici: secondo le policy di Google Analytics (di default 26 mesi, ridotti a 14 mesi per la configurazione attuale)</li>
              </ul>

              <h2>7. Comunicazione a terzi</h2>
              <p>
                I dati non sono ceduti a terzi per finalità commerciali. Possono essere comunicati esclusivamente a soggetti
                che forniscono servizi tecnici strumentali all'operatività del sito (hosting, servizi email), vincolati da
                appositi accordi in qualità di Responsabili del Trattamento ai sensi dell'art. 28 GDPR.
              </p>

              <h2>8. Diritti degli interessati</h2>
              <p>
                Ai sensi degli artt. 15–22 GDPR, l'interessato ha il diritto di:
              </p>
              <ul>
                <li>Accedere ai propri dati personali</li>
                <li>Chiedere la rettifica o la cancellazione</li>
                <li>Opporsi al trattamento o chiederne la limitazione</li>
                <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente</li>
                <li>Proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>)</li>
              </ul>
              <p>
                Per esercitare i propri diritti: <a href="mailto:info@studiopinoli.it">info@studiopinoli.it</a>
              </p>

              <h2>9. Titolare del trattamento</h2>
              <p>
                <strong>FDB Studio Associato S.r.l.</strong><br />
                P.IVA 13562380967<br />
                Via Domenico Cimarosa, 4 — 20144 Milano (MI)<br />
                Email: <a href="mailto:info@studiopinoli.it">info@studiopinoli.it</a>
              </p>

            </div>
          </div>
        </article>

      </main>
    </>
  );
}
