<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/explorer-detail";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  // import Chip from "@dusk-network/chip";
  import Group from "@dusk-network/group";
  import Card from "@dusk-network/card";
  // import Content from "@dusk-network/content";
  import DetailList, { Item as ListItem } from "@dusk-network/detail-list";
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import SkeletonLoader from "@dusk-network/skeleton-loader";
  import TruncateText from "@dusk-network/truncate-text";
  import DateText from "@dusk-network/date-text";
  import Icon from "@dusk-network/icon";
  import Table, { Row, Datum } from "@dusk-network/table";
  import meta from "../../../meta";
  import "../../../i18n.svelte";
  import { blocks } from "./data.js";
  import { number } from "svelte-i18n";

  // JSON.parse(latest.data);

  const block = JSON.parse(blocks).data.blocks[0];
  const transactions = JSON.parse(blocks).data.blocks[0].transactions;
  const transactionTableSettings = {
    sortable: false,
    rowsPerPage: 10,
    pagination: true,
    limiter: false,
  };

  const getGasUsed = (transactions) => {
    const gasLimit = getGasLimit(transactions);
    return gasLimit * transactions.length;
  };

  const getGasLimit = (transactions) => {
    let gasLimits = [];
    transactions.forEach((transaction) => {
      gasLimits.push(transaction.gaslimit);
    });
    return Math.max(...gasLimits);
  };

  const getAverageGasPrice = (transactions) => {
    let gasPrices = [];
    transactions.forEach((transaction) => {
      gasPrices.push(transaction.gasprice);
    });
    const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
    return average(gasPrices) / 10;
  };

  const getMethodValue = (transaction) => {
    const typeId = transaction.txtype;
    let methodValue;
    switch (typeId) {
      case "1":
        methodValue = "Coinbase";
        break;
      default:
        methodValue = "Transfer";
    }
    return methodValue;
  };

  let rows;
</script>

<Meta
  title="Pages/Explorer/Block Details"
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
  argTypes="{meta('templates/explorer-detail/ExplorerDetail', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template let:width let:height>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="detail-details">
      <Card>
        <Breadcrumb href="javascript:;" on:exit="{() => {}}">
          <Item><strong>Block</strong>&nbsp;#{block.header.height}</Item>
        </Breadcrumb>
        <DetailList>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Hash </span>
            <svelte:fragment slot="definition">
              {block.header.hash}
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Height </span>
            <svelte:fragment slot="definition">
              <!-- TODO We should use a lib for responsive props -->
              <Group align="{width >= 640 ? 'left' : 'center'}">
                <svelte:fragment slot="labelLeft">
                  {$number(block.header.height)}
                </svelte:fragment>
                {#if block.header.prevblockhash}
                  <a sveltekit:prefetch href="#">
                    <Icon name="arrow-left-circle" size="sm" />
                  </a>
                {:else}
                  <Icon class="disabled" name="arrow-left-circle" size="sm" />
                {/if}
                {#if block.header.next}
                  <a sveltekit:prefetch href="#">
                    <Icon name="arrow-right-circle" size="sm" />
                  </a>
                {:else}
                  <Icon class="disabled" name="arrow-right-circle" size="sm" />
                {/if}
              </Group>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Age </span>
            <svelte:fragment slot="definition">
              <DateText time="{block.header.timestamp}" showTimestamp="{true}" />
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Transactions </span>
            <svelte:fragment slot="definition">
              {$number(block.transactions.length)}
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Block Reward </span>
            <svelte:fragment slot="definition">
              {block.header.reward} <small>DUSK</small>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Gas Used </span>
            <svelte:fragment slot="definition">
              {$number(getGasUsed(block.transactions))}
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Block Gas Limit </span>
            <svelte:fragment slot="definition">
              {$number(getGasLimit(block.transactions))}
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Average Gas Price </span>
            <svelte:fragment slot="definition">
              {$number(getAverageGasPrice(block.transactions) * 0.0000000001, {
                notation: "compact",
                compactDisplay: "long",
              })}
              <small>DUSK</small>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> Parent Hash </span>
            <svelte:fragment slot="definition">
              <a href="#">cad12d6b925fc5c0b02e51d1b3128c2d60e84f262786f2ba35d743957cda458f</a>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term"> State Root Hash </span>
            <svelte:fragment slot="definition">
              {block.header.hash}
            </svelte:fragment>
          </ListItem>
        </DetailList>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="detail-list">
      <Table data="{transactions}" settings="{transactionTableSettings}" bind:dataRows="{rows}">
        <h3 slot="title">Transactions</h3>
        <thead slot="head">
          <Row type="head">
            <Datum cols="3">Transaction Hash</Datum>
            <Datum cols="3">Age</Datum>
            <Datum cols="3">Txn Fee</Datum>
            <Datum cols="3">Type</Datum>
          </Row>
        </thead>
        <tbody>
          {#if rows}
            {#each $rows as transaction}
              <Row>
                <Datum cols="3">
                  <a href="#">
                    <TruncateText width="quarter">{transaction.blockhash}</TruncateText>
                  </a>
                </Datum>
                <Datum cols="3">
                  <DateText time="{block.header.timestamp}" />
                </Datum>
                <Datum cols="3">
                  {$number(transaction.feepaid * 0.0000000001, {
                    notation: "compact",
                    compactDisplay: "long",
                  })}
                  &nbsp;
                  <small>DUSK</small>
                </Datum>
                <Datum cols="3">
                  {getMethodValue(transaction)}
                </Datum>
              </Row>
            {/each}
          {:else}
            <Row>
              <Datum cols="12">No transactions found.</Datum>
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

<Story name="Loading State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="detail-details">
      <SkeletonLoader
        rounded="{true}"
        height="1480px"
        extraSmallScreenHeight="1480px"
        smallScreenHeight="1332px"
        mediumScreenHeight="864px"
        largeScreenHeight="520px"
        extraLargeScreenHeight="520px"
        jumboScreenHeight="520px"
      />
    </svelte:fragment>
    <svelte:fragment slot="detail-list">
      <SkeletonLoader
        rounded="{true}"
        height="200px"
        extraSmallScreenHeight="200px"
        smallScreenHeight="200px"
        mediumScreenHeight="200px"
        largeScreenHeight="200px"
        extraLargeScreenHeight="200px"
        jumboScreenHeight="200px"
      />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
