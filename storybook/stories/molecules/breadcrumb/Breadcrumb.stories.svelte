<script>
  // TODO Clean up content in template etc.
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Breadcrumb"
  component="{Breadcrumb}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/breadcrumb/Breadcrumb.test.js'],
  }}"
  argTypes="{meta('molecules/breadcrumb/Breadcrumb', {
    onExit: {
      action: 'onExit',
    },
  })}"
/>

<Story name="Single item breadcrumb" args="{{ href: 'javascript:;' }}" let:args>
  <Breadcrumb {...args} on:exit="{args.onExit}">
    <Item>
      <strong>Transaction details:</strong>
      <div>5ea9b166c197ccccf2egsdsrr5775kwoa3485</div>
    </Item>
  </Breadcrumb>
</Story>
