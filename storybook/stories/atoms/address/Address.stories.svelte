<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import { variants } from "@dusk-network/helpers";
  import Address from "@dusk-network/address";
  import meta from "../../meta.js";

  let address =
    "0x66D30033B4E0BAF8970e9c8A0aD1D02Cc3e21115fhkllA9urdrTVbAyQZnwy0JLyvbCVZBHpzfBU87Gy4USFWaA6sZ";
</script>

<Meta
  title="Components/Atoms/Address"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/address/Address.test.js'],
  }}"
  component="{Address}"
  argTypes="{meta('atoms/address/Address', {
    variant: {
      options: Object.values(variants.ADDRESS),
      control: {
        type: 'select',
      },
    },
  })}"
/>

<Story name="Default address" args="{{}}" let:args>
  <Address {...args}>
    <p>{address}</p>
  </Address>
</Story>
