<!-- import { variants, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Toggle from "@dusk-network/toggle";

export default {
  title: `Components/Atoms/Toggle`,
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.TOGGLE),
      },
    },
    type: {
      control: {
        type: "radio",
        options: Object.values(types.TOGGLE),
      },
    },
  },
};

const Template = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {
  variant: variants.TOGGLE.DEFAULT,
  type: types.TOGGLE.SWITCH,
}; -->
<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { types, variants } from "@dusk-network/helpers";
  import Toggle, { Group } from "@dusk-network/toggle";
</script>

<Meta
  title="Components/Atoms/Toggle"
  component="{Toggle}"
  parameters="{{ layout: 'centered' }}"
  argTypes="{{
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.TOGGLE),
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    selected: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  <Group>
    {#each Array(args.type === types.TOGGLE.BUTTON || args.type === types.TOGGLE.RADIO ? 5 : 1) as _, i}
      <Toggle
        {...args}
        name="{args.type === types.TOGGLE.BUTTON || args.type === types.TOGGLE.RADIO
          ? `tog`
          : `tog_${i}`}"
        id="tog_{i}">Example {args.type}</Toggle
      >
    {/each}
  </Group>
</Template>

<Story name="Switch toggle" args="{{ type: types.TOGGLE.SWITCH }}" />
<Story name="Button toggle" args="{{ type: types.TOGGLE.BUTTON }}" />
<Story name="Checkbox toggle" args="{{ type: types.TOGGLE.CHECKBOX }}" />
<Story name="Radio toggle" args="{{ type: types.TOGGLE.RADIO }}" />
