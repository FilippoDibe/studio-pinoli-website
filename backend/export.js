// backend/export.js
const axios = require("axios");
const fs   = require("fs");
const path  = require("path");

const WP_URL = "https://studiopinoli.it/wp-json/wp/v2";

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept": "application/json",
};

// Attende X millisecondi prima di continuare
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchAll(endpoint) {
  let page    = 1;
  let results = [];
  while (true) {
    try {
      await delay(2000); // Attende 2 secondi tra ogni chiamata
      const res = await axios.get(`${WP_URL}/${endpoint}`, {
        params: { per_page: 100, page },
        headers: HEADERS,
      });
      if (res.data.length === 0) break;
      results = results.concat(res.data);
      page++;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.code === "rest_post_invalid_page_number") {
        break;
      }
      throw err;
    }
  }
  return results;
}

async function exportAll() {
  if (!fs.existsSync("./data")) fs.mkdirSync("./data");

  const endpoints = ["posts", "pages", "categories", "tags", "media"];

  for (const ep of endpoints) {
    console.log(`Esportando ${ep}...`);
    await delay(3000); // Attende 3 secondi tra un endpoint e l'altro
    try {
      const data = await fetchAll(ep);
      fs.writeFileSync(
        path.join(__dirname, "data", `${ep}.json`),
        JSON.stringify(data, null, 2)
      );
      console.log(`  ✓ ${data.length} elementi salvati in data/${ep}.json`);
    } catch (err) {
      console.error(`  ✗ Errore su ${ep}:`, err.message);
      if (err.response) {
        console.error(`     Body:`, JSON.stringify(err.response.data).slice(0, 500));
      }
    }
  }
}

exportAll();
