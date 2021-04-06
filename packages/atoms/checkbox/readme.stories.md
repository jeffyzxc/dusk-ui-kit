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

Checkbox is treated as text, which means it's size is the same as the font-size used. Checkbox's placed on the left side of the content unless otherwise is stated. It can be aligned center or right as well.

| Size       | Usage                                                                |
| -----      | -------------------------------------------------------------------- |
| font-size  | Same size as the font-size, can be aligned left, center or right.    |

## Actions

Can toggle between an affermative and negative status.

## Usage

```js
<script>
  import Checkbox from "@dusk-network/checkbox"; 
  import { variants } from "@dusk-network/helpers";
</script>
//<!-- Variants are imported from the helpers dir of dusk-network. -->
<Checkbox variant="{variants.ATOM.CHECKBOX.BRAND}" name="check_2" id="check_1">Yo! I am a Checkbox</Checkbox>
<Checkbox variant="{variants.ATOM.CHECKBOX.BRAND}" name="check_2" id="check_2">Yo! I am a Checkbox too</Checkbox>
```