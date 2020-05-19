<script>
  import Table, { Row, Datum } from "../";

  export let fixed;
  export let striped;
  export let variant;
  export let type;
</script>

<Table {fixed} {striped} {variant} {type} class="w-screen">
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
    <Row highlight="{true}">
      <Datum>Col 1 data</Datum>
      <Datum>Col 2 data</Datum>
      <Datum>Col 3 data</Datum>
    </Row>
    <Row>
      <Datum>Col 1 data</Datum>
      <Datum>Col 2 data</Datum>
      <Datum>Col 3 data</Datum>
    </Row>
    <Row>
      <Datum>Col 1 data</Datum>
      <Datum>Col 2 data</Datum>
      <Datum>Col 3 data</Datum>
    </Row>
    <Row>
      <Datum>Col 1 data</Datum>
      <Datum>Col 2 data</Datum>
      <Datum>Col 3 data</Datum>
    </Row>
    <Row>
      <Datum>Col 1 data</Datum>
      <Datum>Col 2 data</Datum>
      <Datum>Col 3 data</Datum>
    </Row>
    <Row>
      <Datum>Col 1 data</Datum>
      <Datum>Col 2 data</Datum>
      <Datum>Col 3 data</Datum>
    </Row>
  </tbody>
</Table>
