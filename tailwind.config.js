module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: {
          100: "#EDEBFF", // lightest tint
          200: "#D1CDFF",
          300: "#B5AFFF",
          400: "#9A91FF",
          500: "#6C63FF", // base color (rgb(108, 99, 255))
          600: "#4E45E6",
          700: "#3A33B4",
          800: "#292386",
          900: "#181359",
        },
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
      lineHeight: {
        hero: "4.5rem",
      },
    },
  },
  plugins: [],
};
