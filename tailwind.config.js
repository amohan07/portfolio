/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#673ab7', // A shade of purple
        'secondary': '#673ab7', // A shade of purple
        'dark-bg': '#222',
        'dark-text': '#eee',
        'blue-600': '#2563EB', // Tailwind Blue-600
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}
