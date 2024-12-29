import sitemap from "@astrojs/sitemap";
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
      themes: ["light-plus", "dark-plus"],
      styleOverrides: {
        uiFontFamily: "Berkeley Mono, monospace",
        uiFontSize: "var(--text-xs-size)",
        borderRadius: 0,
      },
    }),
  ],
  output: "static",
  markdown: {
    rehypePlugins: [[rehypeFigure, { className: "img-figure" }]],
  },
  site: "https://jclem.me",
});
