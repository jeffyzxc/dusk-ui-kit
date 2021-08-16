<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import DropDown from "@dusk-network/drop-down";
</script>

<Meta
  title="Components/Atoms/Drop Down"
  component="{DropDown}"
  parameters="{{ layout: 'centered' }}"
  argTypes="{{
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
  }}"
/>

<Template let:args>
  <DropDown {...args} on:select="{args.onSelect}" />
</Template>

<Story
  name="Standard drop down"
  args="{{ options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'] }}"
/>
<Story
  name="Standard drop up"
  args="{{ dropUp: true, options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'] }}"
/>
