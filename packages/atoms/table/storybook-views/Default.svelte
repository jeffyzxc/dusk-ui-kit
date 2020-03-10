<script>
  import Table, { Row, Datum } from "../";
</script>

<Table>
  <thead slot="head">
    <Row type="head">
      <Datum class="px-4 py-2">Col Head 1</Datum>
      <Datum class="px-4 py-2">Col Head 2</Datum>
      <Datum class="px-4 py-2">Col Head 3</Datum>
    </Row>
  </thead>
  <tbody>
    <Row>
      <Datum class="px-4 py-2">Col 1 data</Datum>
      <Datum class="px-4 py-2">Col 2 data</Datum>
      <Datum class="px-4 py-2">Col 3 data</Datum>
    </Row>
  </tbody>
  <tfoot slot="foot">
    <Row type="foot">
      <Datum class="px-4 py-2">Col 1 Foot</Datum>
      <Datum class="px-4 py-2">Col 2 Foot</Datum>
      <Datum class="px-4 py-2">Col 3 Foot</Datum>
    </Row>
  </tfoot>
</Table>
