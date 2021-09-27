<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants, states } from "@dusk-network/helpers";
  import Card, { Content, Title, Footer, Actions } from "@dusk-network/card";
  import RichText from "@dusk-network/rich-text";
  import Icon from "@dusk-network/icon";
  import Heading from "@dusk-network/heading";
  import Button, { Group } from "@dusk-network/button";
  import { content, title, footer } from "./data.js";
</script>

<Meta
  title="Components/Organisms/Card"
  component="{Card}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    variant: {
      options: Object.values(variants.CARD),
      control: {
        type: 'select',
      },
    },
    state: {
      options: Object.values(states.CARD),
      control: {
        type: 'select',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
  }}"
/>

<Template let:args>
  <Card {...args}>
    {#if args.title}
      <Title>
        <h3>{args.title}</h3>
      </Title>
    {/if}
    <Content>
      <RichText markdown="{args.content}" />
      <Heading>
        <svelte:fragment slot="icon">
          <Icon name="wallet-plus" />
        </svelte:fragment>
        <h2>Additional Heading!</h2>
      </Heading>
      <Heading variant="danger">
        <svelte:fragment slot="icon">
          <Icon name="alert-outline" />
        </svelte:fragment>
        <h2>Error heading!</h2>
      </Heading>
      <Heading variant="warning">
        <svelte:fragment slot="icon">
          <Icon name="alert-outline" />
        </svelte:fragment>
        <h2>Warning heading!</h2>
      </Heading>
      <Heading variant="success">
        <svelte:fragment slot="icon">
          <Icon name="alert-outline" />
        </svelte:fragment>
        <h2>Success heading!</h2>
      </Heading>
    </Content>
    {#if args.footer}
      <Footer>
        <p>{args.footer}</p>
        {#if args.actions}
          <Actions>
            <Group>
              <Button variant="{variants.BUTTON.BRAND}">I get it</Button>
              <Button variant="{variants.BUTTON.WARNING}" outline="{true}">What is this?</Button>
            </Group>
          </Actions>
        {/if}
      </Footer>
    {/if}
  </Card>
</Template>

<Story name="With Rich Text" args="{{ content: `${content}` }}" />

<Story name="With Rich Text & Title" args="{{ content: `${content}`, title: `${title}` }}" />

<Story name="With Rich Text & Title" args="{{ content: `${content}`, title: `${title}` }}" />

<Story
  name="With Rich Text, Title, Footer"
  args="{{
    content: `${content}`,
    title: `${title}`,
    footer: `${footer}`,
  }}"
/>

<Story
  name="Kitchen Skin"
  args="{{
    content: `${content}`,
    title: `${title}`,
    footer: `${footer}`,
    actions: true,
  }}"
/>
