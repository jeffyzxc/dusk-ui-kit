<script>
  import Button from "@dusk-network/button/Button.svelte";
  import LoadingIndicator from "@dusk-network/loading-indicator/LoadingIndicator.svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Table from "@dusk-network/table/Table.svelte";
  import TableRow from "@dusk-network/table/Row.svelte";
  import TableDatum from "@dusk-network/table/Datum.svelte";
  // import { rows } from "@dusk-network/table/stores/data.js";
  // import { data } from "./data.js";

  // const settings = {
  //   sortable: true,
  //   pagination: true,
  //   rowPerPage: 50,
  //   columnFilter: true,
  // };
</script>

<Table>
  <h3 slot="title">Table title</h3>
  <div slot="actions">
    <Button variant="cta" outline="{true}">Action</Button>
    <Button variant="danger" outline="{true}">Cancel</Button>
  </div>
  <thead slot="head">
    <TableRow type="head">
      <TableDatum data-key="id" cols="1">ID</TableDatum>
      <TableDatum data-key="first_name" cols="3">First Name</TableDatum>
      <TableDatum data-key="last_name" cols="3">Last Name</TableDatum>
      <TableDatum data-key="email" cols="2">Email</TableDatum>
      <TableDatum data-key="ip_address" cols="3">IP Adress</TableDatum>
    </TableRow>
  </thead>
  <tbody>
    <!-- {#each $rows as row} -->
    <TableRow>
      <TableDatum cols="4" variant="cta"><LoadingIndicator /> <span>Col 1 data</span></TableDatum>
      <TableDatum cols="4"
        ><Icon name="timeline-clock-outline" /> <span>Col 2 data</span></TableDatum
      >
      <TableDatum cols="4">Col 3 data</TableDatum>
    </TableRow>
    <TableRow>
      <TableDatum cols="4" variant="success"
        ><Icon name="check-decagram-outline" /> <span>Col 1 data</span></TableDatum
      >
      <TableDatum cols="4"
        ><Icon name="timeline-clock-outline" /> <span>Col 2 data</span></TableDatum
      >
      <TableDatum cols="4">Col 3 data</TableDatum>
    </TableRow>
    <TableRow>
      <TableDatum cols="4"><span>Col 1 data</span></TableDatum>
      <TableDatum cols="4"
        ><Icon name="timeline-clock-outline" /> <span>Col 2 data</span></TableDatum
      >
      <TableDatum cols="4">Col 3 data</TableDatum>
    </TableRow>
    <!-- {/each} -->
  </tbody>
</Table>
