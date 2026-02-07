// backend/server.js
const express = require("express");
const cors    = require("cors");
require("dotenv").config();

const app  = express();
const PORT = process.env.PORT || 3001;

// Permette al frontend (porta 3000) di chiamare questo server
app.use(cors());
app.use(express.json());

// Importa le rotte
const contentRoutes = require("./routes/content");
app.use("/api", contentRoutes);

// Rotta di test
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend funziona" });
});

app.listen(PORT, () => {
  console.log(`Backend in ascolto sulla porta ${PORT}`);
});