const plugin = require("tailwindcss/plugin");
const palette = require("./config/dusk/palette.cjs");
const space = require("./config/dusk/space.cjs");
const typography = require("./config/dusk/typography.cjs");
const fontFamily = require("./config/dusk/font-family.cjs");
const fontSize = require("./config/dusk/font-size.cjs");
const colorVariable = require("@mertasan/tailwindcss-variables/colorVariable");

module.exports = {
  content: ["./src/**/*.{html,svelte}"],
  safelist: ["body", "main", "#dusk"],
  darkMode: "class",
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      black: colorVariable("var(--colors-black)"),
      white: colorVariable("var(--colors-white)"),
      gray: {
        100: colorVariable("var(--colors-gray-100)"),
        200: colorVariable("var(--colors-gray-200)"),
        300: colorVariable("var(--colors-gray-300)"),
        400: colorVariable("var(--colors-gray-400)"),
        500: colorVariable("var(--colors-gray-500)"),
        600: colorVariable("var(--colors-gray-600)"),
        700: colorVariable("var(--colors-gray-700)"),
        800: colorVariable("var(--colors-gray-800)"),
        900: colorVariable("var(--colors-gray-900)"),
      },
      red: {
        100: colorVariable("var(--colors-red-100)"),
        200: colorVariable("var(--colors-red-200)"),
        300: colorVariable("var(--colors-red-300)"),
        400: colorVariable("var(--colors-red-400)"),
        500: colorVariable("var(--colors-red-500)"),
        600: colorVariable("var(--colors-red-600)"),
        700: colorVariable("var(--colors-red-700)"),
        800: colorVariable("var(--colors-red-800)"),
        900: colorVariable("var(--colors-red-900)"),
      },
      orange: {
        100: colorVariable("var(--colors-orange-100)"),
        200: colorVariable("var(--colors-orange-200)"),
        300: colorVariable("var(--colors-orange-300)"),
        400: colorVariable("var(--colors-orange-400)"),
        500: colorVariable("var(--colors-orange-500)"),
        600: colorVariable("var(--colors-orange-600)"),
        700: colorVariable("var(--colors-orange-700)"),
        800: colorVariable("var(--colors-orange-800)"),
        900: colorVariable("var(--colors-orange-900)"),
      },
      yellow: {
        100: colorVariable("var(--colors-yellow-100)"),
        200: colorVariable("var(--colors-yellow-200)"),
        300: colorVariable("var(--colors-yellow-300)"),
        400: colorVariable("var(--colors-yellow-400)"),
        500: colorVariable("var(--colors-yellow-500)"),
        600: colorVariable("var(--colors-yellow-600)"),
        700: colorVariable("var(--colors-yellow-700)"),
        800: colorVariable("var(--colors-yellow-800)"),
        900: colorVariable("var(--colors-yellow-900)"),
      },
      green: {
        100: colorVariable("var(--colors-green-100)"),
        200: colorVariable("var(--colors-green-200)"),
        300: colorVariable("var(--colors-green-300)"),
        400: colorVariable("var(--colors-green-400)"),
        500: colorVariable("var(--colors-green-500)"),
        600: colorVariable("var(--colors-green-600)"),
        700: colorVariable("var(--colors-green-700)"),
        800: colorVariable("var(--colors-green-800)"),
        900: colorVariable("var(--colors-green-900)"),
      },
      purple: {
        100: colorVariable("var(--colors-purple-100)"),
        200: colorVariable("var(--colors-purple-200)"),
        300: colorVariable("var(--colors-purple-300)"),
        400: colorVariable("var(--colors-purple-400)"),
        500: colorVariable("var(--colors-purple-500)"),
        600: colorVariable("var(--colors-purple-600)"),
        700: colorVariable("var(--colors-purple-700)"),
        800: colorVariable("var(--colors-purple-800)"),
        900: colorVariable("var(--colors-purple-900)"),
      },
      indigo: {
        100: colorVariable("var(--colors-indigo-100)"),
        200: colorVariable("var(--colors-indigo-200)"),
        300: colorVariable("var(--colors-indigo-300)"),
        400: colorVariable("var(--colors-indigo-400)"),
        500: colorVariable("var(--colors-indigo-500)"),
        600: colorVariable("var(--colors-indigo-600)"),
        700: colorVariable("var(--colors-indigo-700)"),
        800: colorVariable("var(--colors-indigo-800)"),
        900: colorVariable("var(--colors-indigo-900)"),
      },
      blue: {
        100: colorVariable("var(--colors-blue-100)"),
        200: colorVariable("var(--colors-blue-200)"),
        300: colorVariable("var(--colors-blue-300)"),
        400: colorVariable("var(--colors-blue-400)"),
        500: colorVariable("var(--colors-blue-500)"),
        600: colorVariable("var(--colors-blue-600)"),
        700: colorVariable("var(--colors-blue-700)"),
        800: colorVariable("var(--colors-blue-800)"),
        900: colorVariable("var(--colors-blue-900)"),
      },
      gold: {
        100: colorVariable("var(--colors-gold-100)"),
        200: colorVariable("var(--colors-gold-200)"),
        300: colorVariable("var(--colors-gold-300)"),
        400: colorVariable("var(--colors-gold-400)"),
        500: colorVariable("var(--colors-gold-500)"),
        600: colorVariable("var(--colors-gold-600)"),
        700: colorVariable("var(--colors-gold-700)"),
        800: colorVariable("var(--colors-gold-800)"),
        900: colorVariable("var(--colors-gold-900)"),
      },
    },
    spacing: {
      px: "var(--spacing-px)",
      0: "var(--spacing-0)",
      1: "var(--spacing-1)",
      2: "var(--spacing-2)",
      3: "var(--spacing-3)",
      4: "var(--spacing-4)",
      5: "var(--spacing-5)",
      6: "var(--spacing-6)",
      8: "var(--spacing-8)",
      10: "var(--spacing-10)",
      12: "var(--spacing-12)",
      16: "var(--spacing-16)",
      20: "var(--spacing-20)",
      24: "var(--spacing-24)",
      32: "var(--spacing-32)",
      40: "var(--spacing-40)",
      48: "var(--spacing-48)",
      56: "var(--spacing-56)",
      64: "var(--spacing-64)",
      72: "var(--spacing-72)",
      96: "var(--spacing-96)",
      128: "var(--spacing-128)",
      225: "var(--spacing-225)",
      256: "var(--spacing-256)",
    },
    extend: {
      boxShadow: {
        "cta-list": "1px 1px 0px var(--colors-red-900);",
        "card-hover": "1px 1px 0px var(--colors-red-900);",
        toggle: "1px 1px 0px var(--colors-red-900);",
        "toggle-hover": "4px 4px 0px var(--colors-red-900);",
        "drop-down": "1px 1px 0px var(--colors-red-900);",
        "button-brand": "1px 1px 0px var(--colors-indigo-200);",
        "button-brand-hover": "4px 4px 0px var(--colors-indigo-200);",
        "button-cta": "1px 1px 0px var(--colors-gold-600);",
        "button-cta-hover": "4px 4px 0px var(--colors-gold-600);",
        "button-info": "1px 1px 0px var(--colors-blue-200);",
        "button-info-hover": "4px 4px 0px var(--colors-blue-200);",
        "button-success": "1px 1px 0px var(--colors-green-100);",
        "button-success-hover": "4px 4px 0px var(--colors-green-100);",
        "button-warning": "1px 1px 0px var(--colors-gold-400);",
        "button-warning-hover": "4px 4px 0px var(--colors-gold-400);",
        "button-danger": "1px 1px 0px var(--colors-red-200);",
        "button-danger-hover": "4px 4px 0px var(--colors-red-200);",
        none: "none",
        card: "0px 3px 6px rgba(0, 0, 0, .161)",
        switch: "0px 3px 6px rgba(0, 0, 0, .161)",
        table: "0px 3px 6px rgba(0, 0, 0, .161)",
        alert: "0px 3px 6px rgba(0, 0, 0, .161)",
      },
      borderRadius: {
        none: "0",
        xl: "var(--spacing-6)",
        full: "9999px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--spacing-1)",
          sm: "var(--spacing-12)",
          lg: "var(--spacing-32)",
          xl: "var(--spacing-40)",
          "2xl": "var(--spacing-48)",
        },
      },
      cursor: {
        "row-resize": "row-resize	",
        copy: "copy",
      },
      fontFamily,
      fontSize: {
        xs: "var(--fontsize-xs)",
        sm: "var(--fontsize-sm)",
        base: "var(--fontsize-base)",
        lg: "var(--fontsize-lg)",
        xl: "var(--fontsize-xl)",
        "2xl": "var(--fontsize-2xl)",
        "3xl": "var(--fontsize-3xl)",
        "4xl": "var(--fontsize-4xl)",
        "5xl": "var(--fontsize-5xl)",
        "6xl": "var(--fontsize-6xl)",
        "7xl": "var(--fontsize-7xl)",
        "8xl": "var(--fontsize-8xl)",
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0,1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
      rotate: {
        "-360": "360deg",
        "-270": "270deg",
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        0: "0",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        270: "270deg",
        360: "360deg",
      },
      screens: {
        xs: "375px",
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      typography,
    },
    variables: {
      DEFAULT: {
        colors: palette,
        spacing: space,
        fontSize,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@mertasan/tailwindcss-variables")({
      colorVariables: true,
    }),
    plugin(function ({ addBase, theme }) {
      addBase({
        "abbr[title]": {
          textDecoration: "none",
        },
        "abbr[title]:hover": {
          cursor: "help",
          textDecoration: `underline dotted theme("colors.purple.500")`,
        },
        "acronym[title]": {
          textDecoration: "none",
        },
        "acronym[title]:hover": {
          cursor: "help",
          textDecoration: `underline dotted theme("colors.purple.500")`,
        },
        body: {
          color: theme("colors.gray.900"),
          height: "100%",
          lineHeight: "1.5",
          letterSpacing: "0",
        },
        "button:focus": { outline: "none" },
        html: { height: "100%" },
        svg: {
          width: "100%",
          height: "auto",
          pointerEvents: "none",
        },
        form: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
        },
      });
    }),
  ],
};
