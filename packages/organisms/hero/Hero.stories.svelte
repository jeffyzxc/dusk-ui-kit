<script>
  // TODO Clean up content in template etc.
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Hero from "@dusk-network/hero";
  import Button from "@dusk-network/button";
  import RichText from "@dusk-network/rich-text";
  import { variants } from "@dusk-network/helpers";
</script>

<Meta
  title="Components/Organisms/Hero"
  component="{Hero}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    layout: {
      table: {
        disabled: true,
      },
    },
  }}"
/>

<Template let:args>
  {#if args.layout === 1}
    <Hero {...args}>
      <div slot="introduction">
        <RichText>
          {@html args.introduction}
        </RichText>
      </div>
    </Hero>
  {:else if args.layout === 2}
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
  {:else if args.layout === 3}
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
  {/if}
</Template>

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
/>

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
/>

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
/>

<Story
  name="Grants homepage"
  args="{{
    layout: 3,
    introduction: '<h1>Kickstart your project on Dusk Network</h1>',
    cta: {
      description:
        '<p>Enable any size enterprise to collaborate at scale, meet the highest level of compliance requirements, and ensure that personal and transaction data remains confidential.</p>',
    },
    image: '<img src="https://content.dusk.network/uploads/Group_10_1_b752fec2fa.svg" />',
  }}"
/>
