# ⚛️ List

Cards are multi-purpose components, used to contain isolated content.

## Types

| Type     | Usage                   |
| -------- | ----------------------- |
| NONE     | None.                   |
| NUMBERED | listed in numbers.      |
| BULLETED | listed as bullet points.|

## Usage

```js
<script>
  import List, { Item } from "@dusk-network/list";
  import { types } from "@dusk-network/helpers";
</script>
<div style="background-color:lightgrey;max-width:400px;margin:0 auto;text-align:center;">
  <List type="{types.ATOM.LIST.NONE}">
    <Item>List</Item>
    <Item>Item</Item>
    <Item>Test</Item>
  </List>
</div>
```