<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import ErrorBlock from "@dusk-network/error-block";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Organisms/Error Block"
  component="{ErrorBlock}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/organisms/error-block/ErrorBlock.test.js'],
  }}"
  argTypes="{meta('organisms/error-block/ErrorBlock', {})}"
/>

<Story
  name="ErrorBlock HTTP 404"
  args="{{
    code: 404,
  }}"
  let:args
>
  <ErrorBlock {...args} />
</Story>

<Story
  name="ErrorBlock HTTP 500"
  args="{{
    code: 500,
  }}"
  let:args
>
  <ErrorBlock {...args} />
</Story>
