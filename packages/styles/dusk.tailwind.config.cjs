const plugin = require("tailwindcss/plugin");
module.exports = {
  content: {
    enabled: true,
    content: ["./src/**/*.{html,svelte}"],
    options: {
      safelist: ["body", "main", "#dusk"],
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        marketing: "1px 1px 0px #D82E60;",
        "marketing-hover": "4px 4px 0px #D82E60;",
        none: "none",
        card: "0px 3px 6px rgba(0, 0, 0, .161)",
        switch: "0px 3px 6px rgba(0, 0, 0, .161)",
        table: "0px 3px 6px rgba(0, 0, 0, .161)",
        alert: "0px 3px 6px rgba(0, 0, 0, .161)",
      },
      borderRadius: {
        none: "0",
        xl: "1.375rem",
        full: "9999px",
      },
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        gray: {
          100: "#f5f5f5",
          200: "#dddddd",
          300: "#c5c5c5",
          400: "#adadad",
          500: "#959595",
          600: "#7c7c7c",
          700: "#646464",
          800: "#4c4c4c",
          900: "#343434",
        },
        red: {
          100: "#e8a5b9",
          200: "#e496ad",
          300: "#e188a2",
          400: "#dd7996",
          500: "#d96a8a",
          600: "#d95b80",
          700: "#d94c75",
          800: "#d83d6b",
          900: "#d82e60",
        },
        orange: {
          100: "#F3C0A8",
          200: "#f1b69a",
          300: "#efab8b",
          400: "#eda17d",
          500: "#eb966e",
          600: "#ed8757",
          700: "#ee7840",
          800: "#f06829",
          900: "#f15912",
        },
        yellow: {
          100: "#f4e2bf",
          200: "#f7dfb1",
          300: "#f9dca3",
          400: "#fcd894",
          500: "#fed586",
          600: "#fad48a",
          700: "#f6d28e",
          800: "#f1d191",
          900: "#edcf95",
        },
        green: {
          100: "#c1deb6",
          200: "#b7d9aa",
          300: "#add49e",
          400: "#a2ce91",
          500: "#98c985",
          600: "#94c382",
          700: "#90bd7f",
          800: "#8cb77b",
          900: "#88b178",
        },
        purple: {
          100: "#bdb4d2",
          200: "#b2a8cb",
          300: "#aba0c9",
          400: "#9d91c0",
          500: "#9183b5",
          600: "#7362a6",
          700: "#624d9f",
          800: "#523b97",
          900: "#3b218c",
        },
        indigo: {
          100: "#E1DAF6",
          200: "#C1B1ED",
          300: "#A087E3",
          400: "#7F5ED9",
          500: "#5E35CF",
          600: "#4A28A9",
          700: "#381E80",
          800: "#261457",
          900: "#140B2D",
        },
        blue: {
          100: "#F9FDFF",
          200: "#F8FBFF",
          300: "#F6F9FE",
          400: "#C9D9F8",
          500: "#9DBAF2",
          600: "#6F98EC",
          700: "#4178E6",
          800: "#1C5BD9",
          900: "#1648AC",
        },
        gold: {
          100: "#FDFBF2",
          200: "#F5EEC6",
          300: "#EEE09B",
          400: "#E7D36F",
          500: "#DFC543",
          600: "#CDB123",
          700: "#A18B1B",
          800: "#766514",
          900: "#4A400D",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      cursor: {
        "row-resize": "row-resize	",
        copy: "copy",
      },
      fontFamily: {
        sans: [
          "Hind Siliguri",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "'Helvetica Neue'",
          "Arial",
          "'Noto Sans'",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
        serif: ["Georgia", "Cambria", "'Times New Roman'", "Times", "serif"],
        mono: ["Menlo", "Monaco", "Consolas", "'Liberation Mono'", "'Courier New'", "monospace"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
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
        '24': 'repeat(24, minmax(0,1fr))'
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24'
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24'
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24'
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
      spacing: {
        0: "0",
        1: ".25rem", // 4px
        2: ".375rem", // 6px
        3: ".5rem", // 8px
        4: ".625rem", // 12px
        5: "1rem", // 16px (base)
        6: "1.375rem", // 22px
        8: "1.5rem", // 24px
        10: "1.75rem", // 28px
        12: "2rem", // 32px
        16: "2.5rem", // 40px
        20: "3rem", // 48px
        24: "3.5rem", // 56px
        32: "4rem", // 64px
        40: "5rem", // 80px
        48: "6rem", // 96px
        56: "8rem", // 128px
        64: "10rem", // 160px
        72: "12rem", // 192px
        96: "14rem", // 224px
        128: "16rem", // 256px
        225: "26.25rem", // 420px
        256: "32rem", // 512px
      },
      animation: {
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
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
