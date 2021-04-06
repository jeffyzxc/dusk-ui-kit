# ⚛️ Icon

List of useful icons.

## Variants

| Variant   | Usage                                                                |
| --------- | -------------------------------------------------------------------- |
| Primary   | Primary buttons are used for the principle call to action on a page. |
| Secondary | Secondary buttons are used for the secondary actions on a page.      |
| Info      | Info buttons are used for a passive action on a page.                |
| Success   | Success buttons are used for a positive action on a page.            |
| Warning   | Warning buttons are used for a risky action on a page.               |
| Danger    | Danger buttons are used for a negative action on a page.             |
| Light     | Color preference depends on the background color.                    |
| Dark      | Color preference depends on the background color.                    |
| White     | Color preference depends on the background color.                    |
| Black     | Color preference depends on the background color.                    |

## Size

| Size  | Usage                                                                |
| ----- | ------|
| sm    | SMALL |
| base  | BASE  |
| lg    | LARGE |
| xl    | XL    |
| xxl   | XXL   |
| xxxl  | XXXL  |

## Actions

No actions using it.

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