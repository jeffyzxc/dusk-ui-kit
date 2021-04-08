# ⚛️ Dialog

Dialog is an interactive component, such as a dismissible alert, inspector, or subwindow.

## Variants

Dialog component comes in varaity of colors as below:

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

## Action

The dialog can be reviewed by clicking on the button 'show dialog'.

## Usage

```js
<script>
  import Dialog from "@dusk-network/dialog";
  import Button, { Label } from "@dusk-network/button";
  import { variants } from "@dusk-network/helpers";
  let title = "";
  let opacity = 0.5;
  let persistent = false;
  let showDialog = false;
  </script>

<div class="p-10 w-6/12 mx-auto">
  <Dialog
    variant="{variants.MOLECULE.DIALOG.BRAND}"
    title="{title}"
    persistent="{persistent}"
    opacity="{opacity}"
    bind:value="{showDialog}">
    <p>This is a basic Dialog!</p>
  </Dialog>

  <div class="py-2">
    <Button on:click="{() => (showDialog = true)}">
      <Label>Show dialog</Label>
    </Button>
  </div>
</div>
```