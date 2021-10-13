<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Logo from "@dusk-network/logo";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Logo"
  decorators="{[withTests({ results })]}"
  component="{Logo}"
  parameters="{{
    layout: 'centered',
    controls: { disabled: true },
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/logo/Logo.test.js'],
  }}"
  argTypes="{meta('atoms/logo/Logo', {})}"
/>

<Story name="Basic logo with no context" args="{{}}" let:args>
  <Logo {...args} />
</Story>
