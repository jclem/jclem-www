/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)",
        canvas: "var(--color-canvas)",
        card: "var(--color-card)",
        "card-text": "var(--color-card-text)",
        text: "var(--color-text)",
        "text-deemphasize": "var(--color-text-deemphasize)",
        "code-bg": "var(--color-code-bg)",
        highlight: "var(--color-highlight)",
      },

      fontFamily: {
        mono: ["Berkeley Mono", "monospace"],
        sans: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
