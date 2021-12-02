<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/devops-centered";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Card, { Content, Title } from "@dusk-network/card";
  import Control from "@dusk-network/control";
  import Toggle from "@dusk-network/toggle";
  import DropDown from "@dusk-network/drop-down";
  import Form from "@dusk-network/form";
  import TextField from "@dusk-network/text-field";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Button, { Label, Group } from "@dusk-network/button";
  import meta from "../../../meta";
  import * as yup from "yup";

  let submitted = false;
  let fields = {
    branch: "",
    number_of_nodes: 0,
    self_destruct_date: "",
    destroy_on_failure: true,
    ansible_variables: "",
  };
  let schema = yup.object().shape({
    branch: yup.string().required().label("Branch"),
    number_of_nodes: yup.number().min(1).required().label("Number of nodes"),
    self_destruct_date: yup.string().required().label("Self destruct date"),
    destroy_on_failure: yup.boolean().required().label("Destroy on failure"),
    ansible_variables: yup.string().label("Ansible variables"),
  });

  let branches = ["main", "develop", "feature/new-feature"];
  const controlType = "inline-fixed";
</script>

<Meta
  title="Pages/DevOps/Deploy Network"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
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
    <svelte:fragment slot="navbar">
      <Navbar activePage="deploy-network" />
    </svelte:fragment>
    <Card>
      <Title>
        <h1>Add Testnet Cluster</h1>
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
              alert('Form is valid');
            }
          }}"
        >
          <Control label="Branch" name="branch" type="{controlType}" width="full" let:id let:state>
            <DropDown
              id="{id}"
              options="{branches}"
              on:select="{(e) => {
                fields.branch = e.detail.value;
              }}"
            />
          </Control>
          <Control
            label="Number of nodes"
            name="number_of_nodes"
            type="{controlType}"
            width="full"
            let:id
            let:state
          >
            <TextField
              id="{id}"
              state="{state}"
              bind:value="{fields.number_of_nodes}"
              type="number"
            />
          </Control>
          <Control
            label="Self-Destruct date"
            name="self_destruct_date"
            type="{controlType}"
            width="full"
            let:id
            let:state
          >
            <TextField id="{id}" state="{state}" bind:value="{fields.self_destruct_date}" />
          </Control>
          <Control
            label="Destroy on failure"
            name="destroy_on_failure"
            type="{controlType}"
            width="full"
            let:id
            let:state
          >
            <Toggle
              type="checkbox"
              name="destroy_on_failure"
              id="{id}"
              variant="brand"
              bind:value="{fields.destroy_on_failure}"
              checked="{fields.destroy_on_failure}"
            />
          </Control>
          <Control
            label="Extra Ansible variables"
            name="ansible_variables"
            type="{controlType}"
            width="full"
            let:id
            let:state
          >
            <TextField
              id="{id}"
              state="{state}"
              bind:value="{fields.ansible_variables}"
              multiline="{true}"
            />
          </Control>
          <Control width="full">
            <Group>
              <Button size="lg" variant="brand" disable="{submitted}">
                <Label>Cancel</Label>
              </Button>
              <Button type="submit" size="lg" variant="cta" disable="{submitted}">
                <Label>Deploy</Label>
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
