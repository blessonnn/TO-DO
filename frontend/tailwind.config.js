/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#3874ff",
        primary: "#b3c5ff",
        background: "#131315",
        "bg-lowest": "#0e0e10",
        "on-background": "#e4e2e4",
        "on-surface-variant": "#c3c6d7",
        outline: "#8d90a1",
        "outline-variant": "#424655",
      },
      spacing: {
        unit: "4px",
        "stack-sm": "8px",
        "stack-md": "16px",
        gutter: "16px",
        "container-padding-mobile": "20px",
        "stack-lg": "32px",
        "container-padding-desktop": "40px",
        "section-gap": "64px",
      },
      borderRadius: {
        DEFAULT: "4px",
        lg: "8px",
        xl: "12px",
        full: "9999px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
      },
      fontSize: {
        display: ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["20px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "600" }],
        "body-lg": ["17px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
        "label-md": ["13px", { lineHeight: "18px", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-sm": ["11px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
      }
    },
  },
  plugins: [],
}
