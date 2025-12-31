/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.afzaalsuleman.click",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/secret-page/*"],
};

module.exports = config;
