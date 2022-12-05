/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'd_gray' : 'hsl(0, 0%, 55%)',
        'black' : 'hsl(0, 0%, 0%)',
        'w3' : 'hsl(0, 100%, 100%,0.55)',
        'v_d_gray' : 'hsl(0, 0%, 41%)',
        'white'  : ' hsl(0, 0%, 100%)',
        'b2' : 'rgba(0, 0, 0, 0.1)',
        'b3' : 'rgba(0, 0, 0, 0.6)',
        'w2' : 'rgb(255, 255, 2)'
      },

      fontFamily:{
        'joseph': `'Josefin Sans', sans-serif`,
        'alata': `'Alata', sans-serif`
      },
      fontWeight:{
        3 : 300,
        4 : 400
      },
      backgroundImage:{
        'hero' : 'url(../src/images/desktop/image-hero.jpg)',
        'hero2' : 'url(../src/images/mobile/image-hero.jpg)',
        'earth' : 'url(../src/images/desktop/image-deep-earth.jpg)',
        'curiosity' : 'url(../src/images/desktop/image-curiosity.jpg)',
        'fish' : 'url(../src/images/desktop/image-fisheye.jpg)',
        'above' : 'url(../src/images/desktop/image-from-above.jpg)',
        'grid' : 'url(../src/images/desktop/image-grid.jpg)',
        'night' : 'url(../src/images/desktop/image-night-arcade.jpg)',
        'pockect' : 'url(../src/images/desktop/image-pocket-borealis.jpg)',
        'soccer' : 'url(../src/images/desktop/image-soccer-team.jpg)',
        // 'linear' : 
        // '' : 'url(../src/images/desktop/image-hero.jpg)',
        // '' : 'url(../src/images/desktop/image-hero.jpg)',
      },
      backgroundPosition:{
        'c_top' : 'right top',
        'c_bottom' : 'center bottom',
      }
    },
  },
  plugins: [],
}
