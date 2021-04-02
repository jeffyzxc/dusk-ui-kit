# ⚛️ Checkbox

Checkbox is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice.

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

Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated.

| Size  | Usage                                                                |
| ----- | -------------------------------------------------------------------- |
| 100%  | Wide as the max-width of the element is palced in.                   |

## Actions

Can toggle between an affermative and negative status.

## Usage

```js
<script>
  import Checkbox from "@dusk-network/checkbox";
  export let variant;
</script>
<Checkbox {variant} name="check_2" id="check_1">Yo! I am a Checkbox</Checkbox>
<Checkbox {variant} name="check_2" id="check_2">Yo! I am a Checkbox too</Checkbox>
```