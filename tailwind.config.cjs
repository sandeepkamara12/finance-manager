/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'splash': "url('src/assets/images/splash-bg.png'), conic-gradient(from 178.25deg at -6.99% 9.49%, #D9DFFD 152.38deg, #7B7EEC 360deg)",
        'login': "conic-gradient(from 178.25deg at -3.99% 9.49%, #FBE0F0 0deg, #DBD2FC 118.4deg, #D9DFFD 152.38deg, #DEDFFF 360deg)",
        'transaction-top': "url('src/assets/images/purple-bg.png')",
        'total-balancebg': "linear-gradient(90deg, #CC208E 0%, #6713D2 100%);",
      }
    },
  },
  plugins: [],
}
