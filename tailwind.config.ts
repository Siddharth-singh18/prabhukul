import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF9F6",
        maroon: "#7A1F2B",
        gold: "#C9A15C",
        forest: "#2E4A3D",
        charcoal: "#0F0F0F"
      },
      fontFamily: {
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(201, 161, 92, 0.22)",
        glass: "0 20px 50px rgba(15, 15, 15, 0.10)"
      },
      backgroundImage: {
        mandala:
          "radial-gradient(circle at 1px 1px, rgba(122,31,43,.16) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
