import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://www.afzaalsuleman.click",
  generateRobotsTxt: true, // (optional) generates robots.txt
  sitemapSize: 5000, // optional, default: 5000 URLs per sitemap file
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/secret-page/*"], // optional, if you want to exclude pages
};

export default config;
