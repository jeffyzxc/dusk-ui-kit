# ⚛️ Text Field

A text box, text field or text entry box is a control element of a graphical user interface, that should enable the user to input text information to be used by a program.

## Variants

| Variant         | Usage                                        |
| --------------- | -------------------------------------------- |
| LIGHT           | Colors the text-field with light grey color. |
| DARK            | Colors the text-field with dark grey color.  |

## Types

| Type       | Usage                                                       |
| --------   | ----------------------------------------------------------- |
| MULTI_LINE | Allows to create a multi lines text.                        |
| TEXT       | Allows to entre a large number of characters.               |
| PASSWORD   | restricts the text field to a certain validations formulas. |
| EMAIL      | restricts the text field to a certain validations formulas. |
| NUMBER     | restricts the text field to digits only.                    |
| TELEPHONE  | restricts the text field to a certain digits formula.       |

## Stats

| Stats   | Usage  |
| --------| ------ |
| BASE    |   -    |
| SUCCESS |   -    |
| WARNING |   -    |
| COLOR   |   -    |

## Action

Text-fields allow users to type in them based on the types above.

## Usage

<!-- ```js
<!-- <script>
  import TextField from "@dusk-network/text-field";
  import {variants, states, types} from "@dusk-network/helpers";
  import { actions } from "@storybook/addon-actions";
  
  export let placeholder;
  export let disabled;
  export let multiline;

  const events = actions({ onFocus: "focused", onMouseOver: "hovered" });
</script>
<div class="p-10 w-6/12 mx-auto">
  <TextField {...events} variant="{variants.ATOM.TEXT_FIELD.DARK}" state="{states.ATOM.TEXT_FIELD.SUCCESS}" type="{types.ATOM.TEXT_FIELD.TEXT}" {placeholder} {disabled} {multiline} />
</div> -->
``` -->