# ⚛️ Footer

Provides a standard website or app footer.

## Tones

| Value     | Description                              |
| --------- | ---------------------------------------- |
| app       | Applies styling for an app context.      |
| marketing | Applies styling for a marketing context. |

## Variants

| Value   | Description                       |
| ------- | --------------------------------- |
| brand   | Applies a brand styling.          |
| cta     | Applies a call to action styling. |
| dark    | Applies a dark styling.           |
| light   | Applies a light styling.          |
| success | Applies a success styling.        |
| warning | Applies a warning styling.        |
| danger  | Applies a danger styling.         |

## Types

| Type    | Usage   |
| ------- | --------|
| MAXIMAL | Maximal |
| MINIMAL | Minimal |


## Usage

```js
<script>
  import Footer from "@dusk-network/footer";
  import { variants, types } from "@dusk-network/helpers";
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
    title: "LinkedIn",
    icon: "linked-in",
    url: "https://www.linkedin.com/company/dusknetwork/",
  },
  {
    title: "Github",
    icon: "github",
    url: "https://github.com/dusk-network",
  },
];

const categories = [
  {
    title: "Blockchain",
    links: [
      {
        title: "Technology Explained",
        url: "https://dusk.network/pages/network",
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
        title: "Github",
        url: "https://github.com/dusk-network",
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
    ],
  },
];
</script>

<Footer type="{types.ORGANISM.FOOTER.MAXIMAL}" variant="{variants.ORGANISM.FOOTER.BRAND}" social="{social}" categories="{categories}" />
```
