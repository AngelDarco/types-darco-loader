/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      animation: {
        "loader1": "loader1 3s ease-in-out infinite",
        "loader2": "loader2 3s ease-in-out infinite",
      },
      keyframes: {
        loader1: {
          "0%": { width: "0%", boxShadow: "0 0 6px var(--color)" },
          "40%": { width: "100%" },
          "100%": { width: "100%" }
        },
        loader2: {
          "30%": { width: "0%", boxShadow: "0 0 6px var(--color)" },
          "50%": { width: "100%" },
          "100%": { width: "0%" }
        }
      },
    },
    screens: {
      "laptop": { max: "900px" },
    },
  },
};

