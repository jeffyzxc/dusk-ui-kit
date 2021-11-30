<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Footer from "@dusk-network/footer";
  import { types } from "@dusk-network/helpers";
  import meta from "../../meta.js";

  const social = [
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
  const categories = [
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
</script>

<Meta
  title="Components/Organisms/Footer"
  component="{Footer}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/organisms/footer/Footer.test.js'],
  }}"
  argTypes="{meta('organisms/footer/Footer', {
    type: {
      control: {
        type: 'radio',
        options: Object.values(types.FOOTER),
      },
    },
  })}"
/>

<Story
  name="Minimal footer"
  args="{{
    type: types.FOOTER.MINIMAL,
    social: social,
  }}"
  let:args
>
  <Footer type="{args.type}" social="{args.social}" />
</Story>

<Story
  name="Maximal footer"
  args="{{
    type: types.FOOTER.MAXIMAL,
    categories: categories,
    social: social,
  }}"
  let:args
>
  <Footer type="{args.type}" social="{args.social}" categories="{args.categories}" />
</Story>
