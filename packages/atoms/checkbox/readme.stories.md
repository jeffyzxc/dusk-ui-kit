# ⚛️ Checkbox

Checkbox is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice.

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
<div style="background-color:lightgrey;max-width:400px;margin:0 auto;text-align:center;">
  <Checkbox variant="{variants.ATOM.CHECKBOX.BRAND}" name="check_2" id="check_1">Yo! I am a Checkbox</Checkbox>
  <Checkbox variant="{variants.ATOM.CHECKBOX.BRAND}" name="check_2" id="check_2">Yo! I am a Checkbox too</Checkbox>
</div>
```