<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import * as svgGenerator from "@cloudfour/simple-svg-placeholder";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/explorer-homepage";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Card, { Content } from "@dusk-network/card";
  import Table, { Row, Datum } from "@dusk-network/table";
  // import RichText from "@dusk-network/rich-text";
  // import Icon from "@dusk-network/icon";
  // import Heading from "@dusk-network/heading";
  // import Button, { Group } from "@dusk-network/button";
  import meta from "../../meta";

  console.log(svgGenerator);
</script>

<Meta
  title="Components/Templates/Explorer Homepage"
  decorators="{[withTests({ results })]}"
  component="{Template}"
  parameters="{{
    layout: 'padded',
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
    <svelte:fragment slot="control-panel">
      <Card>
        <Content>
          <img
            alt=""
            src="{svgGenerator({
              width: 180,
              height: 135,
              bgColor: '#261457',
              textColor: '#7FDBFF',
            })}"
          />
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="latest-blocks">
      <Table>
        <Row>
          <Datum>test</Datum>
          <Datum>testing</Datum>
        </Row>
      </Table>
    </svelte:fragment>
    <svelte:fragment slot="latest-transactions">
      <Table>
        <Row>
          <Datum>test</Datum>
          <Datum>testing</Datum>
        </Row>
      </Table>
    </svelte:fragment>
  </Template>
</Story>
