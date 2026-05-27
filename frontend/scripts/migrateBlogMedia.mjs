/**
 * migrateBlogMedia.mjs
 *
 * Scarica tutte le immagini WordPress (wp-content/uploads) presenti in posts.json
 * e le salva in /public/blog-media/ mantenendo la struttura delle cartelle.
 * Poi aggiorna posts.json sostituendo gli URL remoti con i path locali.
 *
 * Uso: node scripts/migrateBlogMedia.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const POSTS_JSON = join(ROOT, "src/pages/api/posts.json");
const MEDIA_DIR = join(ROOT, "public/blog-media");
const WP_BASE = "https://studiopinoli.it";
const LOCAL_BASE = "/blog-media";

// ── Funzione di download ─────────────────────────────────────────────────────
function download(url, destPath) {
  return new Promise((resolve, reject) => {
    if (existsSync(destPath)) {
      console.log(`  ↩  già presente: ${destPath.split("public")[1]}`);
      return resolve();
    }

    const dir = dirname(destPath);
    mkdirSync(dir, { recursive: true });

    const file = import("fs").then((fs) => fs.createWriteStream(destPath));
    const client = url.startsWith("https") ? https : http;

    file.then((stream) => {
      const req = client.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          stream.close();
          download(res.headers.location, destPath).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          stream.close();
          import("fs").then((fs) => fs.unlinkSync(destPath)).catch(() => {});
          console.warn(`  ✗  ${res.statusCode} — ${url}`);
          return resolve(); // non bloccare per immagini mancanti
        }
        res.pipe(stream);
        stream.on("finish", () => {
          stream.close();
          console.log(`  ✓  ${destPath.split("public")[1]}`);
          resolve();
        });
      });
      req.on("error", (err) => {
        stream.close();
        console.warn(`  ✗  errore rete: ${url} — ${err.message}`);
        resolve();
      });
    });
  });
}

// ── Estrai tutte le URL WordPress dal testo ──────────────────────────────────
function extractWpUrls(text) {
  const regex = /https?:\/\/studiopinoli\.it\/wp-content\/uploads\/[^\s"'<>\\]+/g;
  return [...new Set(text.match(regex) || [])];
}

// ── Converti URL WordPress in path locale ────────────────────────────────────
function toLocalPath(url) {
  // es: https://studiopinoli.it/wp-content/uploads/2022/05/foto.jpg
  //  → /blog-media/2022/05/foto.jpg
  const path = url.replace(/https?:\/\/studiopinoli\.it\/wp-content\/uploads/, LOCAL_BASE);
  return path;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("=== Migrazione immagini blog WordPress → locale ===\n");

  const raw = readFileSync(POSTS_JSON, "utf-8");
  const urls = extractWpUrls(raw);

  console.log(`Trovate ${urls.length} URL immagini uniche da scaricare.\n`);

  // Download in sequenza (evita di sovraccaricare il server)
  for (const url of urls) {
    const relativePath = url.replace(/https?:\/\/studiopinoli\.it\/wp-content\/uploads/, "");
    const destPath = join(MEDIA_DIR, relativePath);
    await download(url, destPath);
  }

  console.log("\n=== Download completato. Aggiorno posts.json... ===\n");

  // Sostituisci tutti gli URL in posts.json
  let updated = raw;
  for (const url of urls) {
    const local = toLocalPath(url);
    updated = updated.split(url).join(local);
  }

  // Verifica che non ci siano URL rimasti
  const remaining = extractWpUrls(updated);
  if (remaining.length > 0) {
    console.warn(`\n⚠  ${remaining.length} URL non sostituiti (controlla manualmente):`);
    remaining.forEach((u) => console.warn("   ", u));
  }

  writeFileSync(POSTS_JSON, updated, "utf-8");
  console.log("✓ posts.json aggiornato.\n");
  console.log("=== Migrazione completata! ===");
  console.log(`Le immagini sono in: public/blog-media/`);
  console.log(`Ricorda di fare un nuovo build (npm run build) prima del deploy.\n`);
}

main().catch((err) => {
  console.error("Errore:", err);
  process.exit(1);
});
