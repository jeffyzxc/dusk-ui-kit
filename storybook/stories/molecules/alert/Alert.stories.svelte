<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Alert from "@dusk-network/alert";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import Group from "@dusk-network/group";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Alert"
  component="{Alert}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/alert/Alert.test.js'],
  }}"
  args="{{
    value: true,
  }}"
  argTypes="{meta('molecules/alert/Alert', {
    onClick: {
      action: 'onClick',
      table: {
        disable: true,
      },
    },
    onMouseover: {
      action: 'onMouseover',
    },
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.ALERT),
      },
    },
  })}"
/>

<Story name="Default alert" args="{{}}" let:args>
  <Alert {...args} on:click="{args.onClick}" on:mouseover="{args.onMouseover}">
    <div slot="icon">
      <Icon
        name="{(args.variant === 'success' && 'check-decagram-outline') ||
          (args.variant === 'warning' && 'alert-outline') ||
          (args.variant === 'danger' && 'close-circle-outline') ||
          'help-circle-outline'}"
      />
    </div>
    <div slot="title">Alert Title!</div>
    <p>This is an alert!</p>
    <div slot="actions">
      <Group>
        <Button
          variant="{args.variant || 'brand'}"
          outline="{true}"
          on:click="{() => (args['value'] = false)}"
        >
          Accept
        </Button>
        <Button variant="default" outline="{true}" on:click="{() => (args['value'] = false)}">
          Reject
        </Button>
      </Group>
    </div>
  </Alert>
</Story>

<Story name="Dismissable alert" args="{{ dismissable: true }}" let:args>
  <Alert {...args} on:click="{args.onClick}" on:mouseover="{args.onMouseover}">
    <div slot="icon">
      <Icon
        name="{(args.variant === 'success' && 'check-decagram-outline') ||
          (args.variant === 'warning' && 'alert-outline') ||
          (args.variant === 'danger' && 'close-circle-outline') ||
          'help-circle-outline'}"
      />
    </div>
    <div slot="title">Alert Title!</div>
    <p>This is an alert!</p>
    <div slot="actions">
      <Group>
        <Button
          variant="{args.variant || 'brand'}"
          outline="{true}"
          on:click="{() => (args['value'] = false)}"
        >
          Accept
        </Button>
        <Button variant="default" outline="{true}" on:click="{() => (args['value'] = false)}">
          Reject
        </Button>
      </Group>
    </div>
  </Alert>
</Story>
