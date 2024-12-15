/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5D04E",
        XD: "#fff",
      },
      fontFamily: {
        figtree: "Figtree",
      },
      boxShadow: {
        XD: "8px 8px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
