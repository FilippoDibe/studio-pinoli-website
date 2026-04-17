# SEO — Lista lavori da fare

Studio Pinoli | Ultima analisi: aprile 2026 | Aggiornato: 17 aprile 2026

---

## Stato attuale

La struttura tecnica del sito è ora completa per quanto riguarda gli elementi fondamentali: sitemap, robots.txt, canonical, Open Graph e Schema.org sono tutti implementati. Le priorità residue riguardano contenuti da potenziare, nuove pagine da creare e attività off-site.

---

## 1. Elementi tecnici

### `sitemap.xml` ✅ FATTO
- [x] Generata automaticamente post-build con `next-sitemap`
- [x] Include tutte le URL: home, servizi, chi-siamo, prima-visita, contatti, tutti i blog post (850+)
- [x] Priorità calibrate: home/i-nostri-servizi/prima-visita = 1.0 · servizi/chi-siamo/contatti = 0.9 · blog = 0.6 · blog index = 0.8
- [x] Si rigenera automaticamente ad ogni build

### `robots.txt` ✅ FATTO
- [x] Creato in `frontend/public/robots.txt`
- [x] Allow tutto, Disallow `/api/`, punta alla sitemap

### Canonical URL ✅ FATTO
- [x] `<link rel="canonical">` automatico in `_app.js` via `useRouter().asPath` — copre tutte le pagine

### Open Graph ✅ FATTO
- [x] Homepage — `og:title`, `og:description`, `og:image`
- [x] Odontoiatria
- [x] Bionutrizione
- [x] Medicina Estetica
- [x] Osteopatia
- [x] Art-Terapia
- [x] Chi Siamo
- [x] Prima Visita
- [x] Contatti
- [x] Blog post — già presenti, confermati

### Structured Data (JSON-LD) ✅ FATTO (parziale)
- [x] **Homepage** — schema `Dentist` + `MedicalClinic` con nome, indirizzo, telefono, email, orari, coordinate geo, medicalSpecialty
- [x] **Pagine servizi** — schema `MedicalBusiness` + `hasOfferCatalog` con le procedure specifiche su ognuna delle 5 pagine
- [x] **Contatti** — schema `FAQPage` con le 5 FAQ già presenti (rich snippet Google)
- [ ] **Post del blog** — aggiungere schema `Article` (autore, data, immagine)
- [ ] **Breadcrumb** — aggiungere schema `BreadcrumbList` (il breadcrumb HTML c'è, manca il JSON-LD)

### Google Analytics 4 ✅ FATTO (pronto, attivabile)
- [x] Script integrato in `_app.js` con `next/script` e `strategy="afterInteractive"` (non penalizza i Core Web Vitals)
- [x] Si attiva solo se `NEXT_PUBLIC_GA_ID` è presente nel file `.env.local`
- [ ] **Da fare:** creare property GA4 su analytics.google.com e aggiungere `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` a `.env.local`

### Google Search Console — DA FARE
- [ ] Creare property su search.google.com/search-console
- [ ] Aggiungere meta tag di verifica nell'`<Head>` di `_app.js`
- [ ] Dopo il deploy, inviare la sitemap: `https://www.studiopinoli.it/sitemap.xml`
- [ ] Monitorare copertura indice e posizioni ogni mese

### Correzioni minori — DA FARE
- [ ] Aggiungere schema `BreadcrumbList` JSON-LD (breadcrumb HTML già presente su tutte le pagine)
- [ ] Aggiungere schema `Article` sui post del blog (autore, data, immagine)

---

## 2. Contenuti da modificare

### Homepage (`frontend/src/pages/index.js`)

- [ ] Verificare che "dentista a Milano" compaia nel testo della sezione hero, non solo nel `<title>`
- [ ] Aggiungere menzione esplicita del quartiere/zona (es. zona Navigli / zona ovest) per SEO locale

### Pagina Odontoiatria (`frontend/src/pages/servizi/odontoiatria.js`)

- [ ] **Implantologia** — aggiungere sottosezione H2 dedicata con testo descrittivo (keyword ad alto volume)
- [ ] **Ortodonzia** — stessa cosa, aggiungere H2/H3 con descrizione
- [ ] **Igiene orale** — verificare presenza come voce separata con descrizione

### Pagina Bionutrizione (`frontend/src/pages/servizi/bionutrizione.js`)

- [ ] Verificare che "nutrizione" (non solo "bionutrizione") compaia nel testo
- [ ] Aggiungere "nutrizionista Milano" e "dieta personalizzata Milano" in modo naturale nel testo

### Pagina Medicina Estetica (`frontend/src/pages/servizi/medicina-estetica.js`)

- [ ] Verificare presenza di "filler Milano", "medicina estetica viso Milano" nel testo

### Pagina Chi Siamo (`frontend/src/pages/chi-siamo.js`)

- [ ] Aggiungere descrizione testuale per ogni membro del team (non solo nome e ruolo)
- [ ] Aiuta il ranking per "dott.ssa [cognome] dentista Milano"

### Pagina Prima Visita (`frontend/src/pages/prima-visita.js`)

- [ ] Aggiungere FAQ: "La prima visita è gratuita?", "Quanto dura?", "Cosa portare?"
- [ ] Queste FAQ possono diventare rich snippet se strutturate con schema `FAQPage`

### Blog (`frontend/src/pages/blog/`)

- [ ] Identificare i 10-20 articoli più rilevanti (implantologia, sbiancamento, nutrizione) e ottimizzarli con H2 e meta description forti
- [ ] Aggiungere link interni dai post del blog alle pagine servizi corrispondenti

### Pagine da creare (nuove — alta priorità SEO)

- [ ] `/servizi/implantologia` — keyword ad alto volume, merita pagina dedicata
- [ ] `/servizi/ortodonzia` — stessa ragione
- [ ] `/servizi/igiene-orale` — stessa ragione
- [ ] `/servizi/sbiancamento-denti` — molto cercato

---

## 3. Immagini da ottimizzare

### Alt text (testo alternativo)

| Immagine          | Alt attuale (da sostituire)  | Alt suggerito                                              |
| ----------------- | ---------------------------- | ---------------------------------------------------------- |
| Hero homepage     | "Studio Pinoli a Milano"     | "Studio dentistico Pinoli — sala accoglienza Milano"       |
| Team foto         | Solo nome                    | "Dott.ssa [Nome] [Cognome], dentista Milano Studio Pinoli" |
| Foto studio       | "Studio Pinoli"              | "Sala trattamenti Studio Pinoli, Via Cimarosa Milano"      |
| Implantologia     | generico                     | "Trattamento implantologia dentale Milano Studio Pinoli"   |
| Bionutrizione     | generico                     | "Consulenza bionutrizione e dieta personalizzata Milano"   |
| Medicina estetica | generico                     | "Trattamento medicina estetica viso Milano Studio Pinoli"  |

### Nuove immagini da aggiungere o sostituire

- [ ] Foto esterne dello studio / insegna (aiuta per local SEO)
- [ ] Foto dei macchinari/attrezzature (costruisce fiducia)
- [ ] Foto prima/dopo trattamenti (solo con consenso paziente) — efficaci per medicina estetica e implantologia
- [ ] Foto del team in ambiente di lavoro (non solo ritratti statici)
- [ ] Immagini Open Graph dedicate per ogni pagina servizio (1200×630px) — attualmente puntano alle foto esistenti del sito

### Nomi dei file immagine

I nomi attuali sono generici o codificati. Quando si sostituiscono le immagini, usare nomi descrittivi:

- ❌ `image-003-foto-anna-sof-5706.jpg`
- ✅ `studio-pinoli-dottoressa-anna-dentista-milano.jpg`
- ❌ `foto-studio-02.jpg`
- ✅ `studio-dentistico-pinoli-sala-trattamenti-milano.jpg`

### Dimensioni consigliate

| Tipo          | Dimensione |
| ------------- | ---------- |
| Hero / banner | 1600×900px |
| Card servizi  | 800×600px  |
| Ritratti team | 400×500px  |
| Open Graph    | 1200×630px |
| Blog cover    | 1200×630px |

---

## 4. SEO locale — da verificare fuori dal sito

- [ ] **Google Business Profile** — verificare che esista, sia completo e aggiornato (orari, foto, categoria: Dentista)
- [ ] **Coerenza NAP** — Nome, Indirizzo, Telefono identici su: sito web, Google Business, Pagine Gialle, Facebook, directory
- [ ] **Recensioni Google** — attivare un sistema per chiedere recensioni ai pazienti (anche solo un link diretto)
- [ ] **Citazioni locali** — verificare presenza su: Pagine Gialle, TuttoCittà, Doctolib, iDoctors, Yelp Italia

---

## Riepilogo priorità

### ✅ Già fatto (aprile 2026)

1. ~~Creare `sitemap.xml`~~ — generata automaticamente con next-sitemap
2. ~~Creare `robots.txt`~~
3. ~~Aggiungere JSON-LD `LocalBusiness/Dentist` alla homepage~~
4. ~~Aggiungere JSON-LD `MedicalBusiness` + `hasOfferCatalog` alle 5 pagine servizi~~
5. ~~Aggiungere JSON-LD `FAQPage` alla pagina contatti~~
6. ~~Open Graph su tutte le pagine~~
7. ~~Canonical URL automatico~~
8. ~~Google Analytics 4 integrato (attivabile via env var)~~

### Da fare subito (richiede accesso esterno)

1. Creare property Google Search Console + inviare sitemap
2. Creare property Google Analytics 4 + aggiungere `NEXT_PUBLIC_GA_ID` a `.env.local`

### Da fare durante la revisione dei contenuti

3. Aggiornare testo homepage con keyword esplicite ("dentista a Milano", zona)
4. Aggiungere sottosezioni per implantologia e ortodonzia in `/servizi/odontoiatria`
5. Ottimizzare alt text di tutte le immagini
6. Aggiungere FAQ alla pagina Prima Visita (con schema FAQPage)
7. Schema `BreadcrumbList` JSON-LD su tutte le pagine
8. Schema `Article` sui post del blog

### Da fare dopo (crescita a lungo termine)

9. Creare pagine dedicate: implantologia, ortodonzia, igiene orale, sbiancamento
10. Ottimizzare i 10-20 post blog più rilevanti
11. Aggiungere link interni dal blog alle pagine servizi
12. Monitorare posizioni con Google Search Console ogni mese

---

## Proposte future (idee dello studio)

1. Chatbot WhatsApp che risponde e controlla il gestionale Alfadocs per gestione e prenotazione tramite telefono
2. Gestire il flusso del telefono con un chatbot che scrive e prenota
3. Notifiche automatiche quando il bot esegue una prenotazione
