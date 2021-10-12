<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { sizes } from "@dusk-network/helpers";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import RichText from "@dusk-network/rich-text";
  import Html from "./Html.svelte";
  import Swatches from "./Swatches.svelte";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Rich Text"
  decorators="{[withTests({ results })]}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/rich-text/RichText.test.js'],
  }}"
  component="{RichText}"
  argTypes="{meta('rich-text/RichText', {
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
  })}"
/>

<Story name="Headings & body style" args="{{ swatches: true }}" let:args>
  <Swatches {...args} />
</Story>

<Story name="HTML content sample" args="{{}}" let:args>
  <Html {...args} />
</Story>
