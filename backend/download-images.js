// backend/download-images.js
const axios = require("axios");
const fs    = require("fs");
const path  = require("path");

async function downloadImages() {
  const mediaData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "media.json"), "utf-8")
  );

  const outputDir = path.join(__dirname, "..", "frontend", "public", "images");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  for (const item of mediaData) {
    if (!item.media_details || !item.media_details.file) continue;

    const url      = item.link; // URL originale dell'immagine
    const fileName = path.basename(item.media_details.file);
    const destPath = path.join(outputDir, fileName);

    // Non riscaricare se già presente
    if (fs.existsSync(destPath)) {
      console.log(`  ○ Già presente: ${fileName}`);
      continue;
    }

    try {
      const res = await axios.get(url, { responseType: "arraybuffer" });
      fs.writeFileSync(destPath, res.data);
      console.log(`  ✓ Scaricata: ${fileName}`);
    } catch (err) {
      console.error(`  ✗ Errore: ${fileName} - ${err.message}`);
    }
  }
}

downloadImages();