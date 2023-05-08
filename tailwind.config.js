/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark": "#272935",
        "dark-2": "#23252f",
        "card": "#343A40",
        "whiteText": "#f8f8f2",
        "blueText": "#2962ff",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: "rotate(-15deg)"},
          "50%": {transform: "rotate(15deg)"},
        },
        heartBeat: {
          "0%": {transform: 'scale(1)'},
          "14%": {transform: "scale(1.3)"},
          "28%": {transform: "scale(1)"},
          "42%": {transform: "scale(1.3)"},
          "70%": {transform: "scale(1)"},
        },
        jello: {
          "from, 11.1%, to": {transform: "translate3d(0,0,0)"},
          "22.2%": {transform: "scale(1.3) skewX(-12.5deg) skewY(-12.5deg)"},
          "33.3%": {transform: "skewX(6.25deg) skewY(6.25deg)"},
          "44.4%": {transform: "skewX(-3.125deg) skewY(-3.125deg)"},
          "55.5%": {transform: "skewX(1.5625deg) skewY(1.5625deg)"},
          "66.6%": {transform: "skewX(-0.78125deg) skewY(-0.78125deg)"},
          "77.7%": {transform: "skewX(0.390625deg) skewY(0.390625deg)"},
          "88.8%": {transform: "skewX(-0.1953125deg) skewY(-0.1953125deg) scale(1)"},
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinte',
        heartBeat: "heartBeat 1s infinite",
        jello: "jello 2s infinite"
      },
    },
  },
  plugins: [],
};
