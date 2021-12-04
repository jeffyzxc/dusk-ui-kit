<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/extension-default";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Control from "@dusk-network/control";
  import Form from "@dusk-network/form";
  import TextField from "@dusk-network/text-field";
  import Logo from "../_Logo.svelte";
  import Icon from "@dusk-network/icon";
  import Button from "@dusk-network/button";
  import meta from "../../../meta";
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
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
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
        console.log('submitted');
        if (schema.isValidSync(fields)) {
          alert('Form is valid, authentication can proceed.');
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
  </Template>
</Story>
