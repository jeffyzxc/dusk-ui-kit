<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Wizard, { Step } from "@dusk-network/wizard";
  import ProgressBar from "@dusk-network/progress-bar";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../meta";
</script>

<Meta
  title="Components/Organisms/Wizard"
  component="{Wizard}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/organisms/wizard/Wizard.test.js'],
  }}"
  argTypes="{meta('organisms/wizard/Wizard', {})}"
/>

<Story name="Default Wizard" args="{{}}" let:args>
  <Wizard stepCount="{2}">
    <Step number="{1}">step 1</Step>
    <Step number="{2}">step 2</Step>
  </Wizard>
</Story>

<Story name="Default Wizard with title" args="{{}}" let:args>
  <Wizard stepCount="{2}">
    <h3 slot="title">Wizard title</h3>
    <Step number="{1}">step 1</Step>
    <Step number="{2}">step 2</Step>
  </Wizard>
</Story>

<Story name="Wizard with ProgressBar" args="{{}}" let:args>
  <Wizard stepCount="{2}">
    <h3 slot="title">Wizard title</h3>
    <div slot="progress-bar" let:steps let:step>
      <ProgressBar steps="{steps}" step="{step}" />
    </div>
    <Step number="{1}">step 1</Step>
    <Step number="{2}">step 2</Step>
  </Wizard>
</Story>
