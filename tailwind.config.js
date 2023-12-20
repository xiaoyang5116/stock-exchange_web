/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px", // 576px
      md: "768px", // ~768px
      lg: "992px", // ~992px
      xl: "1280px", // ~1280px
      "2xl": "1536px", // ~1536px
    },
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    extend: {},
  },
  plugins: [],
};
