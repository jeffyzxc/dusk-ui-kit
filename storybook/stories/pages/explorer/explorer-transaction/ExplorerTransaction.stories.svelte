<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/explorer-detail";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  // import Card from "@dusk-network/card";
  // import Content from "@dusk-network/content";
  // import DetailList, { Item as ListItem } from "@dusk-network/detail-list";
  // import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import SkeletonLoader from "@dusk-network/skeleton-loader";
  // import Icon from "@dusk-network/icon";
  // import DateText from "@dusk-network/date-text";
  // import Table, { Row, Datum } from "@dusk-network/table";
  import meta from "../../../meta";
  import "../../../i18n.svelte";
  // import { blocks } from "./data.js";
  // import { number } from "svelte-i18n";

  // JSON.parse(latest.data);

  // Lorem ipsum dolor sit amet, consectetur adipiscing elit.

  // const block = JSON.parse(blocks).data.blocks;
  // const blockSettings = {
  //   sortable: false,
  //   rowsPerPage: 10,
  //   pagination: true,
  //   limiter: false,
  // };

  // let blockRows;
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
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="detail-details" />
    <svelte:fragment slot="detail-list" />
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
    <svelte:fragment slot="detail-list" />
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
