<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import { variants } from "@dusk-network/helpers";
  import Chip from "@dusk-network/chip";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Chip"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/address/Address.test.js'],
  }}"
  component="{Chip}"
  argTypes="{meta('atoms/address/Address', {
    variant: {
      options: Object.values(variants.ADDRESS),
      control: {
        type: 'select',
      },
    },
  })}"
/>

<Story name="Default chip" args="{{}}" let:args>
  <Chip {...args}>Round Leader</Chip>
</Story>
