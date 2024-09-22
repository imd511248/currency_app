/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}", // Include JS and JSX files for Tailwind class scanning
  ],
  theme: {
    extend: {
      colors: {
        customColor: "rgba(2, 7, 40, 0.5)", // Add your custom color here
      },
    },
  },
  plugins: [],
};
