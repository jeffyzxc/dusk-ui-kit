<script>
  // TODO Investigate use of states on DropDown, and Toggle
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { types, states } from "@dusk-network/helpers";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import Toggle from "@dusk-network/toggle";
  import DropDown from "@dusk-network/drop-down";
</script>

<Meta
  title="Components/Molecules/Control"
  parameters="{{ layout: 'centered' }}"
  component="{Control}"
  args="{{
    type: 'default',
    message: 'This is a message.',
    label: 'Control label',
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
    state: {
      control: {
        type: 'select',
        options: Object.values(states.CONTROL),
      },
    },
    type: {
      control: {
        type: 'radio',
        options: Object.values(types.CONTROL),
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    message: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    checkbox: {
      table: {
        disable: true,
      },
    },
    radio: {
      table: {
        disable: true,
      },
    },
    dropdown: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  <Control {...args} on:click="{args.onClick}" on:mouseover="{args.onMouseover}">
    {#if args.checkbox}
      <Toggle type="{types.TOGGLE.CHECKBOX}" state="{args.state}">Checkbox example</Toggle>
    {:else if args.radio}
      <Toggle type="{types.TOGGLE.RADIO}" state="{args.state}" options="{[1, 2, 3, 4]}">
        Radio example
      </Toggle>
    {:else if args.dropDown}
      <DropDown options="{[1, 2, 3, 4]}" />
    {:else}
      <TextField state="{args.state}" />
    {/if}
  </Control>
</Template>

<Story name="With text field" args="{{}}" />
<Story
  name="With a checkbox"
  args="{{ checkbox: true, label: '' }}"
  argTypes="{{ label: { table: { disable: true } } }}"
/>
<Story
  name="With a radio"
  args="{{ radio: true, label: '' }}"
  argTypes="{{ label: { table: { disable: true } } }}"
/>
<Story name="With a drop down" args="{{ dropDown: true }}" />
