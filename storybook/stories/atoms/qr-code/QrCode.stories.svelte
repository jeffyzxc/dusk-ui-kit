<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import QrCode from "@dusk-network/qr-code";
  import meta from "../../meta.js";

  let address =
    "0x66D30033B4E0BAF8970e9c8A0aD1D02Cc3e21115fhkllA9urdrTVbAyQZnwy0JLyvbCVZBHpzfBU87Gy4USFWaA6sZ";
</script>

<Meta
  title="Components/Atoms/QrCode"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/qr-code/QrCode.test.js'],
  }}"
  component="{QrCode}"
  argTypes="{meta('atoms/qr-code/QrCode', {})}"
/>

<Story name="Default QR Code" args="{{}}" let:args>
  <QrCode value="{address}" />
</Story>
