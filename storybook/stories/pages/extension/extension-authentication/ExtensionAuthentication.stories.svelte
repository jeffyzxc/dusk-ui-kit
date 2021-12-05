<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { linkTo } from "@storybook/addon-links";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/extension-default";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Control from "@dusk-network/control";
  import Form from "@dusk-network/form";
  import TextField from "@dusk-network/text-field";
  import Logo from "../_Logo.svelte";
  import Icon from "@dusk-network/icon";
  import Button, { Group, Label } from "@dusk-network/button";
  import meta from "../../../meta";
  import { VIEWPORTS } from "../viewports.js";
  import * as yup from "yup";

  let submitted = false;
  let fields = {
    password: "",
  };
  let schema = yup.object().shape({
    password: yup.string().required().label("Password"),
  });
</script>

<Meta
  title="Pages/Extension/Authentication"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    viewport: {
      viewports: VIEWPORTS,
      defaultViewport: 'extension',
    },
    // jest: ['packages/templates/devops-dashboard/DevopsDashboard.test.js'],
  }}"
  argTypes="{meta('templates/default/Default', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo />
    </svelte:fragment>
    <Form
      submitted="{submitted}"
      schema="{schema}"
      fields="{fields}"
      submitHandler="{async () => {
        submitted = true;
        if (schema.isValidSync(fields)) {
          console.log('send to generation...');
          linkTo('Pages/Extension/Key Generation', 'Loading State');
        }
      }}"
    >
      <Control name="password" width="full" let:id let:state>
        <TextField
          id="{id}"
          state="{state}"
          bind:value="{fields.password}"
          type="password"
          placeholder="Enter your password"
        />
        <Button
          slot="buttonPostfix"
          circle="{true}"
          type="submit"
          variant="brand"
          disable="{submitted}"
        >
          <Icon name="key-outline">Login</Icon>
        </Button>
      </Control>
    </Form>
    <svelte:fragment slot="footer">
      <Group align="center">
        <Button
          variant="brand"
          outline="{true}"
          on:click="{linkTo('Pages/Extension/Connection', 'Loaded State')}"
        >
          <Label>Reset Password</Label>
        </Button>
      </Group>
    </svelte:fragment>
  </Template>
</Story>
