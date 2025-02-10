/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://eduardohilariodev.com",
  generateRobotsTxt: false, // We already created a custom one
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/404", "/500"],
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom priority for different pages
    const priorities = {
      "/": 1.0,
      "/about": 0.9,
      "/projects": 0.8,
      "/blog": 0.8,
      "/contact": 0.7,
    };

    // Return object for sitemap
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  alternateRefs: [
    {
      href: "https://eduardohilariodev.com/en",
      hreflang: "en",
    },
    {
      href: "https://eduardohilariodev.com/pt",
      hreflang: "pt",
    },
    {
      href: "https://eduardohilariodev.com/es",
      hreflang: "es",
    },
    {
      href: "https://eduardohilariodev.com/fr",
      hreflang: "fr",
    },
    {
      href: "https://eduardohilariodev.com/de",
      hreflang: "de",
    },
    {
      href: "https://eduardohilariodev.com/it",
      hreflang: "it",
    },
  ],
};
