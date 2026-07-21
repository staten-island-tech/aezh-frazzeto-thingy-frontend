module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust to match your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // Add this line
  ],
}