/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/images/bg-image.png')",
        "top-gradient":
          "linear-gradient(180deg, rgba(52, 100, 158, 0.8) 0%, rgba(52, 100, 158, 0.34288) 49.19%, rgba(52, 100, 158, 0) 100%)",
        "custom-gradient":
          "radial-gradient( rgba(52, 100, 158, 0.8) 0%, rgba(52, 100, 158, 0.34288) 49.19%, rgba(52, 100, 158, 0) 100%)",
      },
      boxShadow: {
        "3xl": "0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: [],
};
