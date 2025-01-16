
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      poppins:"var(--poppins)",
      Nunito_Sans:"var(--nunito)"
    },
    boxShadow: {
      'gradient': '0px 4px 6px rgba(0, 0, 0, 0.2), inset 0 0 8px 2px linear-gradient(90deg, rgb(0, 204, 255), rgb(255, 102, 204))',
    },
    },
  },
  plugins: [],
} satisfies Config;
