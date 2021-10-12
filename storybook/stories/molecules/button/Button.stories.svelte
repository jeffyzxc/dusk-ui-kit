<script>
  // import DocsPage from "./Button.stories.mdx";
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants, sizes, icons } from "@dusk-network/helpers";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Button, { Label, Group } from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Button"
  decorators="{[withTests({ results })]}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/button/Button.test.js'],
  }}"
  component="{Button}"
  argTypes="{meta('button/Button', {
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.BUTTON),
      },
    },
    size: {
      control: {
        type: 'radio',
        options: Object.values(sizes.BUTTON),
      },
    },
  })}"
  args="{{
    default_slot: 'Button',
  }}"
/>

<Story name="Basic button" let:args>
  <Button {...args}>{args.default_slot}</Button>
</Story>

<Story
  name="With a left aligned icon"
  args="{{ icon: icons.CHECK_DECAGRAM_OUTLINE }}"
  argTypes="{{
    icon: {
      control: {
        type: 'select',
        options: Object.values(icons),
      },
    },
  }}"
  let:args
>
  <Button {...args}>
    <Icon name="{args.icon}" size="{args.size}" />
    <Label>{args.default_slot}</Label>
  </Button>
</Story>

<Story
  name="With a right aligned icon"
  args="{{ icon: icons.CHECK_DECAGRAM_OUTLINE }}"
  argTypes="{{
    icon: {
      control: {
        type: 'select',
        options: Object.values(icons),
      },
    },
  }}"
  let:args
>
  <Button {...args}>
    <Label>{args.default_slot}</Label>
    <Icon name="{args.icon}" size="{args.size}" />
  </Button>
</Story>

<Story
  parameters="{{
    layout: 'padded',
  }}"
  name="Block"
  args="{{ block: true }}"
  let:args
>
  <Button {...args}>
    {args.default_slot}
  </Button>
</Story>

<Story
  parameters="{{
    layout: 'centered',
  }}"
  name="With right aligned label"
  args="{{ labelRight_slot: 'I am a label' }}"
  let:args
>
  <Button {...args}>
    {args.default_slot}
    <svelte:fragment slot="labelRight">
      {args.labelRight_slot}
    </svelte:fragment>
  </Button>
</Story>

<Story
  parameters="{{
    layout: 'centered',
  }}"
  name="With left aligned label"
  args="{{ labelLeft_slot: 'I am a label' }}"
  let:args
>
  <Button {...args}>
    {args.default_slot}
    <svelte:fragment slot="labelLeft">
      {args.labelLeft_slot}
    </svelte:fragment>
  </Button>
</Story>

<Story id="ButtonGroup" name="Group" let:args>
  <Group>
    <Button {...args}>{args.default_slot}</Button>
    <Button {...args}>{args.default_slot}</Button>
    <Button {...args}>{args.default_slot}</Button>
  </Group>
</Story>
