<script>
  import Table from "../Table.svelte";
  import TableRow from "../Row.svelte";
  import TableDatum from "../Datum.svelte";

  export let fixed;
  export let striped;
  export let variant;
  export let type;
</script>

<div class="p-10 w-full">
  <Table fixed="{fixed}" striped="{striped}" variant="{variant}" type="{type}" class="w-full">
    <thead slot="head">
      <TableRow type="head">
        <TableDatum>Col 1 Head</TableDatum>
        <TableDatum>Col 2 Head</TableDatum>
        <TableDatum>Col 3 Head</TableDatum>
      </TableRow>
      <TableRow type="head">
        <TableDatum>Col 1 Head</TableDatum>
        <TableDatum>Col 2 Head</TableDatum>
        <TableDatum>Col 3 Head</TableDatum>
      </TableRow>
      <TableRow type="head">
        <TableDatum>Col 1 Head</TableDatum>
        <TableDatum>Col 2 Head</TableDatum>
        <TableDatum>Col 3 Head</TableDatum>
      </TableRow>
      <TableRow type="head">
        <TableDatum>Col 1 Head</TableDatum>
        <TableDatum>Col 2 Head</TableDatum>
        <TableDatum>Col 3 Head</TableDatum>
      </TableRow>
      <TableRow type="head">
        <TableDatum>Col 1 Head</TableDatum>
        <TableDatum>Col 2 Head</TableDatum>
        <TableDatum>Col 3 Head</TableDatum>
      </TableRow>
      <TableRow type="head">
        <TableDatum>Col 1 Head</TableDatum>
        <TableDatum>Col 2 Head</TableDatum>
        <TableDatum>Col 3 Head</TableDatum>
      </TableRow>
      <TableRow type="head">
        <TableDatum>Col 1 Head</TableDatum>
        <TableDatum>Col 2 Head</TableDatum>
        <TableDatum>Col 3 Head</TableDatum>
      </TableRow>
    </thead>
    <tbody>
      <TableRow>
        <TableDatum>Col 1 data</TableDatum>
        <TableDatum>Col 2 data</TableDatum>
        <TableDatum>Col 3 data</TableDatum>
      </TableRow>
      <TableRow highlight="{true}">
        <TableDatum>Col 1 data</TableDatum>
        <TableDatum>Col 2 data</TableDatum>
        <TableDatum>Col 3 data</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>Col 1 data</TableDatum>
        <TableDatum>Col 2 data</TableDatum>
        <TableDatum>Col 3 data</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>Col 1 data</TableDatum>
        <TableDatum>Col 2 data</TableDatum>
        <TableDatum>Col 3 data</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>Col 1 data</TableDatum>
        <TableDatum>Col 2 data</TableDatum>
        <TableDatum>Col 3 data</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>Col 1 data</TableDatum>
        <TableDatum>Col 2 data</TableDatum>
        <TableDatum>Col 3 data</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>Col 1 data</TableDatum>
        <TableDatum>Col 2 data</TableDatum>
        <TableDatum>Col 3 data</TableDatum>
      </TableRow>
    </tbody>
  </Table>
</div>
