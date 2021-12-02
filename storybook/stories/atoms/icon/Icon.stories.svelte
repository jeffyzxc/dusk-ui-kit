<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import { variants, icons, sizes } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon";
  import meta from "../../meta.js";
  import "./styles.css";
</script>

<Meta
  title="Components/Atoms/Icon"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/icon/Icon.test.js'],
  }}"
  component="{Icon}"
  argTypes="{meta('atoms/icon/Icon', {
    name: {
      options: Object.values(icons),
      control: {
        type: 'select',
      },
    },
    variant: {
      options: Object.values(variants.ICON),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.values(sizes.ICON),
      control: {
        type: 'radio',
      },
    },
  })}"
/>

<Story
  name="Single icon"
  args="{{ name: 'dusk-ticker' }}"
  argTypes="{{
    collection: { table: { disable: true } },
    tooltip: { table: { disable: true } },
  }}"
  let:args
>
  <Icon {...args} />
</Story>

<Story
  name="Single icon with tooltip"
  args="{{
    name: 'dusk-ticker',
    tooltip: 'Some helpful information on what this icon represents.',
  }}"
  argTypes="{{
    collection: { table: { disable: true } },
  }}"
  let:args
>
  <Icon {...args} />
</Story>

<Story
  name="Collection"
  args="{{
    collection: true,
  }}"
  argTypes="{{
    name: { table: { disable: true } },
    tooltip: { table: { disable: true } },
  }}"
  let:args
>
  <div class="sb-icon-collection-grid">
    {#each Object.values(icons) as icon}
      <Icon name="{icon}" title="{icon}" variant="{args.variant}" size="{args.size}" />
    {/each}
  </div>
</Story>
