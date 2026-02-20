# SEO — Lista lavori da fare
Studio Pinoli | Ultima analisi: febbraio 2026

---

## Stato attuale

La struttura tecnica del sito è buona. Titoli, meta description e gerarchia dei titoli (H1/H2/H3) sono presenti su tutte le pagine. I problemi principali riguardano tre aree: elementi tecnici mancanti, contenuti da riscrivere/aggiungere e immagini da ottimizzare.

---

## 1. Elementi tecnici mancanti

Questi file non esistono ancora e bloccano una corretta indicizzazione.

### `sitemap.xml`
- [ ] Creare `frontend/public/sitemap.xml`
- [ ] Includere tutte le URL: home, servizi, chi siamo, prima visita, contatti, blog post
- [ ] Aggiornare la data di modifica (`<lastmod>`) quando si aggiorna una pagina
- [ ] Aggiungere priorità: home = 1.0, servizi = 0.9, blog post = 0.7

### `robots.txt`
- [ ] Creare `frontend/public/robots.txt`
- [ ] Contenuto minimo:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://www.studiopinoli.it/sitemap.xml
  ```

### Structured Data (JSON-LD) — priorità alta
Questi dati permettono a Google di mostrare risultati arricchiti (orari, indirizzo, FAQ, stelle).

- [ ] **Homepage** — aggiungere schema `LocalBusiness` + `DentalClinic` con:
  - Nome, indirizzo, telefono, email
  - Orari di apertura
  - URL, logo
- [ ] **Pagine servizi** — aggiungere schema `FAQPage` (le sezioni FAQ sono già presenti, basta strutturarle)
- [ ] **Post del blog** — aggiungere schema `Article` (autore, data, immagine)
- [ ] **Breadcrumb** — aggiungere schema `BreadcrumbList` (il breadcrumb HTML c'è già, manca solo la dichiarazione strutturata)

### Canonical URL
- [ ] Aggiungere tag `<link rel="canonical" href="..." />` in ogni pagina per evitare contenuto duplicato

### Open Graph (anteprime social)
- [ ] Aggiungere `og:image`, `og:title`, `og:description` su: homepage, pagine servizi, chi siamo, contatti
- [ ] Il blog ha già Open Graph — OK

### Correzioni minori
- [ ] Correggere "qualita" → "qualità" nella meta description globale in `frontend/src/pages/_app.js`
- [ ] Aggiungere `<meta charset="UTF-8" />` in `frontend/src/pages/_document.js`

---

## 2. Contenuti da modificare

### Homepage (`frontend/src/pages/index.js`)
- [ ] L'H1 attuale è "La tua salute, il nostro metodo" — è un buono slogan ma non contiene keyword. Valuta:
  - Mantenerlo come H1 e aggiungere un sottotitolo H2 tipo "Dentista a Milano dal 1989"
  - Oppure cambiarlo direttamente con keyword + brand
- [ ] Verificare che "dentista a Milano" compaia nel testo della sezione hero, non solo nel `<title>`
- [ ] Aggiungere menzione esplicita del quartiere/zona (es. Milano zona Lorenteggio / zona ovest) per SEO locale

### Pagina Odontoiatria (`frontend/src/pages/servizi/odontoiatria.js`)
- [ ] **Implantologia** compare solo nella meta description, non in nessun H2 o H3. Aggiungere una sottosezione dedicata con testo descrittivo
- [ ] **Ortodonzia** stessa situazione — aggiungere sottosezione H2 o H3
- [ ] **Igiene orale** — verificare che sia presente come voce separata con descrizione

### Pagina Bionutrizione (`frontend/src/pages/servizi/bionutrizione.js`)
- [ ] Verificare che la keyword "nutrizione" (non solo "bionutrizione") compaia nel testo, perché le ricerche su Google usano entrambe
- [ ] Aggiungere menzione di "nutrizionista Milano" e "dieta personalizzata Milano" nel testo

### Pagina Medicina Estetica (`frontend/src/pages/servizi/medicina-estetica.js`)
- [ ] Verificare presenza di keyword: "filler Milano", "botox Milano", "medicina estetica viso Milano"
- [ ] Sono keyword molto cercate — il testo deve contenerle in modo naturale

### Pagina Chi Siamo (`frontend/src/pages/chi-siamo.js`)
- [ ] Aggiungere una descrizione testuale per ogni membro del team (non solo nome e ruolo)
- [ ] Questo aiuta il ranking per keyword tipo "dott.ssa [cognome] dentista Milano"
- [ ] Verificare che "35 anni di esperienza" o simile compaia nel testo (elemento di fiducia importante)

### Pagina Prima Visita (`frontend/src/pages/prima-visita.js`)
- [ ] Buona struttura — verificare che "prima visita gratuita" o "prima visita dentista Milano" compaia nei titoli e nel testo
- [ ] Aggiungere FAQ: "La prima visita è gratuita?", "Quanto dura?", "Cosa portare?"

### Blog (`frontend/src/pages/blog/`)
- [ ] 850+ articoli sono un asset enorme — molti probabilmente non sono ottimizzati per keyword specifiche
- [ ] Priorità: identificare i 10-20 articoli più rilevanti (implantologia, sbiancamento, nutrizione, ecc.) e ottimizzarli con titoli H2 e meta description forti
- [ ] Aggiungere link interni dai post del blog alle pagine servizi corrispondenti

### Pagine da creare (nuove — alta priorità SEO)
- [ ] `/servizi/implantologia` — keyword ad alto volume, merita pagina dedicata
- [ ] `/servizi/ortodonzia` — stessa ragione
- [ ] `/servizi/igiene-orale` — stessa ragione
- [ ] `/servizi/sbiancamento-denti` — molto cercato

---

## 3. Immagini da ottimizzare

### Alt text (testo alternativo)
Attualmente molte immagini hanno alt text generici ripetuti. Vanno resi descrittivi e con keyword.

| Immagine | Alt attuale (da sostituire) | Alt suggerito |
|---|---|---|
| Hero homepage | "Studio Pinoli a Milano" | "Studio dentistico Pinoli — sala accoglienza Milano" |
| Team foto | Solo nome | "Dott.ssa [Nome] [Cognome], dentista Milano Studio Pinoli" |
| Foto studio | "Studio Pinoli" | "Sala trattamenti Studio Pinoli, via Chiminello Milano" |
| Implantologia | generico | "Trattamento implantologia dentale Milano Studio Pinoli" |
| Bionutrizione | generico | "Consulenza bionutrizione e dieta personalizzata Milano" |
| Medicina estetica | generico | "Trattamento medicina estetica viso Milano Studio Pinoli" |

**Regola generale:** ogni alt text deve rispondere a "cosa mostra questa foto e dove si trova lo studio".

### Nuove immagini da aggiungere o sostituire
- [ ] Foto esterne dello studio / insegna (aiuta per local SEO)
- [ ] Foto dei macchinari/attrezzature (costruisce fiducia e differenziazione)
- [ ] Foto prima/dopo trattamenti (solo con consenso paziente) — molto efficaci per medicina estetica e implantologia
- [ ] Foto del team in ambiente di lavoro (non solo ritratti statici)
- [ ] Immagini per Open Graph: una per ogni pagina servizio (dimensione consigliata 1200×630px)

### Nomi dei file immagine
I nomi attuali sono generici o codificati (es. `image-003-foto-anna-sof-5706.jpg`). Quando si sostituiscono le immagini, usare nomi descrittivi:

- ❌ `image-003-foto-anna-sof-5706.jpg`
- ✅ `studio-pinoli-dottoressa-anna-dentista-milano.jpg`
- ❌ `foto-studio-02.jpg`
- ✅ `studio-dentistico-pinoli-sala-trattamenti-milano.jpg`

### Dimensioni consigliate
| Tipo | Dimensione |
|---|---|
| Hero / banner | 1600×900px |
| Card servizi | 800×600px |
| Ritratti team | 400×500px |
| Open Graph | 1200×630px |
| Blog cover | 1200×630px |

---

## 4. SEO locale — da verificare fuori dal sito

Questi punti non riguardano il codice ma sono fondamentali per il ranking locale su Google Maps e "dentista vicino a me".

- [ ] **Google Business Profile** — verificare che esista, sia completo e aggiornato (orari, foto, categoria: Dentista)
- [ ] **Coerenza NAP** — Nome, Indirizzo, Telefono devono essere identici su: sito web, Google Business, Pagine Gialle, Facebook, qualsiasi directory
- [ ] **Recensioni Google** — attivare un sistema per chiedere recensioni ai pazienti (anche solo un link diretto)
- [ ] **Citazioni locali** — verificare presenza su: Pagine Gialle, TuttoCittà, Doctolib, iDoctors, Yelp Italia

---

## Riepilogo priorità

### Fare subito (blocca l'indicizzazione)
1. Creare `sitemap.xml`
2. Creare `robots.txt`
3. Aggiungere JSON-LD `LocalBusiness` alla homepage
4. Aggiungere JSON-LD `FAQPage` alle pagine servizi
5. Correggere alt text delle immagini principali

### Fare durante la revisione dei contenuti
6. Aggiornare testo homepage con keyword esplicite
7. Aggiungere sottosezioni per implantologia e ortodonzia
8. Ottimizzare alt text di tutte le immagini nuove
9. Aggiungere canonical URL
10. Completare Open Graph su tutte le pagine

### Fare dopo (crescita a lungo termine)
11. Creare pagine dedicate: implantologia, ortodonzia, igiene orale
12. Ottimizzare i 10-20 post blog più rilevanti
13. Aggiungere link interni dal blog alle pagine servizi
14. Configurare Google Search Console e inviare sitemap
15. Monitorare posizioni con Google Search Console ogni mese
