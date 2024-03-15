/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-color": "#FF0000",
        "tailwind-blue": "#2D9CDB",
        "tailwind-green": "#B0CF57",
        "tailwind-cream": "#FDF7E6",
      }
    },
  },
  plugins: [],
}