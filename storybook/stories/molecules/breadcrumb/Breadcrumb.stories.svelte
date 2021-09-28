<script>
  // TODO Clean up content in template etc.
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
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
  }}"
  argTypes="{meta('breadcrumb/Breadcrumb',{
    onExit: {
      action: 'onExit',
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    modal: {
      table: {
        disable: true,
      },
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
