/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050A1A",
        card: "rgba(255, 255, 255, 0.05)",
        "glow-blue": "#00D4FF",
        "glow-cyan": "#0066FF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Orbitron", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "float": "float 20s linear infinite",
        "pulse-glow": "pulseGlow 2s infinite ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(100vh) translateX(0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) translateX(200px) scale(0.5)", opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)", filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))" },
          "50%": { opacity: "0.8", transform: "scale(1.05)", filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.8))" },
        }
      }
    },
  },
  plugins: [],
}
