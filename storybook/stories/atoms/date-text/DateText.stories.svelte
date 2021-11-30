<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import DateText from "@dusk-network/date-text";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Date Text"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/date-text/DateText.test.js'],
  }}"
  component="{DateText}"
  argTypes="{meta('atoms/date-text/DateText')}"
/>

<Story name="Default (from now) time" args="{{ time: '2021-01-01 21:03:02 +0000 UTC' }}" let:args>
  <DateText {...args} />
</Story>

<Story
  name="With additional timestamp"
  args="{{ time: '2021-01-01 21:03:02 +0000 UTC', showTimestamp: true }}"
  let:args
>
  <DateText {...args} />
</Story>
