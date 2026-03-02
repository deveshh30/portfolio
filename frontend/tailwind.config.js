// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Keep default sans-serif stack for body text
        sans: ['Inter', 'system-ui', 'sans-serif'],

        // New named families for specific use-cases
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        logo:   ['Space Grotesk', 'Inter', 'sans-serif'],     // ← we’ll use this for "Devesh"
        mono:   ['JetBrains Mono', 'monospace'],              // good for code later
      },
    },
  },
  plugins: [],
}