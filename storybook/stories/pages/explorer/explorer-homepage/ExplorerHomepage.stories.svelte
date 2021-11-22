<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/explorer-homepage";
  import results from "../../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Card, { Content } from "@dusk-network/card";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Button from "@dusk-network/button";
  import Control from "@dusk-network/control";
  import Icon from "@dusk-network/icon";
  import Form from "@dusk-network/form";
  import TextField from "@dusk-network/text-field";
  import TruncateText from "@dusk-network/truncate-text";
  import Table, { Row, Datum } from "@dusk-network/table";
  import meta from "../../../meta";
  import * as yup from "yup";
  import { latest } from "./data.js";

  // JSON.parse(latest.data);

  const blocks = JSON.parse(latest).data.blocks;
  const blocksSettings = {
    sortable: false,
    rowsPerPage: 10,
    pagination: false,
    limiter: false,
  };
  const transactions = JSON.parse(latest).data.transactions;
  const transactionsSettings = {
    sortable: false,
    rowsPerPage: 10,
    pagination: false,
    limiter: false,
  };

  let submitted = false;
  let fields = {
    search_term: "",
  };
  let schema = yup.object().shape({
    search_term: yup
      .string()
      .required()
      .label("Search term")
      .matches(/^([0-9a-fA-F]{64}|\d+)$/g, "should either be a hash or block height value"),
  });
  let blockRows;
  let transactionRows;
</script>

<Meta
  title="Pages/Explorer/Homepage"
  decorators="{[withTests({ results })]}"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/explorer-homepage/ExplorerHomepage.test.js'],
  }}"
  argTypes="{meta('templates/explorer-homepage/ExplorerHomepage', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="control-panel">
      <Card>
        <Content>
          <Form
            submitted="{submitted}"
            schema="{schema}"
            fields="{fields}"
            submitHandler="{async () => {
              submitted = true;
              if (schema.isValidSync(fields)) {
                alert('Form is valid, search can proceed.');
              }
            }}"
          >
            <Control name="search_term" width="full" let:id let:state>
              <TextField
                placeholder="Search for a block hash, block height or transaction hash"
                bind:value="{fields.search_term}"
                id="{id}"
                state="{state}"
              />
              <Button
                variant="{state == 'danger' ? 'danger' : 'brand'}"
                slot="buttonPostfix"
                type="submit"
                disable="{submitted}"
              >
                <Icon name="magnify" size="sm" />
              </Button>
            </Control>
          </Form>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="latest-blocks">
      <Table
        class="explorer-homepage__blocks"
        data="{blocks}"
        settings="{blocksSettings}"
        bind:dataRows="{blockRows}"
      >
        <h2 slot="title">Latest Blocks</h2>
        <tbody>
          {#if blockRows}
            {#each $blockRows as block}
              {#if block.header}
                <Row on:click="{() => alert('Row clicked')}">
                  {#if block}
                    <Datum cols="3">
                      <!-- <span class="flex flex-no-wrap items-center space-x-2"> -->
                      <Icon name="cube-outline" tooltip="Block height" />
                      <a href="{`/blocks/block?id=${block.header.hash}`}">
                        {block.header.height}
                      </a>
                      <!-- </span> -->
                    </Datum>
                    <Datum cols="6">
                      <!-- <span class="flex flex-no-wrap items-center space-x-2"> -->
                      <Icon name="timer-sand" tooltip="Block time" />
                      {block.header.timestamp}
                      <!-- </span> -->
                    </Datum>
                    <Datum cols="3">
                      <abbr title="Transactions">Txns</abbr>: {block.transactions.length}
                    </Datum>
                  {/if}
                </Row>
              {/if}
            {/each}
          {:else}
            <Row>
              <Datum cols="12">
                <span class="color-purple-500">No blocks found.</span>
              </Datum>
            </Row>
          {/if}
        </tbody>
        <svelte:fragment slot="actions">
          <Button variant="brand" outline="{true}">View all blocks</Button>
        </svelte:fragment>
      </Table>
    </svelte:fragment>
    <svelte:fragment slot="latest-transactions">
      <Table
        class="explorer-homepage__transactions"
        data="{transactions}"
        settings="{transactionsSettings}"
        bind:dataRows="{transactionRows}"
      >
        <h2 slot="title">Latest Transactions</h2>
        <tbody>
          {#if transactionRows}
            {#each $transactionRows as transaction}
              <Row on:click="{() => alert('Transaction clicked')}">
                <Datum cols="12">
                  <Icon name="pound-box-outline" tooltip="transaction" />
                  <a href="{`/transactions/transaction?id=${transaction.txid}`}">
                    <TruncateText width="half">
                      {transaction.txid}
                    </TruncateText>
                  </a>
                </Datum>
              </Row>
            {/each}
          {:else}
            <Row>
              <Datum cols="12">
                <span class="color-purple-500">No blocks found.</span>
              </Datum>
            </Row>
          {/if}
        </tbody>
        <svelte:fragment slot="actions">
          <Button variant="brand" outline="{true}">View all blocks</Button>
        </svelte:fragment>
      </Table>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
