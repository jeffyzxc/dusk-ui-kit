<script>
  // TODO Investigate use of states on DropDown, and Toggle
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { types, states } from "@dusk-network/helpers";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import Toggle from "@dusk-network/toggle";
  import Button from "@dusk-network/button";
  import DropDown from "@dusk-network/drop-down";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Control"
  decorators="{[withTests({ results })]}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/control/Control.test.js'],
  }}"
  component="{Control}"
  args="{{
    type: 'default',
    message: 'This is a message.',
    label: 'Control label',
  }}"
  argTypes="{meta('control/Control', {
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
  })}"
/>

<Story name="Control Text field" args="{{}}" let:args>
  <Control
    width="full"
    {...args}
    on:click="{args.onClick}"
    on:mouseover="{args.onMouseover}"
    let:id
  >
    <TextField id="{id}" state="{args.state}" />
  </Control>
</Story>

<Story
  name="Control Checkbox"
  args="{{ checkbox: true, label: '' }}"
  argTypes="{{ label: { table: { disable: true } } }}"
  let:args
>
  <Control
    width="full"
    {...args}
    on:click="{args.onClick}"
    on:mouseover="{args.onMouseover}"
    let:id
  >
    <Toggle id="{id}" type="{types.TOGGLE.CHECKBOX}" state="{args.state}">Checkbox example</Toggle>
  </Control>
</Story>

<Story
  name="Control Radio"
  args="{{ radio: true, label: '' }}"
  argTypes="{{ label: { table: { disable: true } } }}"
  let:args
>
  <Control
    width="full"
    {...args}
    on:click="{args.onClick}"
    on:mouseover="{args.onMouseover}"
    let:id
  >
    <Toggle id="{id}" type="{types.TOGGLE.RADIO}" state="{args.state}" options="{[1, 2, 3, 4]}">
      Radio example
    </Toggle>
  </Control>
</Story>

<Story name="Control Drop down" args="{{ dropDown: true }}" let:args>
  <Control
    width="full"
    {...args}
    on:click="{args.onClick}"
    on:mouseover="{args.onMouseover}"
    let:id
  >
    <DropDown id="{id}" options="{[1, 2, 3, 4]}" />
  </Control>
</Story>

<Story name="Control Text field with postfixed Button" args="{{ buttonPostfix: true }}" let:args>
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
</Story>

<Story name="Control Text field with prefixed Button" args="{{ buttonPrefix: true }}" let:args>
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
</Story>
