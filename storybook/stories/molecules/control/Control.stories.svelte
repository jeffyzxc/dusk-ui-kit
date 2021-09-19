<script>
  // TODO Investigate use of states on DropDown, and Toggle
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { types, states } from "@dusk-network/helpers";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import Toggle from "@dusk-network/toggle";
  import Button from "@dusk-network/button";
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
  {#if !args.buttonPrefix && !args.buttonPostfix}
    <Control
      width="full"
      {...args}
      on:click="{args.onClick}"
      on:mouseover="{args.onMouseover}"
      let:id
    >
      {#if args.checkbox}
        <Toggle id="{id}" type="{types.TOGGLE.CHECKBOX}" state="{args.state}"
          >Checkbox example</Toggle
        >
      {:else if args.radio}
        <Toggle id="{id}" type="{types.TOGGLE.RADIO}" state="{args.state}" options="{[1, 2, 3, 4]}">
          Radio example
        </Toggle>
      {:else if args.dropDown}
        <DropDown id="{id}" options="{[1, 2, 3, 4]}" />
      {:else}
        <TextField id="{id}" state="{args.state}" />
      {/if}
    </Control>
  {/if}

  {#if args.buttonPrefix}
    <Control
      width="full"
      {...args}
      on:click="{args.onClick}"
      on:mouseover="{args.onMouseover}"
      let:id
    >
      <Button slot="buttonPrefix">Prefixed</Button>
      <TextField id="{id}" state="{args.state}" />
    </Control>
  {/if}

  {#if args.buttonPostfix}
    <Control
      width="full"
      {...args}
      on:click="{args.onClick}"
      on:mouseover="{args.onMouseover}"
      let:id
    >
      <Button slot="buttonPostfix">Postfixed</Button>
      <TextField id="{id}" state="{args.state}" />
    </Control>
  {/if}
</Template>

<Story name="Control Text field" args="{{}}" />
<Story name="Control Text field with postfixed Button" args="{{ buttonPostfix: true }}" />
<Story name="Control Text field with prefixed Button" args="{{ buttonPrefix: true }}" />
<Story
  name="Control Checkbox"
  args="{{ checkbox: true, label: '' }}"
  argTypes="{{ label: { table: { disable: true } } }}"
/>
<Story
  name="Control Radio"
  args="{{ radio: true, label: '' }}"
  argTypes="{{ label: { table: { disable: true } } }}"
/>
<Story name="Control Drop down" args="{{ dropDown: true }}" />
