<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/devops-dashboard";
  import results from "../../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Card from "@dusk-network/card";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Button, { Label, Group } from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import Toggle from "@dusk-network/toggle";
  import Table, { Row, Datum } from "@dusk-network/table";
  import Chart from "@dusk-network/chart";
  import meta from "../../../meta";

  const chartData = {
    title: "Nodes: 142",
    markers: [
      { long: 5, lat: 52, count: 55 },
      { long: -78, lat: 41, count: 77 },
      { long: -70, lat: 53, count: 10 },
    ],
    height: 214,
    width: 479,
  };

  const settings = {
    sortable: false,
    rowsPerPage: 10,
    pagination: false,
    limiter: false,
  };
</script>

<Meta
  title="Pages/DevOps/Dashboard"
  decorators="{[withTests({ results })]}"
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
        <Chart type="world-map" data="{chartData}" />
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
