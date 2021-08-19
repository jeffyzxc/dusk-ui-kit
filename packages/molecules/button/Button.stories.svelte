<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants, sizes, icons } from "@dusk-network/helpers";
  import Button, { Label } from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
</script>

<Meta
  title="Components/Molecules/Button"
  parameters="{{ layout: 'centered' }}"
  component="{Button}"
  args="{{
    circle: false,
    disabled: false,
    outline: false,
    size: 'default',
  }}"
  argTypes="{{
    onClick: {
      action: 'onClick',
      table: {
        disable: true,
      },
    },
    onMouseover: {
      action: 'onMouseover',
      table: {
        disable: true,
      },
    },
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
    circle: {
      control: {
        type: 'boolean',
      },
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    block: {
      table: {
        disable: true,
      },
    },
    iconLeft: {
      table: {
        disable: true,
      },
    },
    iconRight: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  <Button {...args} on:click="{args.onClick}" on:mouseover="{args.onMouseover}">
    {#if args.iconLeft}
      <Icon name="{args.iconLeft}" size="{args.size}" />
    {/if}
    <Label>{args.value}</Label>
    {#if args.iconRight}
      <Icon name="{args.iconRight}" size="{args.size}" />
    {/if}
    <svelte:fragment slot="labelRight">
      {#if args.labelRight}
        {args.labelRight}
      {/if}
    </svelte:fragment>
    <svelte:fragment slot="labelLeft">
      {#if args.labelLeft}
        {args.labelLeft}
      {/if}
    </svelte:fragment>
  </Button>
</Template>

<Story name="Default button" args="{{ value: 'I am a Button' }}" />
<Story
  name="With a left aligned icon"
  args="{{ value: 'I am a Button', iconLeft: icons.CHECK_DECAGRAM_OUTLINE }}"
/>
<Story
  name="With a right aligned icon"
  args="{{ value: 'I am a Button', iconRight: icons.CHECK_DECAGRAM_OUTLINE }}"
/>
<Story
  name="With two icons"
  args="{{
    value: 'I am a Button',
    iconLeft: icons.CHECK_DECAGRAM_OUTLINE,
    iconRight: icons.CHECK_DECAGRAM_OUTLINE,
  }}"
  argTypes="{{}}"
/>
<Story
  parameters="{{
    layout: 'padded',
  }}"
  name="Block button"
  args="{{ value: 'I am a Button', block: true }}"
/>

<Story
  parameters="{{
    layout: 'centered',
  }}"
  name="With right aligned label"
  args="{{ value: 'I am a Button', labelRight: 'I am a label' }}"
/>

<Story
  parameters="{{
    layout: 'centered',
  }}"
  name="With left aligned label"
  args="{{ value: 'I am a Button', labelLeft: 'I am a label' }}"
/>
