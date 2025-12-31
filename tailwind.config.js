/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF8F3",
          light: "#FFFEF9",
          dark: "#F0EDE5",
        },
        gold: {
          DEFAULT: "#C9A961",
          light: "#E5D4A6",
          dark: "#A68B4A",
          accent: "#D4AF37",
        },
        emerald: {
          DEFAULT: "#1A5943",
          light: "#2D7A5F",
          dark: "#0F3D2C",
          muted: "#3A6B5A",
        },
      },
      fontFamily: {
        arabic: ["Amiri", "serif"],
        heading: ["Playfair Display", "serif"],
        body: ["Cormorant Garamond", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "slide-up": "slideUp 1.2s ease-out forwards",
        "scale-in": "scaleIn 1.5s ease-out forwards",
        "draw-border": "drawBorder 2s ease-out forwards",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        particle: "particle 15s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        drawBorder: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(-10px) translateX(-10px)" },
        },
        glowPulse: {
          "0%, 100%": {
            textShadow:
              "0 0 20px rgba(201, 169, 97, 0.4), 0 0 40px rgba(201, 169, 97, 0.2)",
            filter: "brightness(1)",
          },
          "50%": {
            textShadow:
              "0 0 30px rgba(201, 169, 97, 0.6), 0 0 60px rgba(201, 169, 97, 0.3)",
            filter: "brightness(1.1)",
          },
        },
        particle: {
          "0%": {
            transform: "translateY(100vh) translateX(0) scale(0)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateY(-100vh) translateX(50px) scale(1)",
            opacity: "0",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
