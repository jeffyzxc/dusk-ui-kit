# ⚛️ Table

Cards are multi-purpose components, used to contain isolated content.

## Variants

Cards come in a variety of flavours that should be utilised according to the following instructions.

| Variant         | Usage                                                                        |
| --------------- | ---------------------------------------------------------------------------- |
| LIGHT           | Colors the table with light grey color.                                      |
| DARK            | Colors the table with dark grey color.                                       |
| LIGHT_HIGHLIGHT | Will highlight the headder of the table to make it dark and the table light. |
| DARK_HIGHLIGHT  | Will highlight the header of the table to make it light and the table dark.  |

## Types

| Type     | Usage     |
| -------- | --------- |
| BASE     | Base.     |
| COMPACT  | Compact.  |
| SPACIOUS | Spacious. |


## Usage

```js
<script>
  import Table, { Row, Datum } from "@dusk-network/table";
  import { variants, types } from "@dusk-network/helpers";
  export let fixed;
  export let striped;
</script>

<div class="p-10 w-6/12 mx-auto">
  <Table fixed="{fixed}" striped="{striped}" variant="{variants.ATOM.TABLE.DARK_HIGHLIGHT}" type="{types.ATOM.COMPACT}" class="w-full">
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
    </tbody>
  </Table>
</div>
```