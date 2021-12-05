<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/explorer-charts";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Card, { Content, Title } from "@dusk-network/card";
  import Chart from "@dusk-network/chart";
  import Heading from "@dusk-network/heading";
  import RichText from "@dusk-network/rich-text";
  import Navbar from "../_Navbar.svelte";
  import Search from "../_Search.svelte";
  import Footer from "../_Footer.svelte";
  import meta from "../../../meta";
  import { marketData } from "./data.js";

  const prices = JSON.parse(marketData).prices;
  const marketCaps = JSON.parse(marketData).market_caps;

  const mapData = {
    markers: [
      { long: 5, lat: 52, count: 55 },
      { long: -78, lat: 41, count: 77 },
      { long: -70, lat: 53, count: 10 },
    ],
  };

  let priceData = {};
  priceData.title = undefined;
  priceData.xKey = "date";
  priceData.yKey = "price";
  priceData.groups = prices.map((group) => {
    return {
      [priceData.xKey]: group[0],
      [priceData.yKey]: group[1],
    };
  });

  let marketCapData = {};
  marketCapData.title = undefined;
  marketCapData.xKey = "date";
  marketCapData.yKey = "price";
  marketCapData.groups = marketCaps.map((group) => {
    return {
      [marketCapData.xKey]: group[0],
      [marketCapData.yKey]: group[1],
    };
  });
</script>

<Meta
  title="Pages/Explorer/Charts"
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
    // jest: ['packages/templates/explorer-charts/ExplorerCharts.test.js'],
  }}"
  argTypes="{meta('templates/explorer-charts/ExplorerCharts', {})}"
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
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="map">
      <Card>
        <Chart aspectRatio="1.7" type="world-map" data="{mapData}" />
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="market-data">
      <Heading><h2>Market Data</h2></Heading>
      <Card>
        <Title>
          <h3>Dusk Price</h3>
        </Title>
        <Content>
          <RichText>
            <h4>$0.23 <small class="success">+2%</small></h4>
          </RichText>
          <div style="height: 65px">
            <Chart type="line" data="{priceData}" />
          </div>
        </Content>
      </Card>
      <Card>
        <Title>
          <h3>Dusk Market Cap</h3>
        </Title>
        <Content>
          <RichText>
            <h4>$92.44 M</h4>
          </RichText>
          <div style="height: 65px">
            <Chart type="bar-horizontal" data="{marketCapData}" />
          </div>
        </Content>
      </Card>
    </svelte:fragment>
    <!-- <svelte:fragment slot="blockchain-data">
      <Heading><h2>Blockchain Data</h2></Heading>
      <Card>
        <Title>
          <h3>Transaction per second</h3>
        </Title>
        <Content>
          Chart here
        </Content>
      </Card>
      <Card>
        <Title>
          <h3>Average Block Time</h3>
        </Title>
        <Content>
          Chart here
        </Content>
      </Card>
      <Card>
        <Title>
          <h3>Average Gas Price</h3>
        </Title>
        <Content>
          Chart here
        </Content>
      </Card> 
    </svelte:fragment>-->
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
