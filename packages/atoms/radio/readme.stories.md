# ⚛️ Radio

Radio's checkbox buttons are generally used in radio groups—collections of radio buttons describing a set of related options. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.

## Variants

Radio buttons come in a variety of flavours that should be utilised according to the following instructions.

| Variant   | Usage                                                                |
| --------- | -------------------------------------------------------------------- |
| Primary   | Primary buttons are used for the principle call to action on a page. |
| Secondary | Secondary buttons are used for the secondary actions on a page.      |
| Info      | Info buttons are used for a passive action on a page.                |
| Success   | Success buttons are used for a positive action on a page.            |
| Warning   | Warning buttons are used for a risky action on a page.               |
| Danger    | Danger buttons are used for a negative action on a page.             |
| LIGHT     | Light grey color.                                                    |
| DARK      | Dark grey color.                                                     |
| WHITE     | White.                                                               |
| BLACK     | Black.                                                               |

## Actions

Only one radio button in a given group can be selected at the same time.

## Usage

```js
<script>
  import Radio from "@dusk-network/radio";
  import { variants } from "@dusk-network/helpers";
</script>
<Radio variant="{variants.ATOM.RADIO.LIGHT}" name="radio" id="radio_1">Yo! I am a Radio</Radio>
<Radio variant="{variants.ATOM.RADIO.LIGHT}" name="radio" id="radio_2">Yo! I am a Radio too</Radio>
```