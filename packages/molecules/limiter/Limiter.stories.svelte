<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Limiter from "@dusk-network/limiter";
  import { data } from "./storybook/data.js";
</script>

<Meta
  title="Components/Molecules/Limiter"
  component="{Limiter}"
  parameters="{{ layout: 'centered' }}"
  argTypes="{{
    onLimit: {
      action: 'onLimit',
      table: {
        disable: true,
      },
    },
    items: {
      defaultValue: data,
      control: {
        type: 'object',
      },
    },
    options: {
      control: {
        type: 'object',
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    dropUp: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
  }}"
/>

<Template let:args>
  <Limiter {...args} on:limit="{args.onLimit}">
    <span slot="labelLeft">
      {#if args.labelLeft}{args.labelLeft} {/if}
    </span>
    <span slot="labelRight">
      {#if args.labelRight}{args.labelRight}{/if}
    </span>
  </Limiter>
</Template>

<Story name="Standard limiter" args="{{ options: [10, 20, 30, 40, 50] }}" />
<Story name="With left label" args="{{ labelLeft: 'Showing', options: [10, 20, 30, 40, 50] }}" />
<Story name="With right label" args="{{ labelRight: 'rows', options: [10, 20, 30, 40, 50] }}" />
<Story
  name="With both labels"
  args="{{ labelLeft: 'Showing', labelRight: 'rows', options: [10, 20, 30, 40, 50] }}"
/>
