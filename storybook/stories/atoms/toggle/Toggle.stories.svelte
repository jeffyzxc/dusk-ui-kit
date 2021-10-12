<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { types, variants } from "@dusk-network/helpers";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Toggle, { Group } from "@dusk-network/toggle";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Toggle"
  decorators="{[withTests({ results })]}"
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
  argTypes="{meta('toggle/Toggle', {
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
    // checked: {
    //   table: {
    //     disable: true,
    //   },
    // },
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
