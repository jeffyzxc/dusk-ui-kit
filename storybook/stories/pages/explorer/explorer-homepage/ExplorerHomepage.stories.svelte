<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/explorer-homepage";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import SkeletonLoader from "@dusk-network/skeleton-loader";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Navbar from "../_Navbar.svelte";
  import Search from "../_Search.svelte";
  import Footer from "../_Footer.svelte";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import TruncateText from "@dusk-network/truncate-text";
  import DateText from "@dusk-network/date-text";
  import Statistic from "@dusk-network/statistic";
  import Group from "@dusk-network/group";
  import Table, { Row, Datum } from "@dusk-network/table";
  import meta from "../../../meta";
  import { latest } from "./data.js";

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

  let blockRows;
  let transactionRows;
</script>

<Meta
  title="Pages/Explorer/Homepage"
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
    // jest: ['packages/templates/explorer-homepage/ExplorerHomepage.test.js'],
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
          <Search />
          <Group grid="{true}">
            <Statistic title="DUSK Price">
              <svelte:fragment slot="icon">
                <Icon name="dusk-ticker" variant="brand" size="xxxl" />
              </svelte:fragment>
              <p>$0,2947 (<span class="text-green-500">+1.76%</span>)</p>
            </Statistic>
            <Statistic title="Estimated Total Staked">
              <svelte:fragment slot="icon">
                <Icon name="database" variant="brand" size="xxxl" />
              </svelte:fragment>
              <p>100.000.000 DUSK</p>
            </Statistic>
            <Statistic title="Market Cap">
              <svelte:fragment slot="icon">
                <Icon name="chart-areaspline" variant="brand" size="xxxl" />
              </svelte:fragment>
              <p>$108.048.497</p>
            </Statistic>
            <Statistic title="Transactions">
              <svelte:fragment slot="icon">
                <Icon name="pound-box-outline" variant="brand" size="xxxl" />
              </svelte:fragment>
              <p>150786</p>
            </Statistic>
            <Statistic title="Average Gas Price">
              <svelte:fragment slot="icon">
                <Icon name="gauge" variant="brand" size="xxxl" />
              </svelte:fragment>
              <p>1.54 DUSK</p>
            </Statistic>
            <Statistic title="Provisioners">
              <svelte:fragment slot="icon">
                <Icon name="contacts" variant="brand" size="xxxl" />
              </svelte:fragment>
              <p>88,880</p>
            </Statistic>
          </Group>
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
        <thead slot="head">
          <Row type="head">
            <Datum cols="4"
              ><Icon name="cube-outline" tooltip="Block height" /> <span>Block</span></Datum
            >
            <Datum cols="5"><Icon name="timer-sand" tooltip="Block time" /> <span>Age</span></Datum>
            <Datum cols="3"><abbr title="Transactions">Txns</abbr></Datum>
          </Row>
        </thead>
        <tbody>
          {#if blockRows}
            {#each $blockRows as block}
              {#if block.header}
                <Row on:click="{() => alert('Row clicked')}">
                  {#if block}
                    <Datum cols="4">
                      <a href="{`/blocks/block?id=${block.header.hash}`}">
                        {block.header.height}
                      </a>
                    </Datum>
                    <Datum cols="5">
                      <DateText time="{block.header.timestamp}" />
                    </Datum>
                    <Datum cols="3">
                      {block.transactions.length}
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
        <thead slot="head">
          <Row type="head">
            <Datum cols="5"
              ><Icon name="cube-outline" tooltip="Block height" /> <span>Hash</span></Datum
            >
            <Datum cols="4"><Icon name="timer-sand" tooltip="Block time" /> <span>Age</span></Datum>
            <Datum cols="3">Method</Datum>
          </Row>
        </thead>
        <tbody>
          {#if transactionRows}
            {#each $transactionRows as transaction}
              <Row on:click="{() => alert('Transaction clicked')}">
                <Datum cols="5">
                  <Icon name="pound-box-outline" tooltip="transaction" />
                  <a href="{`/transactions/transaction?id=${transaction.txid}`}">
                    <TruncateText width="quarter" text="{transaction.txid}" />
                  </a>
                </Datum>
                <Datum cols="4">???</Datum>
                <Datum cols="3">???</Datum>
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
          <Button variant="brand" outline="{true}">View all transactions</Button>
        </svelte:fragment>
      </Table>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>

<Story
  name="Loading State"
  args="{{ isLoading: { control_panel: true, latest_blocks: true, latest_transactions: true } }}"
  let:args
>
  <Template isLoading="{args.isLoading}">
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="control-panel">
      <SkeletonLoader
        rounded="{true}"
        height="656px"
        extraSmallScreenHeight="656px"
        smallScreenHeight="404px"
        mediumScreenHeight="404px"
        largeScreenHeight="320px"
        extraLargeScreenHeight="320px"
        jumboScreenHeight="320px"
      />
    </svelte:fragment>
    <svelte:fragment slot="latest-blocks">
      <SkeletonLoader
        rounded="{true}"
        height="779px"
        extraSmallScreenHeight="779px"
        smallScreenHeight="779px"
        mediumScreenHeight="779px"
        largeScreenHeight="779px"
        extraLargeScreenHeight="779px"
        jumboScreenHeight="779px"
      />
    </svelte:fragment>
    <svelte:fragment slot="latest-transactions">
      <SkeletonLoader
        rounded="{true}"
        height="779px"
        extraSmallScreenHeight="779px"
        smallScreenHeight="779px"
        mediumScreenHeight="779px"
        largeScreenHeight="779px"
        extraLargeScreenHeight="779px"
        jumboScreenHeight="779px"
      />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
