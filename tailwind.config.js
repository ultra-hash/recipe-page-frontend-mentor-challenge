/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cNutmeg: "#854632",
          cDarkRaspberry: "#7b284f"
        },
        secondary: {
          cWhite: "#ffffff",
          cRoseWhite: "#fff5fa",
          cEggShell: "#f3e6d8",
          cLightGrey: "#e4ded8",
          cWengeBrown: "#5f574e",
          cDarkCharcoal: "#302d2c"
        }
      },
      fontSize: {
        cParagraph: "16px",
      },
      fontFamily: {
        cOutfit: "Outfit, sans-serif",
        cYoungSerif: ["Young Serif", "serif"]
      }
    },
  },
  plugins: [],
}
