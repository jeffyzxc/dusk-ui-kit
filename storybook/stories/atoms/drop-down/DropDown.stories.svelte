<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import DropDown from "@dusk-network/drop-down";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Drop Down"
  decorators="{[withTests({ results })]}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/drop-down/DropDown.test.js'],
  }}"
  component="{DropDown}"
  argTypes="{meta('drop-down/DropDown', {
    onSelect: {
      action: 'onSelect',
      table: {
        disable: true,
      },
    },
    options: {
      control: {
        type: 'object',
      },
    },
    selectedIndex: {
      name: 'selected index',
      control: {
        type: 'number',
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    dropUp: {
      table: {
        disable: true,
      },
    },
  })}"
/>

<Story
  name="Standard drop down"
  args="{{ options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'] }}"
  let:args
>
  <DropDown {...args} on:select="{args.onSelect}" />
</Story>

<Story
  name="Standard drop up"
  args="{{ dropUp: true, options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'] }}"
  let:args
>
  <DropDown {...args} on:select="{args.onSelect}" />
</Story>
