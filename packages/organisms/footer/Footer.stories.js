import { withKnobs, select, object } from "@storybook/addon-knobs";
import { tones, variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

const socialMediaConfig = [
  {
    title: "CoinMarketCap",
    icon: "coin-market-cap",
    url: "https://coinmarketcap.com/currencies/dusk-network/",
  },
  {
    title: "YouTube",
    icon: "youtube",
    url: "https://www.youtube.com/c/DuskNetwork",
  },
  {
    title: "Twitter",
    icon: "twitter",
    url: "https://twitter.com/duskfoundation",
  },
  {
    title: "LinkedIn",
    icon: "linked-in",
    url: "https://www.linkedin.com/company/dusknetwork/",
  },
  {
    title: "Telegram",
    icon: "telegram",
    url: "https://t.me/DuskNetwork",
  },
  {
    title: "Github",
    icon: "github",
    url: "https://github.com/dusk-network",
  },
];

export default {
  title: "Components/Organisms/Footer",
  parameters: {
    notes: readme,
    layout: "centered",
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    tone: select("Tone", tones.ORGANISM.FOOTER, tones.ORGANISM.FOOTER.APP),
    variant: select("Variant", variants.ORGANISM.FOOTER, variants.ORGANISM.FOOTER.APP),
    social: object("Social Media Config", socialMediaConfig),
  },
});
