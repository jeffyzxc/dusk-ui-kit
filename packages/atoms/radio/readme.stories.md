# ⚛️ Radio

Radio's checkbox buttons are generally used in radio groups—collections of radio buttons describing a set of related options. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.

## Variants

Radio buttons come in a variety of flavours that should be utilised according to the following instructions.

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

## Actions

Only one radio button in a given group can be selected at the same time.

## Usage

```js
<script>
  import Radio from "@dusk-network/radio";
  import { variants } from "@dusk-network/helpers";
</script>
<div style="background-color:lightgrey;max-width:400px;margin:0 auto;text-align:center;">
  <Radio variant="{variants.ATOM.RADIO.LIGHT}" name="radio" id="radio_1">Yo! I am a Radio</Radio>
  <Radio variant="{variants.ATOM.RADIO.LIGHT}" name="radio" id="radio_2">Yo! I am a Radio too</Radio>
</div>
```