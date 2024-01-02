import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import rehypeFigure from "@microflash/rehype-figure";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), expressiveCode()],
  output: "static",
  markdown: {
    rehypePlugins: [[rehypeFigure, { className: "img-figure" }]],
  },
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
  }),
  site:
    process.env.VERCEL_ENV === "production"
      ? `https://jclem.me`
      : process.env.VERCEL_ENV === "preview"
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:4321",
});
