/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#171C28", // maybe #000000
        text: "#FFFFFF",
        card: "#292C33",
        gray: "#BFBFBF",
        // These are the gradient colors
        "light-blue": "#6BC5F8",
        "light-purple": "#CF59E6"
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      }
    },
    screens: {
      phone: { max: "700px" }, // 560px
      tablet: { min: "700px", max: "1100px" }, // min = 560px
      large: { min: "1100px", max: "1350px" }
    }
  },
  plugins: [],
}