/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.studiopinoli.it",
  generateRobotsTxt: false, // usiamo il nostro robots.txt manuale
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/page/*"],
  transform: async (config, path) => {
    // Pagine principali — priorità alta
    const highPriority = ["/", "/i-nostri-servizi", "/prima-visita"];
    const medPriority = [
      "/servizi/odontoiatria",
      "/servizi/bionutrizione",
      "/servizi/medicina-estetica",
      "/servizi/osteopatia",
      "/servizi/art-terapia",
      "/chi-siamo",
      "/contatti",
    ];

    let priority = config.priority;
    let changefreq = config.changefreq;

    if (highPriority.includes(path)) {
      priority = 1.0;
      changefreq = "weekly";
    } else if (medPriority.includes(path)) {
      priority = 0.9;
      changefreq = "monthly";
    } else if (path.startsWith("/blog/")) {
      priority = 0.6;
      changefreq = "yearly";
    } else if (path === "/blog") {
      priority = 0.8;
      changefreq = "daily";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
