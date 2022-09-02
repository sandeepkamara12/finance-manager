/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'splash': "url('/src/assets/images/splash-bg.png'), conic-gradient(from 178.25deg at -6.99% 9.49%, #D9DFFD 152.38deg, #7B7EEC 360deg)",
        'login': "conic-gradient(from 178.25deg at -3.99% 9.49%, #FBE0F0 0deg, #DBD2FC 118.4deg, #D9DFFD 152.38deg, #DEDFFF 360deg)",
        'transaction-top': "url('/src/assets/images/purple-bg.png')",
        'total-balancebg': "linear-gradient(90deg, #CC208E 0%, #6713D2 100%);",
        'profile-gradient': "linear-gradient(90deg, #F093FB 0%, #F5576C 100%);",
        'income-gradient': "linear-gradient(90deg, #CC208E 0%, #6713D2 100%);",
        'dashboard-gradient': "conic-gradient(from 178.25deg at -3.99% 9.57%, #EACEDF 0deg, #DBD2FC 118.4deg, #D9DFFD 152.38deg, #7B7EEC 360deg)",
      }
    },
    colors: {
      primary: {
        50: "#fdf7f2",
        100: "#fbf0e6",
        200: "#f6d8bf",
        300: "#f1c199",
        400: "#e6934d",
        DEFAULT: "#DB6400",
        600: "#c55a00",
        700: "#a44b00",
        800: "#833c00",
        900: "#6b3100",
      },
      black: {
        50: "#f2f2f2",
        100: "#e6e6e6",
        200: "#bfbfbf",
        300: "#999999",
        400: "#4d4d4d",
        DEFAULT: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      white: { DEFAULT: "#FFFFFF", 50: "#FFFFFF", 100: "#FFFFFF", 200: "#FFFFFF", 300: "#FFFFFF", 400: "#FFFFFF", 500: "#FFFFFF", 600: "#E3E3E3", 700: "#C7C7C7", 800: "#ABABAB", 900: "#8F8F8F" },
      pink: { DEFAULT: '#CA2091', '50': '#F2AFDC', '100': '#F09ED4', '200': '#EA7AC5', '300': '#E457B5', '400': '#DF34A6', '500': '#CA2091', '600': '#9A186E', '700': '#69114B', '800': '#390929', '900': '#080106' },
      purple: { DEFAULT: '#6B14D1', '50': '#CBA6F6', '100': '#C093F5', '200': '#AB6EF1', '300': '#9549EE', '400': '#7F24EA', '500': '#6B14D1', '600': '#510F9E', '700': '#370A6B', '800': '#1C0537', '900': '#020004' },
      textColor: '#666666',
      border: '#E2E2F6',
      red: '#F95B51',
      formLabel: '#8C8C8C',
      tabColor: '#A19F9F',
    },
    fontSize: {
      "12": ["0.75rem"],
      "13": ["0.813rem"],
      "14": ["0.875rem"],
      "15": ["0.938rem"],
      "16": ["1rem"],
      "18": ["1.125rem"],
      "20": ["1.25rem"],
      "22": ["1.375rem"],
      "24": ["1.5rem"],
      "28": ["1.75rem"],
      "30": ["1.875rem"],
      "32": ["2rem"],
      "34": ["2.125rem"],
      "36": ["2.25rem"],
    },
    lineHeight: {
      45: "2.813rem",
      40: "2.5rem",
      36: "2.25rem",
      30: "1.875rem",
      24: "1.5rem",
      20: "1.25rem",
      18: "1.125rem",
      16: "1rem",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      body: ["Inter"],
    },
    borderRadius: {
      xs: "4px",
      sm: "5px",
      lg: "15px",
      xl: "20px",
      full: "9999px",
      none: "0",
      DEFAULT: "10px",
    },
    boxShadow: {
      'dashboardCard': '0 25px 40px -25px #9da1f3',
      'plusIconShadow': '0 15px 60px -24px #1f615c',
    }
  },
  plugins: [],
}
