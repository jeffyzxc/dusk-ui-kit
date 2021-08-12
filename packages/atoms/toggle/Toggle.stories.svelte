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
    variant: {
      options: Object.values(variants.TOGGLE),
      control: {
        type: 'select',
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
        id="tog_{i}"
        on:change="{args.onChange}"
        on:click="{args.onClick}"
      >
        Example {args.type}
      </Toggle>
    {/each}
  </Group>
</Template>

<Story name="Switch toggle" args="{{ type: types.TOGGLE.SWITCH }}" />
<Story name="Button toggle" args="{{ type: types.TOGGLE.BUTTON }}" />
<Story name="Checkbox toggle" args="{{ type: types.TOGGLE.CHECKBOX }}" />
<Story name="Radio toggle" args="{{ type: types.TOGGLE.RADIO }}" />
