/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "serif"],
      },
      boxShadow: {
        "custom-light": `4px 4px 10px
                                 rgba(0, 0, 0, 0.1)`,
        "custom-dark": `6px 6px 15px
                                rgba(0, 0, 0, 0.3)`,
      },
    },
    textColor: {
      primary: "#444444",
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["light"],
  },
};
