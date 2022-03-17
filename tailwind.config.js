module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        sapGreen: '#447604',
        avocado: '#508A05',
        mantis: '#64C247',
        aeroBlue: '#C4FDEB',
        keppel: '#52ad9c',
        feldgrau: '#47624f',
        pineTree: '#232F27',
      },
    },
  },
  plugins: [],
};
