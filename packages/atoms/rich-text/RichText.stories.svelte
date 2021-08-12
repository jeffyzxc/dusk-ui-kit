<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { sizes } from "@dusk-network/helpers";
  import RichText from "@dusk-network/rich-text";
  import Html from "./storybook/Html.svelte";
  import Swatches from "./storybook/Swatches.svelte";
</script>

<Meta
  title="Components/Atoms/Rich Text"
  component="{RichText}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    size: {
      options: Object.values(sizes.RICH_TEXT),
      control: {
        type: 'radio',
      },
    },
    markdown: {
      table: {
        disable: true,
      },
    },
    swatches: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  {#if args.swatches}
    <Swatches {...args} />
  {:else}
    <Html {...args} />
  {/if}
</Template>

<Story name="Headings & body style" args="{{ swatches: true }}" />
<Story name="HTML content sample" args="{{}}" />
