import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import expressiveCode from 'astro-expressive-code';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), expressiveCode()],
  output: "static",
  adapter: vercel(),
  site: process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:4321'
});
