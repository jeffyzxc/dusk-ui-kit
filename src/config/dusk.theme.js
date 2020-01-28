const white = '#ffffff'
const gray100 = '#f5f5f5'
const gray200 = '#dddddd'
const gray300 = '#c5c5c5'
const gray400 = '#adadad'
const gray500 = '#7c7c7c'
const gray600 = '#959595'
const gray700 = '#818181'
const gray800 = '#4c4c4c'
const gray900 = '#343434'
const black = '#000000'
const violet = '#7362a6'
const violetVariant = '#3b218c'
const indigo = '#9183b5'
const indigoVariant = '#523b97'
// const purple = '#6854a3'
const orange = '#eb966e'
const orangeVariant = '#f15912'
const red = '#d96a8a'
const redVariant = '#d82e60'
const pink = '#cf7284'
const yellow = '#edcf95'
const yellowVariant = '#fed586'
const green = '#98c985'
const greenVariant = '#88b178'
const teal = '#5f9a9a'
const cyan = '#c9c4de'
const primary = violet
const secondary = orange
const info = indigo
const success = green
const warning = yellow
const danger = red
const light = gray100
const dark = gray800

const fontSizeBase = '1rem'
const fontSizeLarge = '1.25rem'
const fontSizeSmall = '0.875rem'
const fontFamilyBase = "'Hind Siliguri' sans-serif"
const headingsColor = dark
const headingsH1FontSize = '2.5rem'
const headingsH2FontSize = '2rem'
const headingsH3FontSize = '1.75rem'
const headingsH4FontSize = '1.5rem'
const headingsH5FontSize = '1.25rem'
const headingsH6FontSize = '1rem'
const bodyBackground = light
const bodyColor = dark

module.exports = {
  colors: {
    white,
    gray100,
    gray200,
    gray300,
    gray400,
    gray500,
    gray600,
    gray700,
    gray800,
    gray900,
    black,
    violet,
    violetVariant,
    indigo,
    indigoVariant,
    // purple: '#6854a3'
    orange,
    orangeVariant,
    red,
    redVariant,
    pink,
    yellow,
    yellowVariant,
    green,
    greenVariant,
    teal,
    cyan,
    primary,
    secondary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
  },
  typography: {
    font: {
      family: {
        base: fontFamilyBase,
        sansSerif: fontFamilyBase,
      },
      headings: {
        color: headingsColor,
        font: {
          weight: 300,
        },
        h1: {
          font: {
            size: headingsH1FontSize,
          },
        },
        h2: {
          font: {
            size: headingsH2FontSize,
          },
        },
        h3: {
          font: {
            size: headingsH3FontSize,
          },
        },
        h4: {
          font: {
            size: headingsH4FontSize,
          },
        },
        h5: {
          font: {
            size: headingsH5FontSize,
          },
        },
        h6: {
          font: {
            size: headingsH6FontSize,
          },
        },
      },
      size: {
        base: fontSizeBase,
        large: fontSizeLarge,
        small: fontSizeSmall,
      },
      weight: {
        lighter: 'lighter',
        light: 300,
        normal: 400,
        bold: 500,
        bolder: 'bolder',
      },
    },
  },
  spacer: '1rem',
  body: {
    background: bodyBackground,
    color: bodyColor,
  },
  components: {
    border: {
      radius: '0.375rem',
    },
  },
  breadcrumb: {
    background: 'transparent',
    margin: {
      bottom: 0,
    },
    border: {
      radius: 0,
    },
  },
  card: {
    spacer: {
      x: '1rem',
      y: '0.9375rem',
    },
  },
  jumbotron: {
    background: 'transparent',
  },
  input: {
    padding: {
      y: {
        large: '1.5rem',
      },
    },
    focus: {
      boxShadow: 'none',
    },
  },
  nav: {
    link: {
      padding: {
        x: '0.5rem',
      },
    },
    divider: {
      get color() {
        return this.color.white
      },
      margin: {
        y: '0.5rem',
      },
    },
  },
  pagination: {
    active: {
      get color() {
        return this.colors.light
      },
      get background() {
        return this.colors.info
      },
      border: {
        get color() {
          return this.colors.info
        },
      },
    },
    get background() {
      return this.colors.dark
    },
    border: {
      color: 'transparent',
    },
    get color() {
      return this.colors.light
    },
    disabled: {
      get color() {
        return this.colors.gray600
      },
      get background() {
        return this.colors.white
      },
      border: {
        get color() {
          return this.colors.gray300
        },
      },
    },
    hover: {
      background: 'transparent',
      border: {
        color: 'transparent',
      },
      get color() {
        return this.colors.dark
      },
    },
    margin: {
      left: '1rem',
    },
    padding: {
      y: '.35rem',
      x: '.75rem',
    },
    large: {
      padding: {
        y: '.75rem',
        x: '1.5rem',
      },
    },
    small: {
      padding: {
        y: '.25rem',
        x: '.5rem',
      },
    },
  },
  navbar: {
    brand: {
      font: {
        size: '1rem',
      },
      padding: {
        y: 0,
      },
    },
    padding: {
      y: '1rem',
      x: '1rem',
    },
    nav: {
      link: {
        padding: {
          x: '.5rem',
        },
      },
    },
    toggler: {
      padding: {
        x: 0,
        y: 0,
      },
      font: {
        size: '1rem',
      },
    },
    dark: {
      get color() {
        return this.colors.white
      },
      get hoverColor() {
        return this.colors.white
      },
      get activeColor() {
        return this.colors.white
      },
      get disabledColor() {
        return this.colors.white
      },
      toggler: {
        border: {
          get color() {
            return this.colors.white
          },
        },
      },
    },
  },
  table: {
    border: {
      get color() {
        return this.colors.primary
      },
    },
  },
}
