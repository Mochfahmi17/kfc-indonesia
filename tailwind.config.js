/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        merah: "#c4122f",
        hitam: "#0e1116",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        aboutImage: "url('/src/assets/img/bg-food.png')",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
