import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import rehypeFigure from "@microflash/rehype-figure";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    expressiveCode({
      plugins: [pluginCollapsibleSections()],
      styleOverrides: {
        uiFontFamily: "Berkeley Mono, monospace",
        uiFontSize: "var(--text-xs-size)",
        frames: {
          editorActiveTabIndicatorTopColor: "var(--color-highlight)",
          shadowColor: "transparent",
        },
        borderRadius: 0,
      },
    }),
  ],
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
