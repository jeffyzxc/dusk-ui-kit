// import { withKnobs, select, object } from "@storybook/addon-knobs";
// import { variants, types } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// //TODO Export this from the package for default social config?
// const socialMediaConfig = [
//   {
//     title: "CoinMarketCap",
//     icon: "coin-market-cap",
//     url: "https://coinmarketcap.com/currencies/dusk-network/",
//   },
//   {
//     title: "YouTube",
//     icon: "youtube",
//     url: "https://www.youtube.com/c/DuskNetwork",
//   },
//   {
//     title: "Twitter",
//     icon: "twitter",
//     url: "https://twitter.com/duskfoundation",
//   },
//   {
//     title: "LinkedIn",
//     icon: "linked-in",
//     url: "https://www.linkedin.com/company/dusknetwork/",
//   },
//   {
//     title: "Telegram",
//     icon: "telegram",
//     url: "https://t.me/DuskNetwork",
//   },
//   {
//     title: "Github",
//     icon: "github",
//     url: "https://github.com/dusk-network",
//   },
// ];

// //TODO Eventually this will come from strapi, probably a shared endpoint...
// // The function for fetching this data could be exported, requiring a URL and Apollo client for input.
// const categoryConfig = [
//   {
//     title: "Blockchain",
//     links: [
//       {
//         title: "Technology Explained",
//         url: "https://dusk.network/pages/network",
//       },
//       {
//         title: "Roadmap",
//         url: "https://dusk.network/pages/roadmap",
//       },
//       {
//         title: "Use Cases",
//         url: "https://dusk.network/pages/roadmap",
//       },
//       {
//         title: "Staking",
//         url: "https://staking.dusk.network",
//       },
//     ],
//   },
//   {
//     title: "Developers",
//     links: [
//       {
//         title: "Whitepaper",
//         url: "https://dusk.network/uploads/dusk-whitepaperv2.pdf",
//       },
//       {
//         title: "Github",
//         url: "https://github.com/dusk-network",
//       },
//       {
//         title: "Resources",
//         url: "https://dusk.network/pages/resources",
//       },
//       {
//         title: "PLONK Proving System",
//         url: "https://crates.io/crates/dusk-plonk",
//       },
//     ],
//   },
//   {
//     title: "Media",
//     links: [
//       {
//         title: "Blog",
//         url: "https://dusk.network/pages/all-posts",
//       },
//       {
//         title: "News Room",
//         url: "https://dusknetwork.pr.co/",
//       },
//       {
//         title: "Press Contact",
//         url: "mailto:press@dusk.network",
//       },
//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       {
//         title: "Team",
//         url: "https://dusk.network/pages/team",
//       },
//       {
//         title: "Careers",
//         url: "https://dusk.network/pages/jobs",
//       },
//       {
//         title: "FAQ",
//         url: "https://dusk.network/pages/faq",
//       },
//     ],
//   },
// ];

// export default {
//   title: "Components/Organisms/Footer",
//   parameters: {
//     notes: readme,
//     layout: "centered",
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     type: select("Type", types.ORGANISM.FOOTER, types.ORGANISM.FOOTER.MINIMAL),
//     variant: select("Variant", variants.ORGANISM.FOOTER, variants.ORGANISM.FOOTER.APP),
//     social: object("Social Media Config", socialMediaConfig),
//     categories: object("Category Config", categoryConfig),
//   },
// });

import { variants, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Footer from "./Footer.svelte";

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

//TODO Eventually this will come from strapi, probably a shared endpoint...
// The function for fetching this data could be exported, requiring a URL and Apollo client for input.
const categoryConfig = [
  {
    title: "Blockchain",
    links: [
      {
        title: "Technology Explained",
        url: "https://dusk.network/pages/network",
      },
      {
        title: "Roadmap",
        url: "https://dusk.network/pages/roadmap",
      },
      {
        title: "Use Cases",
        url: "https://dusk.network/pages/roadmap",
      },
      {
        title: "Staking",
        url: "https://staking.dusk.network",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        title: "Whitepaper",
        url: "https://dusk.network/uploads/dusk-whitepaperv2.pdf",
      },
      {
        title: "Github",
        url: "https://github.com/dusk-network",
      },
      {
        title: "Resources",
        url: "https://dusk.network/pages/resources",
      },
      {
        title: "PLONK Proving System",
        url: "https://crates.io/crates/dusk-plonk",
      },
    ],
  },
  {
    title: "Media",
    links: [
      {
        title: "Blog",
        url: "https://dusk.network/pages/all-posts",
      },
      {
        title: "News Room",
        url: "https://dusknetwork.pr.co/",
      },
      {
        title: "Press Contact",
        url: "mailto:press@dusk.network",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "Team",
        url: "https://dusk.network/pages/team",
      },
      {
        title: "Careers",
        url: "https://dusk.network/pages/jobs",
      },
      {
        title: "FAQ",
        url: "https://dusk.network/pages/faq",
      },
    ],
  },
];

export default {
  title: `components/organisms/Footer`,
  component: Footer,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/proto/Vx8ml25JHmOpdh665boD5x/Buttons?node-id=1%3A4&scaling=min-zoom&hide-ui=1",
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ORGANISM.FOOTER),
      },
    },
    type: {
      control: {
        type: "radio",
        options: Object.values(types.ORGANISM.FOOTER),
      },
    },
  },
};

const Template = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {
  variant: variants.ORGANISM.FOOTER.BRAND,
  type: types.ORGANISM.FOOTER.MINIMAL,
  social: socialMediaConfig,
  categories: categoryConfig,
};
