/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EFF1FB",
        secondary: "#3450E5",
        tertiary: "#C22D2D",
        quaternary: "#EFE959",
      },
    },
  },
  screens: {
    xs: "450px",
  },
  plugins: [require("flowbite/plugin")],
};
