<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/devops-dashboard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Card, { Content } from "@dusk-network/card";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Button, { Label, Group } from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import Toggle from "@dusk-network/toggle";
  import Table, { Row, Datum } from "@dusk-network/table";
  import meta from "../../../meta";
  // import * as yup from "yup";
  // import { latest } from "./data.js";

  // JSON.parse(latest.data);

  // const blocks = JSON.parse(latest).data.blocks;
  // const blocksSettings = {
  //   sortable: false,
  //   rowsPerPage: 10,
  //   pagination: false,
  //   limiter: false,
  // };
  // const transactions = JSON.parse(latest).data.transactions;
  const settings = {
    sortable: false,
    rowsPerPage: 10,
    pagination: false,
    limiter: false,
  };

  // let submitted = false;
  // let fields = {
  //   search_term: "",
  // };
  // let schema = yup.object().shape({
  //   search_term: yup
  //     .string()
  //     .required()
  //     .label("Search term")
  //     .matches(/^([0-9a-fA-F]{64}|\d+)$/g, "should either be a hash or block height value"),
  // });
  // let blockRows;
  // let transactionRows;
</script>

<Meta
  title="Pages/DevOps/Dashboard"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/devops-dashboard/DevopsDashboard.test.js'],
  }}"
  argTypes="{meta('templates/devops-dashboard/DevopsDashboard', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="map">
      <Card>
        <Content>MAP Chart here!</Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="node-status">
      <Table settings="{settings}">
        <h2 slot="title">Node Status</h2>
        <thead slot="head">
          <Row type="head">
            <Datum cols="3"><strong>Total</strong></Datum>
            <Datum cols="3"><strong>Free</strong></Datum>
            <Datum cols="3"><strong>Used</strong></Datum>
            <Datum cols="3"><strong>Offline</strong></Datum>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Datum cols="3">
              <strong>228</strong>
            </Datum>
            <Datum cols="3">
              <strong>48</strong>
            </Datum>
            <Datum cols="3">
              <strong>210</strong>
            </Datum>
            <Datum cols="3">
              <strong>70</strong>
            </Datum>
          </Row>
        </tbody>
        <svelte:fragment slot="actions">
          <Group>
            <Button variant="brand" outline="{true}"
              ><Icon name="plus-circle-outline" /> <Label>CREATE TESTNET</Label></Button
            >
            <Button variant="danger" outline="{true}"
              ><Icon name="trash-can-outline" /> <Label>DELETE TESTNET</Label></Button
            >
          </Group>
        </svelte:fragment>
      </Table>
    </svelte:fragment>
    <svelte:fragment slot="deployed-networks">
      <Table settings="{settings}">
        <h2 slot="title">Deployed Testnets</h2>
        <thead slot="head">
          <Row type="head">
            <Datum cols="1" />
            <Datum cols="2">Users</Datum>
            <Datum cols="1">Nodes</Datum>
            <Datum cols="2">Name</Datum>
            <Datum cols="2">Started</Datum>
            <Datum cols="2">Expiration</Datum>
            <Datum cols="2">Resources</Datum>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Datum cols="1">
              <Toggle
                type="checkbox"
                name="checkbox"
                id="checkbox"
                variant="brand"
                value="{false}"
                on:change="{() => {
                  alert('checked');
                }}"
              />
            </Datum>
            <Datum cols="2">Fulvio</Datum>
            <Datum cols="1">250</Datum>
            <Datum cols="2">master-node</Datum>
            <Datum cols="2">11-11-21 13:52 UTC</Datum>
            <Datum cols="2">11-11-21 13:52 UTC</Datum>
            <Datum cols="2">
              <a href="/somewhere">
                <Icon name="chart-bell-curve" tooltip="add something" />
              </a>
              <a href="/somewhere">
                <Icon name="link-variant" tooltip="add something" />
              </a>
              <a href="/somewhere">
                <Icon name="server" tooltip="add something" />
              </a>
            </Datum>
          </Row>
        </tbody>
      </Table>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
