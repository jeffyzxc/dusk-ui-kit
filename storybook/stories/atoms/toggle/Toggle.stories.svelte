<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { types, variants, icons } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Toggle from "@dusk-network/toggle";
  import Group from "@dusk-network/group";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Toggle"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/toggle/Toggle.test.js'],
  }}"
  component="{Toggle}"
  argTypes="{meta('atoms/toggle/Toggle', {
    onChange: {
      action: 'onChange',
    },
    onClick: {
      action: 'onClick',
    },
    variant: {
      options: Object.values(variants.TOGGLE),
      control: {
        type: 'select',
      },
    },
    onIcon: {
      options: Object.values(icons),
      control: {
        type: 'select',
      },
    },
    offIcon: {
      options: Object.values(icons),
      control: {
        type: 'select',
      },
    },
  })}"
/>

<Story name="Switch toggle" args="{{ type: types.TOGGLE.SWITCH }}" let:args>
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
</Story>

<Story name="Button toggle" args="{{ type: types.TOGGLE.BUTTON }}" let:args>
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
</Story>

<Story name="Checkbox toggle" args="{{ type: types.TOGGLE.CHECKBOX }}" let:args>
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
</Story>

<Story name="Radio toggle" args="{{ type: types.TOGGLE.RADIO }}" let:args>
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
</Story>
