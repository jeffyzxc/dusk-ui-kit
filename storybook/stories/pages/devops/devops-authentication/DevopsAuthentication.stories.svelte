<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/devops-centered";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Card, { Content, Title } from "@dusk-network/card";
  import Control from "@dusk-network/control";
  import Form from "@dusk-network/form";
  import TextField from "@dusk-network/text-field";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Button, { Label, Group } from "@dusk-network/button";
  import meta from "../../../meta";
  import * as yup from "yup";

  let submitted = false;
  let fields = {
    email: "",
    password: "",
  };
  let schema = yup.object().shape({
    email: yup.string().email().required().label("Email address"),
    password: yup.string().required().label("Password"),
  });
</script>

<Meta
  title="Pages/DevOps/Authentication"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    darkMode: {
      stylePreview: false,
    },
    // jest: ['packages/templates/devops-dashboard/DevopsDashboard.test.js'],
  }}"
  argTypes="{meta('templates/default/Default', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar activePage="authentication" />
    </svelte:fragment>
    <Card>
      <Title>
        <h1>Testnet Dashboard Login</h1>
      </Title>
      <Content>
        <Form
          submitted="{submitted}"
          schema="{schema}"
          fields="{fields}"
          submitHandler="{async () => {
            submitted = true;
            console.log('submitted');
            if (schema.isValidSync(fields)) {
              alert('Form is valid, search can proceed.');
            }
          }}"
        >
          <Control name="email" width="full" let:id let:state>
            <TextField
              id="{id}"
              state="{state}"
              bind:value="{fields.email}"
              type="email"
              placeholder="Email address"
            />
          </Control>
          <Control name="password" width="full" let:id let:state>
            <TextField
              id="{id}"
              state="{state}"
              bind:value="{fields.password}"
              type="password"
              placeholder="Password"
            />
          </Control>
          <Control width="full">
            <Group align="center">
              <Button type="submit" size="lg" variant="brand" disable="{submitted}">
                <Label>Login</Label>
              </Button>
            </Group>
          </Control>
        </Form>
      </Content>
    </Card>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
