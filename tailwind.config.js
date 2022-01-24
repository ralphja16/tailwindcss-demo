module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['HCo Gotham', 'sans-serif']
    },
    colors: {
      'main-purple': '#66c',
      'main-purple-dark': '#5b5bb7',
      'main-blue-mid': '#d4e0fa',
      'main-blue-light': '#eaf0ff',
      'main-blue': '#000050',
      'main-red': '#fe706e',
      'main-orange': '#f93',
      'main-orange-dark': '#e68a06',
      'main-gray-light': '#f2f6f',
      'main-green': '#29be55',
      'main-input': '#f2f6f9',
      'white': '#fff',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'moveup': {
          '0%': {  transform: 'translate3d(0, 0, 0)', opacity: 1 },
          '100%': { transform: 'translate3d(0, -15px, 0)', opacity: 1 }
        },
        'movedown': {
          '0%': { transform: 'translate3d(0, -15px, 0)', opacity: 1},
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'moveup': 'moveup .25s both',
        'movedown': 'movedown .25s both',
      }
    },
  },
  plugins: [],
  corePlugins: [
    "preflight",
    "animation",
    "boxSizing",
    "margin",
    "padding",
    "width",
    "height",
    "container",
    "alignContent",
    "alignItems",
    "backgroundColor",
    "borderRadius",
    "borderWidth",
    "borderColor",
    "display",
    "flex",
    "flexDirection",
    "flexGrow",
    "fontSize",
    "fontWeight",
    "gap",
    "gridColumn",
    "gridRow",
    "gridTemplateRows",
    "gridTemplateColumns",
    "justifyContent",
    "justifyItems",
    "inset",
    "lineHeight",
    "space",
    "zIndex",
    "fontFamily",
    "maxWidth",
    "outlineStyle",
    "overflow",
    "position",
    "textColor",
    "textAlign",
  ]
}



