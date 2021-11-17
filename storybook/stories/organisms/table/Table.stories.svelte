<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Table, { Row, Datum } from "@dusk-network/table";
  import { data } from "./data.js";
  import meta from "../../meta.js";

  const settings = {
    sortable: true,
    rowsPerPage: 10,
    pagination: true,
    limiter: true,
  };

  let rows;
</script>

<Meta
  title="Components/Organisms/Table"
  decorators="{[withTests({ results })]}"
  component="{Table}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/organisms/table/Table.test.js'],
  }}"
  argTypes="{meta('organisms/table/Table', {})}"
/>

<Story name="Kitchen sink example" args="{{ data: data, settings: settings }}" let:args>
  <Table data="{args.data}" bind:dataRows="{rows}" settings="{args.settings}">
    <h3 slot="title">Table title</h3>
    <thead slot="head">
      <Row type="head">
        <Datum key="id" cols="2">ID</Datum>
        <Datum key="first_name" cols="3">First Name</Datum>
        <Datum key="last_name" cols="3">Last Name</Datum>
        <Datum key="email" cols="4">Email</Datum>
        <Datum hidden="{true}">Extra Details</Datum>
      </Row>
    </thead>
    <tbody>
      {#if rows}
        {#each $rows as row}
          <Row>
            <Datum cols="2"><span>{row.id}</span></Datum>
            <Datum cols="3"><span>{row.first_name}</span></Datum>
            <Datum cols="3"><span>{row.last_name}</span></Datum>
            <Datum cols="4"><span>{row.email}</span></Datum>
            <Datum hidden="{true}">
              <p>Some hidden info!</p>
            </Datum>
          </Row>
        {/each}
      {/if}
    </tbody>
  </Table>
</Story>
