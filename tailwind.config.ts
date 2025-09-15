import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cyber theme specific colors
        neon: {
          cyan: "var(--neon-cyan)",
          magenta: "var(--neon-magenta)",
          purple: "var(--neon-purple)",
          blue: "var(--neon-blue)",
        },
        cyber: {
          dark: "var(--cyber-dark)",
          darker: "var(--cyber-darker)",
          light: "var(--cyber-light)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Cyber-specific animations
        "cyber-glow": {
          "0%, 100%": {
            textShadow: "0 0 5px rgba(0, 255, 255, 0.5)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.4)",
          },
        },
        "cyber-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(0, 255, 255, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.4)",
          },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        // Cyber animations
        "cyber-glow": "cyber-glow 2s ease-in-out infinite",
        "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
        "neon-flicker": "neon-flicker 0.15s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
