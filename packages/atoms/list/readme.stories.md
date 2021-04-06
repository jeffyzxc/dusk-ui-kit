# ⚛️ List

Cards are multi-purpose components, used to contain isolated content.

## Variants

Cards come in a variety of flavours that should be utilised according to the following instructions.

| Variant                            | Usage                     |
| ---------------------------------- | ------------------------- |
| <strong>TABEL</strong>             |                           |
|- LIGHT                            -|- Background color option -|
|- DARK                             -|- Background color option -|
|- LIGHT_HIGHLIGHT                  -|- Background color option -|
|- DARK_HIGHLIGHT                   -|- Background color option -|


## Types

| Type     | Usage                   |
| -------- | ----------------------- |
| NONE     | None.                   |
| NUMBERED | listed in numbers.      |
| BULLETED | listed as bullet points.|

## Actions

No actions involve lists.

## Usage

```js
<script>
  import List, { Item } from "../";
  import { types } from "@dusk-network/helpers";
</script>

<List type="{types.ATOM.LIST.NONE}">
  <Item>List</Item>
  <Item>Item</Item>
  <Item>Test</Item>
</List>
```