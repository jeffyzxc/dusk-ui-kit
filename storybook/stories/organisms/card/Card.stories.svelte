<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants, states } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Card, { Content, Title, Footer, Actions } from "@dusk-network/card";
  import RichText from "@dusk-network/rich-text";
  import Icon from "@dusk-network/icon";
  import Heading from "@dusk-network/heading";
  import Button, { Group } from "@dusk-network/button";
  import { content, title, footer } from "./data.js";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Organisms/Card"
  component="{Card}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/organisms/card/Card.test.js'],
  }}"
  argTypes="{meta('organisms/card/Card', {
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
  })}"
/>

<Story name="With Rich Text" args="{{ content: `${content}` }}" let:args>
  <Card {...args}>
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
  </Card>
</Story>

<Story name="With Rich Text & Title" args="{{ content: `${content}`, title: `${title}` }}" let:args>
  <Card {...args}>
    <Title>
      <h3>{args.title}</h3>
    </Title>
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
  </Card>
</Story>

<Story
  name="With Rich Text, Title, Footer"
  args="{{
    content: `${content}`,
    title: `${title}`,
    footer: `${footer}`,
  }}"
  let:args
>
  <Card {...args}>
    <Title>
      <h3>{args.title}</h3>
    </Title>
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
    <Footer>
      <p>{args.footer}</p>
    </Footer>
  </Card>
</Story>

<Story
  name="Kitchen Skin"
  args="{{
    content: `${content}`,
    title: `${title}`,
    footer: `${footer}`,
    actions: true,
  }}"
  let:args
>
  <Card {...args}>
    <Title>
      <h3>{args.title}</h3>
    </Title>
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
    <Footer>
      <p>{args.footer}</p>
      <Actions>
        <Group>
          <Button variant="{variants.BUTTON.BRAND}">I get it</Button>
          <Button variant="{variants.BUTTON.WARNING}" outline="{true}">What is this?</Button>
        </Group>
      </Actions>
    </Footer>
  </Card>
</Story>
