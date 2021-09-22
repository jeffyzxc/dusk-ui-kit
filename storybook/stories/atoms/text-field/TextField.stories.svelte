<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { types, states } from "@dusk-network/helpers";
  import TextField from "@dusk-network/text-field";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Text Field"
  parameters="{{ 
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
  }}"
  component="{TextField}"
  argTypes="{meta('text-field/TextField',{
    onBlur: {
      action: 'onBlur',
      table: {
        disable: true,
      },
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true,
      },
    },
    onClick: {
      action: 'onClick',
      table: {
        disable: true,
      },
    },
    onFocus: {
      action: 'onFocus',
      table: {
        disable: true,
      },
    },
    onInput: {
      action: 'onInput',
      table: {
        disable: true,
      },
    },
    onKeydown: {
      action: 'onKeydown',
      table: {
        disable: true,
      },
    },
    onKeyup: {
      action: 'onKeyup',
      table: {
        disable: true,
      },
    },
    onKeypress: {
      action: 'onKeypress',
      table: {
        disable: true,
      },
    },
    state: {
      options: Object.values(states.TEXT_FIELD),
      control: {
        type: 'select',
      },
    },
    type: {
      options: Object.values(types.TEXT_FIELD),
      control: {
        type: 'radio',
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    multiline: {
      table: {
        disable: true,
      },
    },
  })}"
/>

<Story name="Default text field" args="{{ type: types.TEXT_FIELD.TEXT }}" let:args>
  <TextField
    {...args}
    type="{args.type || undefined}"
    on:blur="{args.onBlur}"
    on:change="{args.onChange}"
    on:click="{args.onClick}"
    on:focus="{args.onFocus}"
    on:input="{args.onInput}"
    on:keydown="{args.onKeydown}"
    on:keyup="{args.onKeyup}"
    on:keypress="{args.onKeyPress}"
  />
</Story>
<Story
  name="Multiline text field"
  args="{{ multiline: true }}"
  argTypes="{{
    type: { table: { disable: true } },
  }}"
  let:args
>
  <TextField
    {...args}
    type="{args.type || undefined}"
    on:blur="{args.onBlur}"
    on:change="{args.onChange}"
    on:click="{args.onClick}"
    on:focus="{args.onFocus}"
    on:input="{args.onInput}"
    on:keydown="{args.onKeydown}"
    on:keyup="{args.onKeyup}"
    on:keypress="{args.onKeyPress}"
  />
</Story>
<!-- <Story
  name="Single icon with tooltip"
  args="{{
    name: 'dusk-ticker',
    tooltip: 'Some helpful information on what this icon represents.',
  }}"
  argTypes="{{
    collection: { table: { disable: true } },
  }}"
/>
<Story
  name="Collection"
  args="{{
    collection: true,
  }}"
  argTypes="{{
    name: { table: { disable: true } },
    tooltip: { table: { disable: true } },
  }}"
/> -->
