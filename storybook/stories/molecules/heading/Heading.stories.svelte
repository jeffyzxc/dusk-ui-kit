<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { sizes, variants } from "@dusk-network/helpers";
  import Heading from "@dusk-network/heading";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
</script>

<Meta
  title="Components/Molecules/Heading"
  component="{Heading}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
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
  }}"
/>

<Template let:args>
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
</Template>

<Story name="Simple heading" args="{{ heading: '<h1>I am a simple heading</h1>' }}" />
<Story
  name="With icon"
  args="{{ heading: '<h1>I am a heading with an icon<h1>', icon: 'wallet-plus' }}"
/>
<Story
  name="With icon and button"
  args="{{
    heading: '<h1>I am a heading with an icon<h1>',
    icon: 'wallet-plus',
    button: 'Confirm',
  }}"
/>
