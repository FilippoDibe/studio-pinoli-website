// backend/routes/content.js
const express = require("express");
const router  = express.Router();
const fs      = require("fs");
const path    = require("path");

// Funzione helper per leggere i file JSON
function readData(fileName) {
  const filePath = path.join(__dirname, "..", "data", fileName);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// GET /api/posts — tutti i post
router.get("/posts", (req, res) => {
  const posts = readData("posts.json");
  // Ordinamento per data (più recenti prima)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json(posts);
});

// GET /api/posts/:slug — singolo post
router.get("/posts/:slug", (req, res) => {
  const posts = readData("posts.json");
  const post  = posts.find((p) => p.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: "Post non trovato" });
  res.json(post);
});

// GET /api/pages — tutte le pagine
router.get("/pages", (req, res) => {
  res.json(readData("pages.json"));
});

// GET /api/pages/:slug — singola pagina
router.get("/pages/:slug", (req, res) => {
  const pages = readData("pages.json");
  const page  = pages.find((p) => p.slug === req.params.slug);
  if (!page) return res.status(404).json({ error: "Pagina non trovata" });
  res.json(page);
});

// GET /api/categories — tutte le categorie
router.get("/categories", (req, res) => {
  res.json(readData("categories.json"));
});

// GET /api/tags — tutti i tag
router.get("/tags", (req, res) => {
  res.json(readData("tags.json"));
});

module.exports = router;