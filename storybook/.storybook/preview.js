import "@dusk-network/styles/tailwind.css";
import "../stories/pages/wallet/wallet-homepage/styles.css";
import "../stories/pages/wallet/wallet-create-options/styles.css";
import "../stories/pages/wallet/wallet-create-seed/styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: "html",
    stylePreview: true,
  },
};
