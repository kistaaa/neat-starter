module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        bg: '#1f1f27',
        grey1: '#2b2b37',
        greyT: '#2b2b3799',
        hover: '#00ffff',
      },
      grads: {
        header: 'background:linear-gradient(180deg, #000 0%, #00000000)',
        caption: 'background:linear-gradient(0deg, #2b2b37 0%, #2b2b3799)'
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
