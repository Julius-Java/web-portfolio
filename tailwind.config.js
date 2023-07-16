/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  mode: "jit",
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        burtons: "burtons"
      }
    },
  },
  plugins: [],
}

