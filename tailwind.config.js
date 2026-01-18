/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(15, 15, 15)",
        beige: "rgb(231, 215, 197)",      // Основной фон
        light: "rgb(245, 240, 235)",      // Карточки и теги
        gold: "rgb(218, 164, 40)",        // Акценты
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "Courier New", "monospace"],
      },
      fontSize: {
        "hero-mobile": ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
        "hero-tablet": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "hero-desktop": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
      },
      borderRadius: {
        card: "16px",
        button: "8px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(15, 15, 15, 0.05), 0 2px 4px -2px rgba(15, 15, 15, 0.05)",
        "card-hover":
          "0 10px 15px -3px rgba(15, 15, 15, 0.08), 0 4px 6px -4px rgba(15, 15, 15, 0.05)",
      },
    },
  },
  plugins: [],
};
