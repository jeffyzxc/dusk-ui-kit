<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { types, states } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
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
    jest: ['packages/atoms/text-field/TextField.test.js'],
  }}"
  component="{TextField}"
  argTypes="{meta('atoms/text-field/TextField', {
    onBlur: {
      action: 'onBlur',
    },
    onChange: {
      action: 'onChange',
    },
    onClick: {
      action: 'onClick',
    },
    onFocus: {
      action: 'onFocus',
    },
    onInput: {
      action: 'onInput',
    },
    onKeydown: {
      action: 'onKeydown',
    },
    onKeyup: {
      action: 'onKeyup',
    },
    onKeypress: {
      action: 'onKeypress',
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
