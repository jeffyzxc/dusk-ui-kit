<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/explorer-detail";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Chip from "@dusk-network/chip";
  import Card from "@dusk-network/card";
  import Button from "@dusk-network/button";
  import Group from "@dusk-network/group";
  import DetailList, { Item as ListItem } from "@dusk-network/detail-list";
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import SkeletonLoader from "@dusk-network/skeleton-loader";
  import RichText from "@dusk-network/rich-text";
  import Icon from "@dusk-network/icon";
  import DateText from "@dusk-network/date-text";
  import DropDown from "@dusk-network/drop-down";
  import meta from "../../../meta";
  import "../../../i18n.svelte";
  import { transactions } from "./data.js";
  import { number } from "svelte-i18n";

  const transaction = JSON.parse(transactions).data.transactions[0];
  const decodeOptions = ["Input data", "Output data"];

  let selectedDecodeOptionIndex = 0;
</script>

<Meta
  title="Pages/Explorer/Transaction Details"
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
          <Item><strong>Transaction</strong></Item>
        </Breadcrumb>
        <DetailList>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Hash</span>
            <svelte:fragment slot="definition">
              {transaction.txid}
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Status</span>
            <svelte:fragment slot="definition">
              <Chip variant="success">Success</Chip>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Age</span>
            <svelte:fragment slot="definition">
              <DateText time="" showTimestamp="{true}" />
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Type</span>
            <svelte:fragment slot="definition" />
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Input(s)</span>
            <svelte:fragment slot="definition">
              <Group>
                <Icon name="eye-off-outline" />
                <svelte:fragment slot="labelRight">Secret</svelte:fragment>
              </Group>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Outputs(s)</span>
            <svelte:fragment slot="definition">
              {transaction.txid}
              <Group>
                <svelte:fragment slot="labelLeft">
                  <strong>DUSK transferred:</strong>
                </svelte:fragment>
                <Icon name="eye-off-outline" />
                <svelte:fragment slot="labelRight">Secret</svelte:fragment>
              </Group>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Token input(s)</span>
            <svelte:fragment slot="definition">
              <Group>
                <Icon name="eye-off-outline" />
                <svelte:fragment slot="labelRight">Secret</svelte:fragment>
              </Group>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Token output(s)</span>
            <svelte:fragment slot="definition">
              {transaction.txid}
              <Group>
                <svelte:fragment slot="labelLeft">
                  <strong>DUSK transferred:</strong>
                </svelte:fragment>
                <Icon name="eye-off-outline" />
                <svelte:fragment slot="labelRight">Secret</svelte:fragment>
              </Group>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Transaction fee</span>
            <svelte:fragment slot="definition">
              {$number(transaction.feepaid * 0.0000000001, {
                notation: "compact",
                compactDisplay: "long",
              })}
              <small>DUSK</small>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Gas price</span>
            <svelte:fragment slot="definition">
              {$number(transaction.gasprice * 0.0000000001, {
                notation: "compact",
                compactDisplay: "long",
              })}
              <small>DUSK</small>
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Gas limit</span>
            <svelte:fragment slot="definition">
              {$number(transaction.gaslimit)}
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">Gas spend</span>
            <svelte:fragment slot="definition">
              {$number(879765)}
              &nbsp; ({Number.parseFloat((879765 / 1000000) * 100).toPrecision(4)}%)
            </svelte:fragment>
          </ListItem>
          <ListItem helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <span slot="term">{decodeOptions[selectedDecodeOptionIndex]}</span>
            <svelte:fragment slot="definition">
              <RichText>
                <pre>
                  <code>
Function: transfer(address recipient, uint256 amount)

MethodID: 0xa9059cbb
[0]:  000000000000000000000000dfc1d851c198f925eaf33c540a682640b730d16f
[1]:  0000000000000000000000000000000000000000002a37bfc38f196182200000
                  </code>
                </pre>
              </RichText>
              <Group>
                <DropDown
                  options="{decodeOptions}"
                  on:select="{(event) => {
                    selectedDecodeOptionIndex = decodeOptions.indexOf(event.detail);
                  }}"
                />
                <Button size="sm">Decode {decodeOptions[selectedDecodeOptionIndex]}</Button>
              </Group>
            </svelte:fragment>
          </ListItem>
        </DetailList>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>

<Story name="Loading State" args="{{ isLoading: { detail_details: true } }}" let:args>
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
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
