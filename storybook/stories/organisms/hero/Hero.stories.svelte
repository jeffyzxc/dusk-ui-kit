<script>
  // TODO Clean up content in template etc.
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Hero from "@dusk-network/hero";
  import Heading from "@dusk-network/heading";
  import Button from "@dusk-network/button";
  import RichText from "@dusk-network/rich-text";
  import { variants } from "@dusk-network/helpers";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Organisms/Hero"
  decorators="{[withTests({ results })]}"
  component="{Hero}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/organisms/hero/Hero.test.js'],
  }}"
  argTypes="{meta('hero/Hero', {
    layout: {
      table: {
        disabled: true,
      },
    },
  })}"
/>

<Story
  name="With Introduction"
  args="{{
    layout: 1,
    introduction:
      '<h1>Heros are very reusable!</h1> <p>The Dusk Grants Program helps projects and developers launch to drive mainstream adoption of blockchain and build the future of finance. Opportunities on Dusk Network are endless.</p>',
  }}"
  argTypes="{{
    layout: {
      table: {
        disabled: true,
      },
    },
  }}"
  let:args
>
  <Hero {...args}>
    <div slot="introduction">
      <RichText>
        {@html args.introduction}
      </RichText>
    </div>
  </Hero>
</Story>

<Story
  name="With Introduction & CTA"
  args="{{
    layout: 2,
    introduction:
      '<h1>Heros are very reusable!</h1> <p>The Dusk Grants Program helps projects and developers launch to drive mainstream adoption of blockchain and build the future of finance. Opportunities on Dusk Network are endless.</p>',
    cta: {
      description:
        '<p>Enable any size enterprise to collaborate at scale, meet the highest level of compliance requirements, and ensure that personal and transaction data remains confidential.</p>',
    },
  }}"
  let:args
>
  <Hero {...args}>
    <div slot="introduction">
      <RichText>
        {@html args.introduction}
      </RichText>
    </div>
    <div slot="cta">
      <Button variant="{variants.BUTTON.CTA}">
        Apply
        <svelte:fragment slot="labelRight">Join the Dusk Mission</svelte:fragment>
      </Button>
      <RichText>
        {@html args.cta.description}
      </RichText>
    </div>
  </Hero>
</Story>

<Story
  name="With Introduction, CTA & image"
  args="{{
    layout: 3,
    introduction:
      '<h1>Heros are very reusable!</h1> <p>The Dusk Grants Program helps projects and developers launch to drive mainstream adoption of blockchain and build the future of finance. Opportunities on Dusk Network are endless.</p>',
    cta: {
      description:
        '<p>Enable any size enterprise to collaborate at scale, meet the highest level of compliance requirements, and ensure that personal and transaction data remains confidential.</p>',
    },
    image: '<img src="https://content.dusk.network/uploads/Group_10_1_b752fec2fa.svg" />',
  }}"
  let:args
>
  <Hero {...args}>
    <div slot="introduction">
      <RichText>
        {@html args.introduction}
      </RichText>
    </div>
    <div slot="cta">
      <Button href="https://google.com">
        Apply
        <svelte:fragment slot="labelRight">Join the Dusk Mission</svelte:fragment>
      </Button>
      <RichText>
        {@html args.cta.description}
      </RichText>
    </div>
    <div slot="image">
      <RichText>{@html args.image}</RichText>
    </div>
  </Hero>
</Story>

<Story
  name="With Introduction & image"
  args="{{
    layout: 4,
    introduction:
      '<h1>Heros are very reusable!</h1> <p>The Dusk Grants Program helps projects and developers launch to drive mainstream adoption of blockchain and build the future of finance. Opportunities on Dusk Network are endless.</p>',
    image: '<img src="https://content.dusk.network/uploads/Group_10_1_b752fec2fa.svg" />',
  }}"
  let:args
>
  <Hero {...args}>
    <div slot="introduction">
      <RichText>
        {@html args.introduction}
      </RichText>
    </div>
    <div slot="image">
      <RichText>{@html args.image}</RichText>
    </div>
  </Hero>
</Story>

<Story
  name="Wallet homepage"
  args="{{
    layout: 5,
    introduction:
      '<h2>Dusk Network’s Official Web Wallet</h2> <p>Quickly access your wallet, view your balance, send and receive DUSK, and other tokens.</p>',
    image: '<img src="https://content.dusk.network/uploads/Group_10_1_b752fec2fa.svg" />',
    heading: '<h3>Discover Dusk Network: the privacy blockchain for financial applications.</h3>',
  }}"
  let:args
>
  <Hero {...args}>
    <div slot="introduction">
      <RichText>
        {@html args.introduction}
      </RichText>
      <Heading>{@html args.heading}</Heading>
    </div>
    <div slot="image">
      <RichText>{@html args.image}</RichText>
    </div>
  </Hero>
</Story>
