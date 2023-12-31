/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", './src/component/profile.jsx'],
  theme: {
    extend: {
        colors: {
            primary: '#1D4ED8',
        },
        fontFamily: {
            mulish:['Mulish']
        },
        spacing:{
            '75':'20.5rem',
            '100':'29.6rem',
            '1000':'80rem',
        },
        borderRadius:{
            'xlg':'1.5rem',
            'mlg':'1rem'
        },
        textUnderlineOffset: {
            26: '26px',
        }
    }
},
 plugins: [
  require("daisyui"),
  require('flowbite/plugin')
],
 daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
},
variants: {
    fill: ['hover', 'focus'], 
  },
}


