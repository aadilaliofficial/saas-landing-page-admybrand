/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#C084FC',
        'neon-blue': '#38BDF8',
      },
      boxShadow: {
        'neon-blue': '0 0 12px #38BDF8',
        'neon-purple': '0 0 12px #C084FC',
      },
    },
  },
  plugins: [],
}
