<script>
  import Table, { Row, Datum } from "../";
</script>

<Table>
  <thead slot="head">
    <Row type="head">
      <Datum>Col 1 Head</Datum>
      <Datum>Col 2 Head</Datum>
      <Datum>Col 3 Head</Datum>
    </Row>
  </thead>
  <tbody>
    <Row>
      <Datum>Col 1 data</Datum>
      <Datum>Col 2 data</Datum>
      <Datum>Col 3 data</Datum>
    </Row>
  </tbody>
  <tfoot slot="foot">
    <Row type="foot">
      <Datum>Col 1 Foot</Datum>
      <Datum>Col 2 Foot</Datum>
      <Datum>Col 3 Foot</Datum>
    </Row>
  </tfoot>
</Table>
