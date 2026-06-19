/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bps: {
          blue: {
            DEFAULT: '#04549C',
            light: '#1D70B8',
            dark: '#023c70',
            bg: '#F0F7FD'
          },
          green: {
            DEFAULT: '#00A859',
            light: '#84C444',
            dark: '#007d42',
            bg: '#F0FAF3'
          },
          yellow: {
            DEFAULT: '#FFC72C',
            dark: '#D9A300'
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
