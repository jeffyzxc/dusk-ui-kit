<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { sizes, variants } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Heading from "@dusk-network/heading";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Heading"
  component="{Heading}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/heading/Heading.test.js'],
  }}"
  argTypes="{meta('molecules/heading/Heading', {
    size: {
      control: {
        type: 'radio',
        options: Object.values(sizes.HEADING),
      },
    },
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.HEADING),
      },
    },
  })}"
/>

<Story name="Simple heading" args="{{ heading: '<h1>I am a simple heading</h1>' }}" let:args>
  <Heading {...args}>
    <svelte:fragment slot="icon">
      {#if args.icon}
        <Icon name="{args.icon}" />
      {/if}
    </svelte:fragment>
    {@html args.heading}
    <svelte:fragment slot="button">
      {#if args.button}
        <Button>{args.button}</Button>
      {/if}
    </svelte:fragment>
  </Heading>
</Story>

<Story
  name="Using a strong style"
  args="{{ heading: '<strong>I am not a heading tag</strong>' }}"
  let:args
>
  <Heading {...args}>
    <svelte:fragment slot="icon">
      {#if args.icon}
        <Icon name="{args.icon}" />
      {/if}
    </svelte:fragment>
    {@html args.heading}
    <svelte:fragment slot="button">
      {#if args.button}
        <Button>{args.button}</Button>
      {/if}
    </svelte:fragment>
  </Heading>
</Story>

<Story
  name="With icon"
  args="{{ heading: '<h1>I am a heading with an icon<h1>', icon: 'wallet-plus' }}"
  let:args
>
  <Heading {...args}>
    <svelte:fragment slot="icon">
      {#if args.icon}
        <Icon name="{args.icon}" />
      {/if}
    </svelte:fragment>
    {@html args.heading}
    <svelte:fragment slot="button">
      {#if args.button}
        <Button>{args.button}</Button>
      {/if}
    </svelte:fragment>
  </Heading>
</Story>

<Story
  name="With icon and button"
  args="{{
    heading: '<h1>I am a heading with an icon<h1>',
    icon: 'wallet-plus',
    button: 'Confirm',
  }}"
  let:args
>
  <Heading {...args}>
    <svelte:fragment slot="icon">
      {#if args.icon}
        <Icon name="{args.icon}" />
      {/if}
    </svelte:fragment>
    {@html args.heading}
    <svelte:fragment slot="button">
      {#if args.button}
        <Button>{args.button}</Button>
      {/if}
    </svelte:fragment>
  </Heading>
</Story>
