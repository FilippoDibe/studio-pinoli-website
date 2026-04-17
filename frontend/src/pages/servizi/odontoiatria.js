import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/odontoiatria.module.css";
import { BOOKING_URL } from "@/lib/constants";

/* ── Mosaic groups ─────────────────────────────────────────── */
const UNSPLASH = "https://images.unsplash.com";

const mosaicGroups = [
  {
    key: "conservativa",
    title: "Conservativa & Endodonzia",
    services: ["Conservativa", "Endodonzia"],
    tagline: "Cura e salvataggio del dente naturale",
    description:
      "Dalla terapia canalare alle ricostruzioni, preserviamo ogni dente con precisione chirurgica e materiali biocompatibili di ultima generazione.",
    image: `/servizi/odontoriatria/conservativa.jpeg`,
    focalPoint: "center",
    icon: "/odontoiatria/conservativa.svg",
    accent: "#0a5a8c",
  },
  {
    key: "ortodonzia",
    title: "Ortodonzia & Pedodonzia",
    services: ["Ortodonzia", "Pedodonzia"],
    tagline: "Sorrisi allineati, grandi e piccini",
    description:
      "Allineatori invisibili e apparecchi fissi per adulti e adolescenti. Cure odontoiatriche dedicate ai bambini in un ambiente accogliente e sereno.",
    image: `${UNSPLASH}/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80`,
    focalPoint: "center top",
    icon: "/odontoiatria/ortodonzia.svg",
    accent: "#1a6cb0",
  },
  {
    key: "implantologia",
    title: "Implantologia & Chirurgia",
    services: ["Implantologia", "Chirurgia Orale"],
    tagline: "Soluzioni fisse e durature nel tempo",
    description:
      "Impianti in titanio con protocolli chirurgici avanzati. Oltre il 95% di successo a 10 anni per restituire funzionalità e naturalezza al sorriso.",
    image: `${UNSPLASH}/photo-1468493858157-0da44aaf1d13?auto=format&fit=crop&w=1200&q=80`,
    focalPoint: "center",
    icon: "/odontoiatria/implantologia.svg",
    accent: "#063d6e",
  },
  {
    key: "protesi",
    title: "Protesi & Estetica Dentale",
    services: ["Protesi", "Estetica Dentale"],
    tagline: "Il sorriso che hai sempre desiderato",
    description:
      "Faccette in ceramica, protesi fisse e mobili, sbiancamento professionale. Risultati estetici armonici che rispettano la fisionomia naturale.",
    image: `${UNSPLASH}/photo-1655807946138-811bb2340d34?auto=format&fit=crop&w=1200&q=80`,
    focalPoint: "center",
    icon: "/odontoiatria/protesi-estetica.svg",
    accent: "#0d5492",
  },
  {
    key: "parodontologia",
    title: "Parodontologia & Igiene",
    services: ["Parodontologia", "Igiene Professionale"],
    tagline: "Gengive sane, denti per sempre",
    description:
      "Prevenzione e terapia delle malattie parodontali, igiene professionale personalizzata e sbiancamento domiciliare con supervisione clinica.",
    image: `${UNSPLASH}/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80`,
    focalPoint: "center",
    icon: "/odontoiatria/igiene.svg",
    accent: "#0a6e8a",
  },
];

/* Maps each card to its CSS grid position class */
const cardClasses = [
  styles.cardA,
  styles.cardB,
  styles.cardC,
  styles.cardD,
  styles.cardE,
];

/* ── Process steps ──────────────────────────────────────────── */
const processSteps = [
  {
    number: "1",
    title: "Compilazione documenti e anamnesi",
    description:
      "All'arrivo in studio ti chiederemo di compilare i documenti per la privacy e l'anamnesi medica. Queste informazioni ci aiutano a comprendere il tuo stato di salute generale e a inquadrare correttamente la situazione clinica.",
  },
  {
    number: "2",
    title: "Visita e valutazione clinica",
    description:
      "Effettueremo la visita odontoiatrica con eventuali radiografie e fotografie diagnostiche. Questo ci permette di analizzare con precisione la tua situazione e individuare le cause dei problemi presenti.",
  },
  {
    number: "3",
    title: "Presentazione del piano di cura",
    description:
      "Al termine della visita ti illustreremo le possibili soluzioni terapeutiche più adatte al tuo caso. In presenza di situazioni complesse, il piano di cura verrà elaborato con maggiore approfondimento e condiviso successivamente.",
  },
  {
    number: "4",
    title: "Piano di cura e follow-up",
    description:
      "Una volta definito il piano di cura, la segreteria ti fornirà tutte le informazioni su preventivo e modalità di pagamento. Il nostro team ti accompagnerà durante tutto il percorso di trattamento e nei controlli successivi.",
  },
];

/* ── FAQ ────────────────────────────────────────────────────── */
const faqs = [
  {
    question: "Ogni quanto tempo è consigliato andare dal dentista?",
    answer:
      "Nella maggior parte dei casi è consigliata una visita di controllo ogni 4-6 mesi. I controlli regolari permettono di prevenire carie, problemi gengivali e altre patologie della bocca.",
  },
  {
    question: "Cosa fare in caso di forte mal di denti improvviso?",
    answer:
      "Un mal di denti intenso può essere causato da carie profonde, infezioni della polpa dentale o infiammazioni del nervo. In questi casi è importante effettuare una visita odontoiatrica il prima possibile per individuare la causa del dolore. Attraverso una valutazione clinica ed eventuali esami diagnostici, il dentista può stabilire il trattamento più indicato, come una terapia conservativa o un trattamento endodontico (devitalizzazione), per eliminare l’infezione e salvare il dente.",
  },
  {
    question: "Quando è necessaria una devitalizzazione del dente?",
    answer:
      "La devitalizzazione (trattamento endodontico) diventa necessaria quando la polpa dentale, cioè il nervo del dente, è infiammata o infetta a causa di una carie profonda o di un trauma. Il trattamento permette di rimuovere l’infezione, eliminare il dolore e preservare il dente naturale evitando l’estrazione.",
  },
  {
    question: "Quanto dura un impianto dentale?",
    answer:
      "Se correttamente mantenuto con controlli periodici e igiene orale adeguata, un impianto dentale può durare molti anni e rappresentare una soluzione stabile per sostituire i denti mancanti.",
  },
  {
    question: "Gli allineatori dentali trasparenti funzionano davvero?",
    answer:
      "Gli allineatori trasparenti sono una soluzione ortodontica moderna che permette di allineare i denti in modo discreto e confortevole. Si tratta di mascherine quasi invisibili, realizzate su misura, che vengono sostituite progressivamente per guidare lo spostamento dei denti. Rispetto agli apparecchi tradizionali sono più estetici, rimovibili durante i pasti e facilitano l’igiene orale quotidiana.",
  },
];

/* ── Related services ───────────────────────────────────────── */
const relatedServices = [
  {
    title: "Bionutrizione",
    description: "Piani alimentari personalizzati per il tuo benessere.",
    href: "/servizi/bionutrizione",
    image: "/servizi/Biochimica-nutrizione_Immagine_blog-.jpg",
  },
  {
    title: "Medicina Estetica",
    description: "Trattamenti estetici non invasivi e naturali.",
    href: "/servizi/medicina-estetica",
    image: "/servizi/medicinaestetica.jpg",
  },
  {
    title: "Osteopatia",
    description: "Trattamenti manuali per disturbi dell'ATM e benessere articolare.",
    href: "/servizi/osteopatia",
    image: "/servizi/osteopatia.jpg",
  },
  {
    title: "Art-Terapia",
    description: "Percorsi creativi per il benessere emotivo e psicologico.",
    href: "/servizi/art-terapia",
    image: "/servizi/art-terapia-hd.jpg",
  },
];

/* ── Components ─────────────────────────────────────────────── */
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item-styled ${isOpen ? "open" : ""}`}>
      <button className="faq-question-styled" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <svg className="faq-icon-styled" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </button>
      <div className="faq-answer-styled">
        <p>{answer}</p>
      </div>
    </div>
  );
}

function MosaicCard({ group, className }) {
  return (
    <article
      className={`${styles.mosaicCard} ${className}`}
      style={{ "--card-accent": group.accent }}
    >
      {/* Background photo */}
      <Image
        src={group.image}
        alt={group.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        className={styles.mosaicBg}
        style={{ objectPosition: group.focalPoint || "center" }}
      />

      {/* Dark gradient overlay */}
      <div className={styles.mosaicOverlay} />

      {/* Decorative icon — large, semi-transparent */}
      <div className={styles.mosaicIcon} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={group.icon} alt="" width={88} height={88} />
      </div>

      {/* Text content */}
      <div className={styles.mosaicContent}>
        <div className={styles.mosaicBadges}>
          {group.services.map((s) => (
            <span key={s} className={styles.mosaicBadge}>
              {s}
            </span>
          ))}
        </div>
        <h3 className={styles.mosaicTitle}>{group.title}</h3>
        <p className={styles.mosaicTagline}>{group.tagline}</p>
        <p className={styles.mosaicDesc}>{group.description}</p>
      </div>
    </article>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function Odontoiatria() {
  return (
    <>
      <Head>
        <title>Dentista a Milano — Odontoiatria | Studio Pinoli</title>
        <meta name="description" content="Dentista a Milano con oltre 35 anni di esperienza. Implantologia, ortodonzia, igiene orale, sbiancamento e protesi dentale. Studio Pinoli, zona Navigli." />
        <meta property="og:title" content="Dentista a Milano — Odontoiatria | Studio Pinoli" />
        <meta property="og:description" content="Implantologia, ortodonzia, igiene orale, sbiancamento e protesi dentale a Milano. Studio Pinoli, Via Cimarosa 4." />
        <meta property="og:image" content="https://www.studiopinoli.it/servizi/odontoriatria.jpg" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Studio Pinoli — Odontoiatria",
              "url": "https://www.studiopinoli.it/servizi/odontoiatria",
              "description": "Odontoiatria conservativa, implantologia, ortodonzia e igiene professionale a Milano.",
              "medicalSpecialty": "Dentistry",
              "parentOrganization": {
                "@type": "Dentist",
                "name": "Studio Pinoli",
                "url": "https://www.studiopinoli.it"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servizi Odontoiatrici",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Implantologia dentale" } },
                  { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Ortodonzia invisibile" } },
                  { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Igiene orale professionale" } },
                  { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Protesi dentale" } },
                  { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Sbiancamento dentale" } }
                ]
              }
            })
          }}
        />
      </Head>

      <main id="main-content">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="service-hero dental">
          <div
            className="service-hero-bg"
            style={{ backgroundImage: "url('/foto/image-051-foto-nastia-cc1a9625.jpg')" }}
          />
          <div className="service-hero-overlay" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/i-nostri-servizi">Servizi</Link>
              <span>/</span>
              <span>Odontoiatria</span>
            </nav>
            <div className={styles.heroBadge}>✓ Prima Visita Gratuita</div>
            <h1>Dentista a Milano</h1>
            <p>
              Da oltre 35 anni il nostro studio dentistico a Milano offre cure odontoiatriche
              di eccellenza: implantologia, ortodonzia, igiene orale e molto altro. Un team
              di specialisti dedicato alla salute e alla bellezza del tuo sorriso.
            </p>
            <div className="page-hero-ctas">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Prenota una visita
              </Link>
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama ora
              </a>
            </div>
          </div>
        </section>

        {/* ── Overview ───────────────────────────────────────── */}
        {/* <section className="section">
          <div className="container">
            <div className="two-col-section">
              <div className="two-col-content">
                <h2>Il Tuo Dentista a Milano</h2>
                <p>
                  Studio Pinoli è un centro odontoiatrico a Milano che unisce esperienza
                  clinica, tecnologie avanzate e attenzione alla persona. Il nostro obiettivo
                  è offrire cure precise, affidabili e costruite sulle reali esigenze di ogni
                  paziente.
                </p>
                <p>
                  Crediamo in un'odontoiatria attenta, che mette al centro la salute orale,
                  il comfort e la qualità del percorso di cura.
                </p>
                <span>
                  <b>Il nostro approccio si basa su:</b>
                </span>
                <ul>
                  <li>Tecnologie diagnostiche avanzate</li>
                  <li>Un team di professionisti qualificati</li>
                  <li>Trattamenti accurati e personalizzati</li>
                  <li>Ambiente sereno e accogliente</li>
                </ul>
              </div>
              <div className="two-col-image">
                <Image
                  src="/foto/image-013-foto-nastia-cc1a9446.jpg"
                  alt="Sala trattamenti odontoiatria Studio Pinoli Milano zona Certosa"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section> */}

     

        {/* ── Services Mosaic ────────────────────────────────── */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Le nostre specializzazioni</span>
              <h2 className="section-title">Servizi di Odontoiatria</h2>
              <p className="section-description">
                Cinque aree di competenza per una cura completa e integrata della salute
                orale, dalla prevenzione all'estetica.
              </p>
            </div>
          </div>

          <div className={styles.mosaicWrapper}>
            <div className={styles.mosaic}>
              {mosaicGroups.map((group, i) => (
                <MosaicCard key={group.key} group={group} className={cardClasses[i]} />
              ))}
            </div>
          </div>
        </section>
   {/* ── Team Specialists ───────────────────────────────── */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">I nostri specialisti</span>
              <h2 className="section-title">Chi Ti Seguirà</h2>
              <p className="section-description">
                Un team dedicato di professioniste qualificate per la salute orale e il sorriso di ogni paziente.
              </p>
            </div>
            <div className="specialist-duo-grid">
              <div className="specialist-duo-card">
                <div className="specialist-duo-photo">
                  <Image
                    src="/team/DR-PINOLI-MILANO.jpeg"
                    alt="Dr. Luca Maria Pinoli — Direttore Sanitario Studio Pinoli Milano"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="specialist-duo-info" style={{ "--specialist-accent": "var(--color-dental)" }}>
                  <span className="specialist-role-tag" style={{ color: "var(--color-dental)", borderColor: "var(--color-dental)" }}>Direttore Sanitario</span>
                  <h3>Dr. Luca Maria Pinoli</h3>
                  <span className="specialist-sub-role">Medico Chirurgo · Odontoiatra</span>
                  <p>Specializzato in odontostomatologia e bio-nutrizione, con oltre 35 anni di esperienza nel campo dell'estetica dentale e della medicina integrata. Unisce la cura orale al benessere globale della persona, combinando tecniche avanzate a terapie naturali e nutrizionali.</p>
                </div>
              </div>
              <div className="specialist-duo-card">
                <div className="specialist-duo-photo">
                  <Image
                    src="/team/DIANA.jpeg"
                    alt="Dr.ssa Diana Mihaela Bulache — Igienista Dentale Studio Pinoli"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="specialist-duo-info" style={{ "--specialist-accent": "var(--color-dental)" }}>
                  <span className="specialist-role-tag" style={{ color: "var(--color-dental)", borderColor: "var(--color-dental)" }}>Igiene Dentale</span>
                  <h3>Dr.ssa Diana Mihaela Bulache</h3>
                  <span className="specialist-sub-role">Igienista Dentale</span>
                  <p>Igienista dentale specializzata nella prevenzione e nel mantenimento della salute orale. Promuove la salute orale come parte integrante del benessere complessivo dei nostri pazienti, attraverso trattamenti personalizzati e consigli pratici per una corretta igiene orale quotidiana.</p>
                </div>
              </div>
              <div className="specialist-duo-card">
                <div className="specialist-duo-photo">
                  <Image
                    src="/team/MARTA-MILANO.jpeg"
                    alt="Dr.ssa Marta Plutino — Ortodontista Studio Pinoli"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="specialist-duo-info" style={{ "--specialist-accent": "var(--color-dental)" }}>
                  <span className="specialist-role-tag" style={{ color: "var(--color-dental)", borderColor: "var(--color-dental)" }}>Ortodonzia</span>
                  <h3>Dr.ssa Marta Plutino</h3>
                  <span className="specialist-sub-role">Ortodontista</span>
                  <p>Specialista in ortodonzia per adulti e bambini, con competenza in trattamenti fissi, mobili e allineatori invisibili. Guida ogni paziente verso un sorriso armonico con tecniche contemporanee, rispettando funzionalità occlusale ed estetica naturale.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ── Process ────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Il tuo percorso</span>
              <h2 className="section-title">Come Funziona</h2>
            </div>

            <div className={styles.journeyTrack}>
              <div className={styles.journeyLine} aria-hidden="true" />
              {processSteps.map((step, i) => (
                <div key={i} className={styles.journeyStep}>
                  <div className={styles.journeyBubble} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={styles.journeyCard}>
                    <p className={styles.journeyCardNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h4 className={styles.journeyCardTitle}>{step.title}</h4>
                    <p className={styles.journeyCardDesc}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="cta-section">
          <div className="container">
            <h2>Prenota la tua visita odontoiatrica a Milano</h2>
            <p>
              Il nostro team ti seguirà per una prima visita accurata, con valutazione
              completa della salute orale e definizione del percorso di cura più adatto
              alle tue esigenze.
            </p>
            <div className="cta-buttons">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Prenota ora
              </Link>
              <a href="tel:+393316713904" className="btn btn-secondary">
                Chiama ora
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Hai domande?</span>
              <h2 className="section-title">Domande Frequenti</h2>
            </div>

            <div className="faq-section-styled">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ───────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Scopri anche</span>
              <h2 className="section-title">Scopri Altre Soluzioni Terapeutiche</h2>
              <p className="section-description">Scopri le altre soluzioni terapeutiche pensate per la salute globale della persona.</p>
            </div>

            <div className="services-grid">
              {relatedServices.map((service) => (
                <article key={service.href} className="service-card">
                  <div className="service-card-photo">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>
                  <div className="service-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href={service.href} className="btn btn-outline">
                      Scopri di più
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
