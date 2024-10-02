/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
  ],
  prefix:"",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    fontFamily: {
      marcellus: [`var(--font-marcellus)`, 'sans-serif'],
      montserrat: [`var(--font-montserrat)`, 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#473936",
        },
        secondary: {
          DEFAULT: "#f2dfce",
          100: "#cea39c",
        },
        accent: {
          DEFAULT: "#f19687",
          100: "#f2d5c5",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}