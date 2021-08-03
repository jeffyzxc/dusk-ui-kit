<style lang="postcss">
  :global .sb-table-row-limit {
    @apply w-40;
  }
</style>

<script>
  import DropDown from "@dusk-network/drop-down/DropDown.svelte";
  import Table from "@dusk-network/table/Table.svelte";
  import TableRow from "@dusk-network/table/Row.svelte";
  import TableDatum from "@dusk-network/table/Datum.svelte";
  import { rows } from "@dusk-network/table/stores/data.js";
  import { data } from "./data.js";

  let rowPerPage = 10;

  $: settings = {
    sortable: true,
    rowPerPage: rowPerPage,
  };

  function handleSelection(event) {
    rowPerPage = event.detail;
  }
</script>

<section style="height:450px">
  <Table data="{data}" settings="{settings}">
    <h3 slot="title">Table title</h3>
    <div slot="actions">
      <span>Showing</span>
      <DropDown
        class="sb-table-row-limit"
        dropUp="{true}"
        options="{[10, 20, 30, 40, 50]}"
        on:select="{handleSelection}"
      />
      <span>rows</span>
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
