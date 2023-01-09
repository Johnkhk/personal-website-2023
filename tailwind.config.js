/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rayqin': ['"Times New Roman"', 'Times', 'serif'],
      'quote': 'Monaco'
    },
    extend: {
      backgroundImage: {
        'wut': "url('https://mdbootstrap.com/img/new/ecommerce/vertical/097.jpg')",
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}