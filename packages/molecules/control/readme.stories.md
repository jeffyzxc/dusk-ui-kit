# ⚛️ Control

  ??

## Variants

| Variant  | Usage          |
| -------- | -------------- |
| Brand    | Brand color    |
| LIGHT    | light version  |

## Types

| Type         | Usage                                                                          |
| ------------ | ------------------------------------------------------------------------------ |
| STACKED      | Stacks the label and text-field on top of each other.                          |
| INLINE-FIXED | Inlines the label with the text-field but will keep the text field size fixed. |
| INLINE-FLEX  | Inlines the label with the text-field equally.                                 |

## States

| State   | Usage                      |
| ------  | -------------------------- |
| BASE    | Colors the label in black. |
| SUCCESS | Colors the label in green. |
| WARNING | Colors the label in orange.|
| DANGER  | Colors the label in red.   |

## Usage

```js
<script>
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import { variants, states, types } from "@dusk-network/helpers";
  let label = "This is a Text Field";
  let message = "";
  let placeholder="Type here";
</script>

<div class="p-10 w-6/12 mx-auto">
  <Control
    type="{types.MOLECULE.CONTROL.STACKED}"
    variant="{variants.MOLECULE.CONTROL.LIGHT}"
    label="{label}"
    message="{message}"
    state="{states.MOLECULE.CONTROL.BASE}"
    id="__control-test__">
    <TextField
      variant="{variants.ATOM.TEXT_FIELD.DARK}"
      state="{states.ATOM.TEXT_FIELD.SUCCESS}"
      name="control_test"
      id="__control-test__"
      placeholder="{placeholder}" />
  </Control>
</div>
```