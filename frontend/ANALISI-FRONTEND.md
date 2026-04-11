# Analisi Frontend — Studio Pinoli
> Analisi dello stato attuale: cosa funziona bene, cosa migliorare.

---

## Cosa va già bene

### Design System strutturato
- CSS variables complete e coerenti (`:root` in `globals.css`): colori primari, accent gold, colori per servizio, spacing, radius, shadow, transition
- Palette professionale: blu scuro `#0a5a8c` + oro caldo `#c9975c` — scelta di tono adatta a una clinica premium
- Tipografia Montserrat + Open Sans: non è una scelta eccezionale (sono font molto comuni), ma è coerente e leggibile

### Accessibilità (buon livello di base)
- Skip link implementato (`Salta al contenuto principale`)
- `aria-label` su tutti gli elementi interattivi (hamburger, social icons, iframe mappa)
- HTML semantico: `<main id="main-content">`, `<nav>`, `<article>`, `<address>`
- `aria-expanded` sull'hamburger mobile

### Performance di base
- `next/image` con `fill`, `priority`, `sizes` usato correttamente
- Video hero con `preload="metadata"` e `poster` (immagine fallback)
- Iframe mappa con `loading="lazy"`
- Build statica pura (nessuna fetch a runtime)

### Animazioni stat counter
- `IntersectionObserver` con easing `easeOutQuad` per i counter animati — effetto pulito e non eccessivo
- Non si riattiva se già avvenuto (`started.current`)

### Header mobile
- Blocco dello scroll (`overflow: hidden` su body) durante menu aperto
- Overlay click-to-close
- Logo e contatto visibili nel menu mobile

### Service theming
- Ogni servizio ha la propria variabile colore (`--color-dental`, `--color-nutrition`, etc.)
- `ServiceCard` accetta `theme` prop — architettura componente scalabile

### Footer legale
- Disclaimer medico richiesto dalla legge italiana (L. 248/2006, L. 145/2018) presente e corretto
- Dati del Direttore Sanitario e P.IVA esposti

---

## Correzioni

### ✅ Applicate

#### 1. Due tag `<h1>` nella Home — RISOLTO
`src/pages/index.js`: `.heroTag` cambiato da `<h1>` a `<p>`. Una sola `<h1>` per pagina.

#### 2. Nessun Open Graph / meta social — RISOLTO
Aggiunti `og:title`, `og:description`, `og:image` nella Home (`index.js`).
Aggiunti default OG in `_app.js` (coprono tutte le pagine come fallback).

#### 3. Nessun Schema.org (JSON-LD) — RISOLTO
Aggiunto JSON-LD `Dentist` / `MedicalClinic` nella Home con:
- `name`, `description`, `url`, `telephone`, `email`
- `PostalAddress` completo
- `GeoCoordinates` (lat/lng approssimative — verificare)
- `OpeningHoursSpecification`
- `medicalSpecialty`

#### 4. Nessun `<link rel="canonical">` — RISOLTO
Aggiunto in `_app.js` con `useRouter().asPath` — copre automaticamente tutte le pagine.

#### 5. Link inesistente nel menu mobile — RISOLTO
`Header.js`: rimosso `/servizi/medicina-integrata` (404), sostituito con:
- `/servizi/osteopatia` — Osteopatia
- `/servizi/art-terapia` — Art-Terapia

#### 6. `posts` prop ricevuta ma mai usata nella Home — RISOLTO
`index.js`: rimosso `import postsData`, rimosso `getStaticProps`, rimosso `{ posts }` dal componente.

#### 7. `BOOKING_URL` e dati servizi duplicati — RISOLTO (parziale)
Creato `src/lib/constants.js` con:
- `BOOKING_URL`, `SITE_URL`
- `STUDIO_PHONE`, `STUDIO_PHONE_LANDLINE`, `STUDIO_EMAIL`, `STUDIO_ADDRESS`
- Array `SERVICES` (unica fonte di verità)

> ⚠️ Le pagine servizi e Header.js usano ancora la costante locale — da migrare progressivamente all'import da `constants.js`.

#### 8. `Home.module.css` file inutilizzato — RISOLTO
File `src/styles/Home.module.css` eliminato.

#### 9. Font via Google CDN — problema GDPR — RISOLTO
`_app.js`: migrato a `next/font/google` con `variable` mode (font auto-ospitati da Next.js).
`globals.css`: rimosso `@import url('https://fonts.googleapis.com/...')`, aggiornate le variabili `--font-heading` e `--font-body` per usare le CSS var di next/font con fallback.

#### 20. Mobile responsive — fix CSS module pagine servizi — RISOLTO
Aggiunti/corretti breakpoint `@media (max-width: 640px)` e `@media (max-width: 480px)` in tutti i CSS module delle pagine servizi:
- `odontoiatria.module.css`: mosaicWrapper, card height, mosaicIcon, journeyTrack/Card/CardNum, doctorPhoto
- `bionutrizione.module.css`: appCallout padding, journeyCard padding, journeyCardNum font-size
- `medicina-estetica.module.css`: luxuryCard padding ridotto
- `osteopatia.module.css`: luxuryCard padding ridotto, atmCallout compact
- `art-terapia.module.css`: luxuryCard padding ridotto, pullQuote font-size ridotto

---

### ❌ Da fare

#### 10. Immagini Unsplash in una clinica reale
`src/pages/servizi/odontoiatria.js` usa URL Unsplash per alcuni servizi (protesi, implantologia, ortodonzia). Sostituire con foto reali dello studio.
**Impatto:** credibilità. **Dipende da:** foto disponibili.

#### 11. `BOOKING_URL` — migrazione completa a `constants.js`
I file seguenti definiscono ancora `BOOKING_URL` localmente:
- `src/pages/servizi/odontoiatria.js`
- `src/pages/servizi/bionutrizione.js`
- `src/pages/servizi/medicina-estetica.js`
- `src/pages/servizi/osteopatia.js`
- `src/pages/servizi/art-terapia.js`
- `src/components/Header.js`

Fix: sostituire `const BOOKING_URL = "..."` con `import { BOOKING_URL } from "@/lib/constants"`.

#### 12. Inline styles in JSX — `index.js`
Alcune property stilistiche sono ancora inline in `index.js` (es. `style={{ marginTop: '1.2rem' }}`). Da spostare in `StudioHome.module.css`.

#### 13. Blog: nessuna paginazione
`src/pages/blog/index.js` carica tutti gli 850+ post e li renderizza tutti. In produzione questo è lento.
Fix consigliato: paginazione statica con `getStaticPaths` oppure limite client-side (primi 24 + "Carica altri").

#### 14. Blog: nessuna ricerca / filtro per categoria
Con 850+ articoli non c'è modo di filtrare. Aggiungere filtro lato client per categoria con i dati già presenti.

#### 15. Classi `.animate-*` definite ma senza observer
`globals.css` definisce `.animate-fade-in`, `.scroll-animate`, `.scroll-animate.visible` — ma il `IntersectionObserver` globale che le attiva non è implementato in `_app.js`. O implementare l'observer o rimuovere le classi inutilizzate per alleggerire il CSS.

#### 16. Google Maps embed deprecato
`index.js` usa `maps.google.com/maps?output=embed` — formato non ufficiale e deprecato.
Fix: usare il Maps Embed API ufficiale (richiede API key Google) oppure sostituire con immagine statica cliccabile.

#### 17. CTA duplicata e incoerente nel menu mobile
Due pulsanti: "Prenota Appuntamento" (→ `/contatti`) e "Apri Gestionale" (→ alfadocs). L'utente non capisce la differenza rispetto al pulsante "Prenota Ora" nell'header desktop.
Fix: unificare in un solo CTA primario coerente su desktop e mobile.

#### 18. Blog: estrazione immagine con regex fragile
```js
const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
```
Usare il campo `featured_media` dall'export JSON se disponibile, più robusto.

#### 19. Coordinate geo Schema.org da verificare
Il JSON-LD aggiunto usa coordinate approssimative. Verificare le coordinate esatte di Via Domenico Cimarosa 4, Milano e aggiornare il campo `GeoCoordinates`.

---

## Priorità residua

| # | Problema | Impatto | Sforzo |
|---|----------|---------|--------|
| 11 | Migrazione BOOKING_URL a constants.js | Manutenibilità | Basso |
| 19 | Coordinate geo JSON-LD | SEO locale | Minimo |
| 10 | Foto reali al posto di Unsplash | Credibilità | Alto (dipende da foto) |
| 17 | CTA mobile unificata | UX | Basso |
| 12 | Inline styles → CSS module | Pulizia | Basso |
| 15 | Classi animate inutilizzate | CSS size | Medio |
| 13 | Paginazione blog | Performance | Medio |
| 14 | Filtro blog per categoria | UX | Medio |
| 16 | Google Maps API | Affidabilità | Medio (richiede API key) |
| 18 | Estrazione immagine blog | Robustezza | Basso |

> **✅ Risolti in sessione:** #1–9 (ottimizzazioni SEO, GDPR font, canonical, OG, schema.org, dead code), #20 (mobile responsive CSS su tutti i moduli servizi).
