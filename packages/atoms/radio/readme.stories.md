# ⚛️ Radio

Radio's checkbox buttons are generally used in radio groups—collections of radio buttons describing a set of related options. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.

## Variants

Radio buttons come in a variety of flavours that should be utilised according to the following instructions.

| Variant   | Usage                             |
| --------- | --------------------------------- |
| BRAND     | Applies a brand styling.          |
| CTA       | Applies a call to action styling. |
| Info      | Applies a info styling.           |
| Success   | Applies a success styling.        |
| Warning   | Applies a warning styling.        |
| Danger    | Applies a danger styling.         |
| LIGHT     | Applies a light styling.          |
| DARK      | Applies a dark styling.           |
| WHITE     | Applies a White styling.          |
| BLACK     | Applies a Black styling.          |

## Actions

Only one radio button in a given group can be selected at the same time.

## Usage

```js
<script>
  import Radio from "@dusk-network/radio";
  import { variants } from "@dusk-network/helpers";
</script>
<div class="p-10 w-6/12 mx-auto">
  <Radio variant="{variants.ATOM.RADIO.LIGHT}" name="radio" id="radio_1">Yo! I am a Radio</Radio>
  <Radio variant="{variants.ATOM.RADIO.LIGHT}" name="radio" id="radio_2">Yo! I am a Radio too</Radio>
</div>
```