<style lang="postcss">
  .icon-collection-grid {
    @apply grid grid-cols-4 gap-5 w-full;
  }
</style>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants, icons, sizes } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon";
</script>

<Meta
  title="Components/Atoms/Icon"
  component="{Icon}"
  parameters="{{ layout: 'centered' }}"
  argTypes="{{
    name: {
      control: {
        type: 'select',
        options: Object.values(icons),
      },
    },
    variant: {
      control: {
        type: 'select',
        options: Object.values(variants.ICON),
      },
    },
    size: {
      control: {
        type: 'radio',
        options: Object.values(sizes.ICON),
      },
    },
    tooltip: {
      control: {
        type: 'text',
      },
    },
    collection: {
      table: {
        disable: true,
      },
    },
    viewbox: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  {#if args.collection}
    <div class="icon-collection-grid">
      {#each Object.values(icons) as icon}
        <Icon name="{icon}" title="{icon}" variant="{args.variant}" size="{args.size}" />
      {/each}
    </div>
  {:else}
    <Icon {...args} />
  {/if}
</Template>

<Story
  name="Single icon"
  args="{{ name: 'dusk-ticker' }}"
  argTypes="{{
    collection: { table: { disable: true } },
    tooltip: { table: { disable: true } },
  }}"
/>
<Story
  name="Single icon with tooltip"
  args="{{
    name: 'dusk-ticker',
    tooltip: 'Some helpful information on what this icon represents.',
  }}"
  argTypes="{{
    collection: { table: { disable: true } },
  }}"
/>
<Story
  name="Collection"
  args="{{
    collection: true,
  }}"
  argTypes="{{
    name: { table: { disable: true } },
    tooltip: { table: { disable: true } },
  }}"
/>
