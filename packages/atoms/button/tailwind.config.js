const plugin = require("tailwindcss/plugin");
export default plugin(function({ addComponents, theme }) {
  const button = {
    ".duk-button": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: theme("borderRadius.default"),
      fontSize: theme("fontSize.sm"),
      padding: `theme("spacing.2") theme("spacing.4")`,
      "&__group": {
        alignItems: "center"
      },
      "&--brand": {
        backgroundColor: theme("colors.purple.600"),
        borderColor: theme("colors.purple.600"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.purple.600"),
          color: theme("colors.purple.600")
        }
      },
      "&--cta": {
        backgroundColor: theme("colors.orange.600"),
        borderColor: theme("colors.orange.600"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.orange.600"),
          color: theme("colors.orange.600")
        }
      },
      "&--info": {
        backgroundColor: theme("colors.purple.600"),
        borderColor: theme("colors.purple.600"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.purple.600"),
          color: theme("colors.purple.600")
        }
      },
      "&--success": {
        backgroundColor: theme("colors.green.600"),
        borderColor: theme("colors.green.600"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.green.600"),
          color: theme("colors.green.600")
        }
      },
      "&--warning": {
        backgroundColor: theme("colors.yellow.600"),
        borderColor: theme("colors.yellow.600"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.yellow.600"),
          color: theme("colors.yellow.600")
        }
      },
      "&--danger": {
        backgroundColor: theme("colors.red.600"),
        borderColor: theme("colors.red.600"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.red.600"),
          color: theme("colors.red.600")
        }
      },
      "&--light": {
        backgroundColor: theme("colors.gray.200"),
        borderColor: theme("colors.gray.200"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.gray.200"),
          color: theme("colors.gray.200")
        }
      },
      "&--dark": {
        backgroundColor: theme("colors.gray.900"),
        borderColor: theme("colors.gray.900"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.gray.900"),
          color: theme("colors.gray.900")
        }
      },
      "&--black": {
        backgroundColor: theme("colors.black"),
        borderColor: theme("colors.black"),
        color: theme("colors.white"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.black"),
          color: theme("colors.black")
        }
      },
      "&--white": {
        backgroundColor: theme("colors.white"),
        borderColor: theme("colors.white"),
        color: theme("colors.black"),
        "&.duk-button--outline": {
          backgroundColor: theme("colors.transparent"),
          borderColor: theme("colors.white"),
          color: theme("colors.white")
        }
      },
      "&--large": {
        fontSize: theme("fontSize.lg")
      },
      "&--small": {
        fontSize: theme("fontSize.sm")
      },
      "&[disabled]": {
        opacity: theme("opacity.75"),
        cursor: "not-allowed"
      }
    }
  };
  addComponents([button]);
});
