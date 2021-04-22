# ⚛️ Form

Provides a standard form wrapper.

## Tones

| Value     | Description                             |
| --------- | --------------------------------------- |
| app       | Applies styling for an app context      |
| marketing | Applies styling for a marketing context |

## Variants

| Value   | Description                      |
| ------- | -------------------------------- |
| brand   | Applies a brand styling          |
| cta     | Applies a call to action styling |
| dark    | Applies a dark styling           |
| light   | Applies a light styling          |
| success | Applies a success styling        |
| warning | Applies a warning styling        |
| danger  | Applies a danger styling         |

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

## Root

Navbar is an Organism made of the Molecule (Control) and the Atom (TextField) and also 

## Usage

```js
<script>
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import {variants, types, states } from "@dusk-network/helpers";
</script>
<div class="p-10 w-6/12 mx-auto">
  <Form type="{types.ORGANISM.FORM.STACKED}" variant="{variants.ORGANISM.FORM.BRAND}" state="{states.ORGANISM.FORM.BASE}">
    <Control
      type="{types.MOLECULE.CONTROL.STACKED}"
      variant="{variants.MOLECULE.CONTROL.DARK}"
      label="Standard Text"
      state="{states.MOLECULE.CONTROL.BASE}"
      id="__control-test-text__">
      <TextField variant="{variants.ATOM.TEXT_FIELD.LIGHT}" state="{states.ATOM.TEXT_FIELD.SUCCESS}" name="control_test" id="__control-test-text__" />
    </Control>
    <Control
      type="{types.MOLECULE.CONTROL.STACKED}"
      variant="{variants.MOLECULE.CONTROL.LIGHT}"
      label="Password"
      state="{states.MOLECULE.CONTROL.BASE}"
      id="__control-test-password__">
      <TextField
        variant="{variants.ATOM.TEXT_FIELD.DARK}"
        state="{states.ATOM.TEXT_FIELD.DANGER}"
        type="password"
        name="control_test"
        id="__control-test-password__" />
    </Control>
    <Control
      type="{types.MOLECULE.CONTROL.STACKED}"
      variant="{variants.MOLECULE.CONTROL.DARK}"
      label="Longer Text..."
      state="{states.MOLECULE.CONTROL.BASE}"
      id="__control-test-long__">
      <TextField
        variant="{variants.ATOM.TEXT_FIELD.LIGHT}"
        state="{states.ATOM.TEXT_FIELD.SUCCESS}"
        type="multi"
        name="control_test"
        id="__control-test-long__" />
    </Control>
  </Form>
</div>
```
