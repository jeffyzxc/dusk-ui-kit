const plugin = require("tailwindcss/plugin");
export default plugin(function({ addComponents, theme }) {
  const card = {
    ".duk-card": {
      borderStyle: "solid",
      borderRadius: theme("borderRadius.default"),
      boxShadow: theme("boxShadow.default"),
      "&__actions": {
        padding: `theme("spacing.2") theme("spacing.4")`
      },
      "&__content": {
        padding: theme("spacing.4")
      },
      "&__title": {
        padding: theme("spacing.4")
      },
      "&--brand": {
        backgroundColor: theme("colors.purple.200"),
        borderColor: theme("colors.purple.200"),
        color: theme("colors.white")
      },
      "&--cta": {
        backgroundColor: theme("colors.orange.200"),
        borderColor: theme("colors.orange.200"),
        color: theme("colors.white")
      },
      "&--info": {
        backgroundColor: theme("colors.purple.200"),
        borderColor: theme("colors.purple.200"),
        color: theme("colors.white")
      },
      "&--success": {
        backgroundColor: theme("colors.green.200"),
        borderColor: theme("colors.green.200"),
        color: theme("colors.white")
      },
      "&--warning": {
        backgroundColor: theme("colors.yellow.200"),
        borderColor: theme("colors.yellow.200"),
        color: theme("colors.white")
      },
      "&--danger": {
        backgroundColor: theme("colors.red.200"),
        borderColor: theme("colors.red.200"),
        color: theme("colors.white")
      },
      "&--light": {
        backgroundColor: theme("colors.gray.200"),
        borderColor: theme("colors.gray.200"),
        color: theme("colors.white")
      },
      "&--dark": {
        backgroundColor: theme("colors.gray.800"),
        borderColor: theme("colors.gray.800"),
        color: theme("colors.white")
      },
      "&--black": {
        backgroundColor: theme("colors.black"),
        borderColor: theme("colors.black"),
        color: theme("colors.white")
      },
      "&--white": {
        backgroundColor: theme("colors.white"),
        borderColor: theme("colors.white"),
        color: theme("colors.black")
      }
    }
  };
  addComponents([card]);
});
