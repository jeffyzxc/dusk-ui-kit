const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: false,
  theme: {
    boxShadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
      md: " 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
      lg: " 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
      xl: " 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, .25)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      outline: "0 0 0 3px rgba(66,153,225,0.5)",
      "active-t": "0 -2px 0 rgba(245, 245, 245, 1);",
      "active-r": "2px 0 0 rgba(245, 245, 245, 1);",
      "active-t-purple": "0 -2px 0 #3b218c",
      "active-r-purple": "2px 0 0 #3b218c;",
      marketing: "1px 1px 0px #D82E60;",
      "marketing-hover": "8px 8px 0px #D82E60;",
      none: "none",
    },
    borderRadius: {
      none: "0",
      sm: ".1875rem",
      default: ".375rem",
      lg: ".5625rem",
      full: "9999px",
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      gray: {
        "100": "#f5f5f5",
        "200": "#dddddd",
        "300": "#c5c5c5",
        "400": "#adadad",
        "500": "#959595",
        "600": "#7c7c7c",
        "700": "#646464",
        "800": "#4c4c4c",
        "900": "#343434",
      },
      red: {
        "100": "#e8a5b9",
        "200": "#e496ad",
        "300": "#e188a2",
        "400": "#dd7996",
        "500": "#d96a8a",
        "600": "#d95b80",
        "700": "#d94c75",
        "800": "#d83d6b",
        "900": "#d82e60",
      },
      orange: {
        "100": "#F3C0A8",
        "200": "#f1b69a",
        "300": "#efab8b",
        "400": "#eda17d",
        "500": "#eb966e",
        "600": "#ed8757",
        "700": "#ee7840",
        "800": "#f06829",
        "900": "#f15912",
      },
      yellow: {
        "100": "#f4e2bf",
        "200": "#f7dfb1",
        "300": "#f9dca3",
        "400": "#fcd894",
        "500": "#fed586",
        "600": "#fad48a",
        "700": "#f6d28e",
        "800": "#f1d191",
        "900": "#edcf95",
      },
      green: {
        "100": "#c1deb6",
        "200": "#b7d9aa",
        "300": "#add49e",
        "400": "#a2ce91",
        "500": "#98c985",
        "600": "#94c382",
        "700": "#90bd7f",
        "800": "#8cb77b",
        "900": "#88b178",
      },
      purple: {
        "100": "#bdb4d2",
        "200": "#b2a8cb",
        "300": "#aba0c9",
        "400": "#9d91c0",
        "500": "#9183b5",
        "600": "#7362a6",
        "700": "#624d9f",
        "800": "#523b97",
        "900": "#3b218c",
      },
      indigo: {
        "100": "#E1DAF6",
        "200": "#C1B1ED",
        "300": "#A087E3",
        "400": "#7F5ED9",
        "500": "#5E35CF",
        "600": "#4A28A9",
        "700": "#381E80",
        "800": "#261457",
        "900": "#140B2D",
      },
      blue: {
        "100": "#F9FDFF",
        "200": "#F8FBFF",
        "300": "#F6F9FE",
        "400": "#C9D9F8",
        "500": "#9DBAF2",
        "600": "#6F98EC",
        "700": "#4178E6",
        "800": "#1C5BD9",
        "900": "#1648AC",
      },
      gold: {
        "100": "#FDFBF2",
        "200": "#F5EEC6",
        "300": "#EEE09B",
        "400": "#E7D36F",
        "500": "#DFC543",
        "600": "#CDB123",
        "700": "#A18B1B",
        "800": "#766514",
        "900": "#4A400D",
      },
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
      xs: "0.75rem",
      sm: "0.875rem",
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
    spacing: {
      0: "0",
      1: "4px",
      2: "6px",
      3: "10px",
      4: "12px",
      5: "16px",
      6: "22px",
      8: "24px",
      10: "28px",
      12: "32px",
      16: "40px",
      20: "48px",
      24: "56px",
      32: "64px",
      40: "80px",
      48: "96px",
      56: "128px",
      64: "160px",
      72: "192px",
      96: "224px",
      128: "256px",
      225: "420px",
      256: "512px",
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        a: { color: theme("colors.purple.700") },
        "a:hover": { color: theme("colors.purple.500") },
        "abbr[title]": {
          textDecoration: "none",
        },
        "abbr[title]:hover": {
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
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
        html: { height: "100%" },
        p: { marginBottom: theme("spacing.4") },
        code: {
          color: theme("colors.gray.700"),
          fontFamily: theme("fontFamily.mono"),
        },
      });
    }),
    plugin(function({ addComponents, theme }) {
      // const screens = theme("screens", {});
      const gap = theme("spacing.3", {});
      // const doubleGap = theme("spacing.6", {});
      const template = {
        ".duk-scrim": {
          backgroundColor: "black",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          width: "100%",
          height: "100%",
        },
        ".duk-template": {
          display: "flex",
          "min-height": "100vh",
          "flex-direction": "column",
          width: "100%",
          "&__footer": {
            textAlign: "center",
            ".duk-navbar": {
              display: "block",
              fontSize: "inherit",
              "&__collapse": {
                display: "none",
              },
              ".duk-menu": {
                display: "block",
                ".duk-list": {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  "&__item": {
                    margin: `0 theme("spacing.2")`,
                  },
                },
              },
            },
            "@media (min-width: 640px)": {
              ".duk-navbar": {
                ".duk-menu": {
                  ".duk-list": {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    "&__item": {
                      margin: `0 theme("spacing.2")`,
                    },
                  },
                },
              },
            },
          },
          "&__content": {
            display: "flex",
            "flex-direction": "column",
            flex: 1,
          },
          "@media (min-width: 640px)": {
            "&__content": {
              "flex-direction": "row",
            },
          },
          "&__one-column": {
            "@media (min-width: 640px)": {
              ".duk-template__one-column__content__central": {
                width: "100%",
              },
            },
          },
          "&__two-column": {
            "@media (min-width: 640px)": {
              "&--5050": {
                ".duk-template__two-column__content": {
                  "&__west": {
                    width: "50%",
                  },
                  "&__east": {
                    width: "50%",
                  },
                },
              },
              "&--2080": {
                ".duk-template__two-column__content": {
                  "&__west": {
                    width: "20%",
                  },
                  "&__east": {
                    width: "80%",
                  },
                },
              },
              "&--8020": {
                ".duk-template__two-column__content": {
                  "&__west": {
                    width: "80%",
                  },
                  "&__east": {
                    width: "20%",
                  },
                },
              },
            },
            "&--fixed": {
              ".duk-template__column": {
                width: "100%",
              },
              ".duk-template__two-column__content": {
                "&__west": {
                  flex: "none",
                  order: "2 !important",
                },
                "&__east": {
                  flex: 1,
                  order: "1 !important",
                },
              },
              "@media (min-width: 640px)": {
                ".duk-template__two-column__content": {
                  "&__west": {
                    "max-width": "128px",
                    order: "1 !important",
                  },
                  "&__east": {
                    flex: "1",
                    order: "2 !important",
                  },
                },
              },
            },
          },
          "&__three-column": {
            "@media (min-width: 640px)": {
              "&--333333": {
                ".duk-template__three-column__content": {
                  "&__west": {
                    width: "33.333333%",
                  },
                  "&__central": {
                    width: "33.333333%",
                  },
                  "&__east": {
                    width: "33.333333%",
                  },
                },
              },
              "&--204040": {
                ".duk-template__three-column__content": {
                  "&__west": {
                    width: "20%",
                  },
                  "&__central": {
                    width: "40%",
                  },
                  "&__east": {
                    width: "40%",
                  },
                },
              },
              "&--404020": {
                ".duk-template__three-column__content": {
                  "&__west": {
                    width: "40%",
                  },
                  "&__central": {
                    width: "40%",
                  },
                  "&__east": {
                    width: "20%",
                  },
                },
              },
            },
          },
          "&--gutters": {
            ".duk-template__content": {
              padding: `0 ${gap}`,
            },
            ".duk-template__column": {
              margin: `0 ${gap}`,
            },
          },
          "&--gutters.duk-template__two-column--fixed": {
            ".duk-template__column": {
              margin: 0,
              "@media (min-width: 640px)": {
                margin: `0 ${gap}`,
              },
            },
          },
        },
      };

      const ripple = {
        ".ripple": {
          borderRadius: "50%",
          position: "absolute",
          transform: "scale(0)",
          animation: "rippleffect 0.6s",
          "&--brand": { backgroundColor: theme("colors.purple.100") },
          "&--cta": { backgroundColor: theme("colors.orange.100") },
          "&--info": { backgroundColor: theme("colors.purple.100") },
          "&--success": { backgroundColor: theme("colors.green.100") },
          "&--warning": { backgroundColor: theme("colors.yellow.100") },
          "&--danger": { backgroundColor: theme("colors.red.100") },
          "&--light": { backgroundColor: theme("colors.gray.300") },
          "&--dark": { backgroundColor: theme("colors.gray.700") },
          "&--black": { backgroundColor: theme("colors.gray.900") },
          "&--white": { backgroundColor: theme("colors.gray.100") },
        },
        "@keyframes rippleffect": {
          to: {
            transform: "scale(2.5)",
            opacity: "0",
          },
        },
      };

      addComponents([template, ripple]);
    }),
  ],
};
