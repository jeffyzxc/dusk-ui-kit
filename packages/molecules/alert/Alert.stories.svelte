<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  import Alert from "@dusk-network/alert";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import Group from "@dusk-network/button/Group.svelte";
</script>

<Meta
  title="Components/Molecules/Alert"
  component="{Alert}"
  parameters="{{ layout: 'centered' }}"
  args="{{
    value: true,
  }}"
  argTypes="{{
    onClick: {
      action: 'onClick',
      table: {
        disable: true,
      },
    },
    onMouseover: {
      action: 'onMouseover',
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.ALERT),
      },
    },
    dismissable: {
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
  }}"
/>

<Template let:args>
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
</Template>

<Story name="Default alert" args="{{}}" />
<Story name="Dismissable alert" args="{{ dismissable: true }}" />
