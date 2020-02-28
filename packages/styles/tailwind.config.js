const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    borderRadius: {
      none: "0",
      sm: ".1875rem",
      default: ".375rem",
      lg: ".5625rem",
      full: "9999px"
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
        "900": "#343434"
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
        "900": "#d82e60"
      },
      orange: {
        "100": "#bdb4d2",
        "200": "#f1b69a",
        "300": "#efab8b",
        "400": "#eda17d",
        "500": "#eb966e",
        "600": "#ed8757",
        "700": "#ee7840",
        "800": "#f06829",
        "900": "#f15912"
      },
      yellow: {
        "100": "#c1deb6",
        "200": "#f7dfb1",
        "300": "#f9dca3",
        "400": "#fcd894",
        "500": "#fed586",
        "600": "#fad48a",
        "700": "#f6d28e",
        "800": "#f1d191",
        "900": "#edcf95"
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
        "900": "#88b178"
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
        "900": "#3b218c"
      }
    },
    fontFamily: {
      sans: [
        "Hind Siliguri",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
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
      "6xl": "4rem"
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
      black: "900"
    },
    spacing: {
      1: "4px",
      2: "6px",
      3: "10px",
      4: "12px",
      5: "16px",
      6: "20px",
      8: "24px",
      10: "24px",
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
      128: "256"
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        a: { color: theme("colors.purple.700") },
        "a:hover": { color: theme("colors.purple.500") },
        body: { lineHeight: "1.5", letterSpacing: "0" },
        "button:focus": { outline: "none" },
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
        p: { marginBottom: theme("spacing.4") },
        code: { fontFamily: theme("fontFamily.mono") }
      });
    })
    // buttonPlugin,
    // cardPlugin,
    // plugin(function({ addComponents, theme }) {
    //   const screens = theme("screens", {});
    //   const list = {
    //     ".duk-list": {
    //       listStyle: "none",
    //       "&--numbered": {
    //         listStyle: "decimal"
    //       },
    //       "&--bulleted": {
    //         listStyle: "disc"
    //       }
    //     }
    //   };
    //
    //   const logo = {
    //     ".duk-logo": {
    //       display: "inline-block",
    //       "&--brand": {
    //         color: theme("colors.purple.500"),
    //         fill: "currentColor"
    //       },
    //       "&--dark": {
    //         color: theme("colors.gray.800"),
    //         fill: "currentColor"
    //       },
    //       "&--light": {
    //         color: theme("colors.gray.200"),
    //         fill: "currentColor"
    //       },
    //       "&--black": {
    //         color: theme("colors.black"),
    //         fill: "currentColor"
    //       },
    //       "&--white": {
    //         color: theme("colors.white"),
    //         fill: "currentColor"
    //       }
    //     }
    //   };
    //
    //   const menu = {
    //     ".duk-menu": {
    //       "&--vertical": {
    //         ".duk-list--menu": {
    //           display: "flex",
    //           flexDirection: "column",
    //           ".duk-list-item": {
    //             "a, div": {
    //               display: "block",
    //               padding: `0 theme("spacing.3") 0 theme("spacing.3")`,
    //               textAlign: "left"
    //             }
    //           }
    //         }
    //       },
    //       "&--horizontal": {
    //         ".duk-list--menu": {
    //           display: "flex",
    //           flexDirection: "row",
    //           ".duk-list-item": {
    //             "a, div": {
    //               display: "block",
    //               padding: `theme("spacing.3")`,
    //               textAlign: "center"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   };
    //
    //   const navbar = {
    //     ".duk-navbar": {
    //       alignItems: "center",
    //       display: "flex",
    //       fontSize: theme("fontSize.lg"),
    //       flexWrap: "wrap",
    //       justifyContent: "space-between",
    //       padding: `theme("spacing.8") theme("spacing.6")`,
    //       width: "100vw",
    //       "&__collapse": {
    //         display: "block",
    //         "@media (min-width: 1024px)": {
    //           display: "none"
    //         }
    //       },
    //       "&__logo": {
    //         display: "inline-block",
    //         alignSelf: "center",
    //         padding: 0
    //       },
    //       "&__menu": {
    //         flexGrow: 1,
    //         width: "100%",
    //         "&--hidden": {
    //           display: "none"
    //         },
    //         ".duk-list--menu": {
    //           flexDirection: "column",
    //           marginTop: theme("spacing.5")
    //         },
    //         ".duk-list__item": {
    //           a: {
    //             color: theme("colors.white")
    //           },
    //           "a:hover": {
    //             color: theme("colors.white")
    //           },
    //           padding: `theme("spacing.2") 0`
    //         },
    //         "@media (min-width: 1024px)": {
    //           alignItems: "center",
    //           display: "flex",
    //           flexShrink: 0,
    //           width: "auto",
    //           ".duk-list--menu": {
    //             flexDirection: "row",
    //             marginTop: "0",
    //             flex: "1 1 0%",
    //             justifyContent: "flex-end"
    //           },
    //           ".duk-list__item": {
    //             padding: `0 theme("spacing.2")`
    //           }
    //         }
    //       },
    //       "&--brand": {
    //         backgroundColor: theme("colors.purple.200"),
    //         color: theme("colors.white")
    //       },
    //       "&--cta": {
    //         backgroundColor: theme("colors.orange.200"),
    //         color: theme("colors.white")
    //       },
    //       "&--info": {
    //         backgroundColor: theme("colors.purple.200"),
    //         color: theme("colors.white")
    //       },
    //       "&--success": {
    //         backgroundColor: theme("colors.green.200"),
    //         color: theme("colors.white")
    //       },
    //       "&--warning": {
    //         backgroundColor: theme("colors.yellow.200"),
    //         color: theme("colors.white")
    //       },
    //       "&--danger": {
    //         backgroundColor: theme("colors.red.200"),
    //         color: theme("colors.white")
    //       },
    //       "&--light": {
    //         backgroundColor: theme("colors.gray.200"),
    //         color: theme("colors.gray.800"),
    //         ".duk-navbar__menu": {
    //           ".duk-list__item": {
    //             a: {
    //               color: theme("colors.gray.800")
    //             },
    //             "a:hover": {
    //               color: theme("colors.gray.800")
    //             }
    //           }
    //         }
    //       },
    //       "&--dark": {
    //         backgroundColor: theme("colors.gray.800"),
    //         color: theme("colors.gray.200"),
    //         ".duk-navbar__menu": {
    //           ".duk-list__item": {
    //             a: {
    //               color: theme("colors.gray.200")
    //             },
    //             "a:hover": {
    //               color: theme("colors.gray.200")
    //             }
    //           }
    //         }
    //       },
    //       "&--black": {
    //         backgroundColor: theme("colors.black"),
    //         color: theme("colors.white")
    //       },
    //       "&--white": {
    //         backgroundColor: theme("colors.white"),
    //         borderColor: theme("colors.white"),
    //         color: theme("colors.black"),
    //         ".duk-navbar__menu": {
    //           ".duk-list__item": {
    //             a: {
    //               color: theme("colors.black")
    //             },
    //             "a:hover": {
    //               color: theme("colors.black")
    //             }
    //           }
    //         }
    //       }
    //     }
    //   };
    //
    //   const template = {
    //     ".duk-template": {
    //       "&__footer": {
    //         ".duk-navbar": {
    //           "&__collapse": {
    //             display: "none"
    //           },
    //           ".duk-menu": {
    //             display: "block",
    //             ".duk-list": {
    //               display: "flex",
    //               flexDirection: "row",
    //               "&__item": {
    //                 padding: `0 theme("spacing.2")`
    //               }
    //             }
    //           }
    //         }
    //       },
    //       "&__column": {
    //         padding: `0 theme("spacing.3")`,
    //         "&:first-of-type": {
    //           paddingLeft: theme("spacing.6")
    //         },
    //         "&:last-of-type": {
    //           paddingRight: theme("spacing.6")
    //         }
    //       },
    //       "&__one-column": {
    //         "&__content": {
    //           height: "100vh"
    //         }
    //       },
    //       "&__two-column": {
    //         "&__content": {
    //           height: "100vh"
    //         },
    //         "@media (min-width: 640px)": {
    //           "&__content": {
    //             display: "flex"
    //           },
    //           "&--5050": {
    //             ".duk-template__two-column__content": {
    //               "&__west": {
    //                 width: "50%"
    //               },
    //               "&__east": {
    //                 width: "50%"
    //               }
    //             }
    //           },
    //           "&--2080": {
    //             ".duk-template__two-column__content": {
    //               "&__west": {
    //                 width: "20%"
    //               },
    //               "&__east": {
    //                 width: "80%"
    //               }
    //             }
    //           },
    //           "&--8020": {
    //             ".duk-template__two-column__content": {
    //               "&__west": {
    //                 width: "80%"
    //               },
    //               "&__east": {
    //                 width: "20%"
    //               }
    //             }
    //           }
    //         }
    //       },
    //       "&__three-column": {
    //         "&__content": {
    //           display: "flex",
    //           height: "100vh"
    //         },
    //         "&--333333": {
    //           ".duk-template__three-column__content": {
    //             "&__west": {
    //               width: "33.333333%"
    //             },
    //             "&__central": {
    //               width: "33.333333%"
    //             },
    //             "&__east": {
    //               width: "33.333333%"
    //             }
    //           }
    //         },
    //         "&--204040": {
    //           ".duk-template__three-column__content": {
    //             "&__west": {
    //               width: "20%"
    //             },
    //             "&__central": {
    //               width: "40%"
    //             },
    //             "&__east": {
    //               width: "40%"
    //             }
    //           }
    //         },
    //         "&--404020": {
    //           ".duk-template__three-column__content": {
    //             "&__west": {
    //               width: "40%"
    //             },
    //             "&__central": {
    //               width: "40%"
    //             },
    //             "&__east": {
    //               width: "20%"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   };
    //
    //   addComponents([list, logo, menu, navbar, template]);
    // })
  ]
};
