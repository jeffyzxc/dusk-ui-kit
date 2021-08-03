<script>
  import Button from "@dusk-network/button/Button.svelte";
  import Table from "@dusk-network/table/Table.svelte";
  import TableRow from "@dusk-network/table/Row.svelte";
  import TableDatum from "@dusk-network/table/Datum.svelte";
  import { rows } from "@dusk-network/table/stores/data.js";
  import { data } from "./data.js";

  const settings = {
    sortable: true,
    rowPerPage: 10,
  };
</script>

<section style="height:450px">
  <Table data="{data}" settings="{settings}">
    <h3 slot="title">Table title</h3>
    <div slot="actions">
      <Button variant="cta" outline="{true}">Action</Button>
      <Button variant="danger" outline="{true}">Cancel</Button>
    </div>
    <thead slot="head">
      <TableRow type="head">
        <TableDatum key="id" cols="2">ID</TableDatum>
        <TableDatum key="first_name" cols="3">First Name</TableDatum>
        <TableDatum key="last_name" cols="3">Last Name</TableDatum>
        <TableDatum key="email" cols="4">Email</TableDatum>
      </TableRow>
    </thead>
    <tbody>
      {#each $rows as row}
        <TableRow>
          <TableDatum cols="2"><span>{row.id}</span></TableDatum>
          <TableDatum cols="3"><span>{row.first_name}</span></TableDatum>
          <TableDatum cols="3"><span>{row.last_name}</span></TableDatum>
          <TableDatum cols="4"><span>{row.email}</span></TableDatum>
        </TableRow>
      {/each}
    </tbody>
  </Table>
</section>
