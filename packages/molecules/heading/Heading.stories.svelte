<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { sizes } from "@dusk-network/helpers";
  import Heading from "@dusk-network/heading";
  // import Card, { Content } from "@dusk-network/card";
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
  </Heading>
</Template>

<Story name="Simple heading" args="{{ heading: '<h1>I am a simple heading</h1>' }}" />
<Story
  name="With icon"
  args="{{ heading: '<h1>I am a heading with an icon<h1>', icon: 'wallet-plus' }}"
/>
