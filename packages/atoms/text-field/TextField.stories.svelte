<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { types, states } from "@dusk-network/helpers";
  import TextField from "@dusk-network/text-field";
</script>

<Meta
  title="Components/Atoms/Text Field"
  component="{TextField}"
  parameters="{{ layout: 'centered' }}"
  argTypes="{{
    state: {
      control: {
        type: 'select',
        options: Object.values(states.TEXT_FIELD),
      },
    },
    type: {
      control: {
        type: 'radio',
        options: Object.values(types.TEXT_FIELD),
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
  }}"
/>

<Template let:args>
  <TextField {...args} type="{args.type || undefined}" />
</Template>

<Story name="Default text field" args="{{ type: types.TEXT_FIELD.TEXT }}" />
<Story
  name="Multiline text field"
  args="{{ multiline: true }}"
  argTypes="{{
    type: { table: { disable: true } },
  }}"
/>
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
