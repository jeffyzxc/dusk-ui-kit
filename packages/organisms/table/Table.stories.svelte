<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Table, { Row, Datum } from "@dusk-network/table";
  import { rows } from "@dusk-network/table/stores/data.js";
  import { data } from "./storybook/data.js";

  $: settings = {
    sortable: true,
    rowPerPage: 10,
    pagination: true,
    limiter: true,
  };
</script>

<Meta
  title="Components/Organisms/Table"
  component="{Table}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    data: {
      table: {
        disable: true,
      },
    },
    settings: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  <Table data="{args.data}" settings="{args.settings}">
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
    </tbody>
  </Table>
</Template>

<Story name="Kitchen sink example" args="{{ data: data, settings: settings }}" />
