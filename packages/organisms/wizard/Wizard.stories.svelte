<!-- import Default from "./storybook-views/Default.svelte";
import Card from "./storybook-views/Card.svelte";
import Wizard from "@dusk-network/wizard/Wizard.svelte";

export default {
  title: `Components/Organisms/Wizard`,
  component: Wizard,
  argTypes: {
    stepCount: {
      defaultValue: 3,
      control: {
        type: "number",
      },
    },
  },
};

const DefaultTemplate = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

const CardTemplate = (args) => ({
  Component: Card,
  props: {
    ...args,
  },
});

export const Basic = DefaultTemplate.bind({});
Basic.args = {};

export const InsideACard = CardTemplate.bind({});
Basic.args = {}; -->
<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import RichText from "@dusk-network/rich-text/RichText.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import Group from "@dusk-network/button/Group.svelte";
  import Wizard from "@dusk-network/wizard/Wizard.svelte";
  import Step from "@dusk-network/wizard/Step.svelte";
</script>

<Meta
  title="Components/Organisms/Wizard"
  component="{Wizard}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    onExit: {
      action: 'onExit',
      table: {
        disable: true,
      },
    },
    stepCount: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  <Wizard stepCount="{args.stepCount}">
    <Step number="{1}" let:next>
      <RichText>
        <p>First item content...</p>
      </RichText>
      <Group>
        <div>&nbsp;</div>
        <Button on:click="{next}">Go to step 2</Button>
      </Group>
    </Step>
    <Step number="{2}" let:previous let:next>
      <RichText><p>Second item content...</p></RichText>
      <Group>
        <Button on:click="{previous}">Go back to step 1</Button>
        <Button on:click="{next}">Go to step 3</Button>
      </Group>
    </Step>
    <Step number="{3}" let:previous>
      <RichText><p>Third item content...</p></RichText>
      <Group>
        <Button on:click="{previous}">Go back to step 2</Button>
      </Group>
    </Step>
  </Wizard>
</Template>

<Story name="3 step wizard" args="{{ stepCount: 3 }}" />
