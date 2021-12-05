<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/explorer-list";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import Icon from "@dusk-network/icon";
  import DateText from "@dusk-network/date-text";
  import Table, { Row, Datum } from "@dusk-network/table";
  import meta from "../../../meta";
  import "../../../i18n.svelte";
  import { blocks } from "./data.js";
  import { number } from "svelte-i18n";

  // JSON.parse(latest.data);

  const block = JSON.parse(blocks).data.blocks;
  const blockSettings = {
    sortable: false,
    rowsPerPage: 10,
    pagination: true,
    limiter: false,
  };

  let blockRows;
</script>

<Meta
  title="Pages/Explorer/All Blocks"
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
    // jest: ['packages/templates/explorer-list/ExplorerList.test.js'],
  }}"
  argTypes="{meta('templates/explorer-list/ExplorerList', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="list">
      <Table
        class="explorer-homepage__blocks"
        data="{block}"
        settings="{blockSettings}"
        bind:dataRows="{blockRows}"
      >
        <div slot="title">
          <Breadcrumb href="javascript:;" on:exit="{() => {}}">
            <Item>Blocks</Item>
          </Breadcrumb>
        </div>
        <thead slot="head">
          <Row type="head">
            <Datum cols="1"><Icon name="cube-outline" /> <span>Block</span></Datum>
            <Datum cols="2"><Icon name="timer-sand" /> <span>Finalised</span></Datum>
            <Datum cols="2"><Icon name="gas-station-outline" /> <span>Gas used</span></Datum>
            <Datum cols="2"><Icon name="gas-limit" /> <span>Gas limit</span></Datum>
            <Datum cols="2"><Icon name="gas-average" /> <span>Gas avg. price</span></Datum>
            <Datum cols="1"><abbr title="Transactions">#Txns</abbr></Datum>
            <Datum cols="2"><Icon name="crown-outline" /> <span>Reward</span></Datum>
          </Row>
        </thead>
        <tbody>
          {#if blockRows}
            {#each $blockRows as block}
              {#if block.header}
                <Row on:click="{() => alert('Row clicked')}">
                  {#if block}
                    <Datum cols="1">
                      <a
                        style="display:flex;column-gap: 8px"
                        href="{`/block?id=${block.header.hash}/details`}"
                      >
                        <Icon name="eye-circle-outline" /> <span>{block.header.height}</span>
                      </a>
                    </Datum>
                    <Datum cols="2">
                      <DateText time="{block.header.timestamp}" />
                    </Datum>
                    <Datum cols="2">
                      {$number(block.transactions[0].gasprice)}
                    </Datum>
                    <Datum cols="2">
                      {$number(block.transactions[0].gaslimit)}
                    </Datum>
                    <Datum cols="2">??</Datum>
                    <Datum cols="1">
                      {block.transactions.length}
                    </Datum>
                    <Datum cols="2">
                      {$number(block.header.reward)}
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
      </Table>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
