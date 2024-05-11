/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        " white": "hsl(0, 0%, 100%)",
        " black": "hsl(0, 0%, 0%)",
        "dark-gray": " hsl(0, 0%, 55%) ",
        "very-dark-gray": "hsl(0, 0%, 41%) ",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "hero-image": "url('./assets/desktop/image-hero.jpg')",
        "mobile-image": "url('./assets/mobile/image-hero.jpg')",
      }),
    },
  },
  plugins: [],
};
