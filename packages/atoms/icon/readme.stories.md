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

## Size

| Size  | Usage                                                                |
| ----- | -------------------------------------------------------------------- |
| Large | Primary buttons are used for the principle call to action on a page. |
| Small | Secondary buttons are used for the secondary actions on a page.      |

## Actions

No actions using it.

## Usage

```js
<script>
  import Icon from "@dusk-network/icon";
  export let variant;
  export let size;
  export let tooltip;
</script>

<Icon
    class="h-32 w-32 flex flex-wrap content-center justify-center"
    name="wallet"
    title="wallet"
    variant="{variant}"
    tooltip="{tooltip}"
    size="{size}" />
```