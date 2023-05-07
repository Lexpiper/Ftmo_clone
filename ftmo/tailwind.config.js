/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0781fe",
        secondary: "#212122",
        alt: "#00c7b4",
      },
      backgroundImage: {
        heroBack:
          "https://ftmo.com/wp-content/themes/ftmo-com/public/images//hero_mobile.png",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
