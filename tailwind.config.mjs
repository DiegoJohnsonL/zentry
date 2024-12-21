/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "circular-web": ["var(--font-circularweb)", "sans-serif"],
      general: ["var(--font-general)", "sans-serif"],
      "robert-medium": ["var(--font-robert-medium)", "sans-serif"],
      "robert-regular": ["var(--font-robert-regular)", "sans-serif"],
      zentry: ["var(--font-zentry)", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};

export default config;
