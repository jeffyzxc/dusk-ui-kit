# ⚛️ Icon

List of useful icons.

## Variants

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

## Size

| Size  | Usage |
| ----- | ------|
| sm    | SMALL |
| base  | BASE  |
| lg    | LARGE |
| xl    | XL    |
| xxl   | XXL   |
| xxxl  | XXXL  |

## Usage

```js
<script>
  import Icon from "@dusk-network/icon";
  import { varants, sizes } from "@dusk-network/helpers"
  export let tooltip;
</script>

<Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="wallet"
    title="wallet"
    variant="{variants.ATOM.ICON.BASE}"
    tooltip="{tooltip}"
    size="{sizes.ATOM.ICON.BASE}" />
```