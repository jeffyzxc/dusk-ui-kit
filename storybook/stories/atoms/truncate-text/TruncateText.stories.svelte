<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { widths } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import TruncateText from "@dusk-network/truncate-text";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Truncate Text"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/truncate-text/TruncateText.test.js'],
  }}"
  component="{TruncateText}"
  argTypes="{meta('atoms/truncate-text/TruncateText')}"
/>

<Story name="Quarter width" args="{{ width: widths.TRUNCATE_TEXT.QUARTER }}" let:args>
  <TruncateText {...args} width="{args.width || undefined}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </TruncateText>
</Story>

<Story name="One third width" args="{{ width: widths.TRUNCATE_TEXT.ONE_THIRD }}" let:args>
  <TruncateText {...args} width="{args.width || undefined}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </TruncateText>
</Story>

<Story name="Half width" args="{{ width: widths.TRUNCATE_TEXT.HALF }}" let:args>
  <TruncateText {...args} width="{args.width || undefined}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </TruncateText>
</Story>

<Story name="Three quarters width" args="{{ width: widths.TRUNCATE_TEXT.THREE_QUARTERS }}" let:args>
  <TruncateText {...args} width="{args.width || undefined}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </TruncateText>
</Story>

<Story name="Max width" args="{{ width: widths.TRUNCATE_TEXT.MAX }}" let:args>
  <TruncateText {...args} width="{args.width || undefined}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </TruncateText>
</Story>

<Story
  name="Half width with value passed as prop"
  args="{{
    width: widths.TRUNCATE_TEXT.HALF,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }}"
  let:args
>
  <TruncateText {...args} width="{args.width || undefined}" />
</Story>
