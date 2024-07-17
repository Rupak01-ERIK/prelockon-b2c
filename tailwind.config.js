/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        xxl: ["28px", "36px"],
      },
      spacing: {
        'margin-minus-40': '-40px',
      },
      colors: {
        "navbar-1": "#48586F80",
        "primary-color": "#06FACE",
        "section-background-color": "#1b2027",
      },
    },
  },
  plugins: [],
};
