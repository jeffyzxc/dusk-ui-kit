# ⚛️ Menu

Menu is a series of linked items that serve in navigating between the different pages or sections of a website.

## Variants

Menu comes in a variety of color options as listed below.

| Variant   | Usage            |
| --------- | ---------------- |
| BRAND     | Brand's color.   |
| CTA       | Yellow'ish color.|
| Info      | Skyblue color.   |
| Success   | Green color.     |
| Warning   | Orange color.    |
| Danger    | Red color.       |
| LIGHT     | Light grey color.|
| DARK      | Dark grey color. |
| WHITE     | White.           |
| BLACK     | Black.           |

## Oriantations

Menu can form either horizontally or vertically.

| Oriantation | Usage                   |
| ----------- | ----------------------- |
| HORIZONTAL  | Horizontally displayed. |
| VERTICAL    | Vertically displayed.   |

## Usage

```js
<script>
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";
  import { variants, orientations } from "@dusk-network/helpers";
  let items = [
    { id: "1", value: "Navigation item 1" },
    { id: "2", value: "Navigation item 2" },
    { id: "3", value: "Navigation item 3" },
    { id: "4", value: "Navigation item 4" },
    { id: "5", value: "Navigation item 5" },
    { id: "6", value: "Navigation item 6" },
    { id: "7", value: "Navigation item 7" },
    { id: "8", value: "Navigation item 8" },
    { id: "9", value: "Navigation item 9" },
    { id: "9", value: "Navigation item 10" },
    { id: "9", value: "Navigation item 11" },
    { id: "9", value: "Navigation item 12" },
  ];
</script>

<div class="p-10 w-6/12 mx-auto">
  <Menu orientation="{orientations.MENU.VERTICAL}" variant="{variants.MOLECULE.MENU.BRAND}">
    <List>
      {#each items as { id, value }}
        <Item href="javascript://(0)">{value}</Item>
      {/each}
    </List>
  </Menu>
</div>
```