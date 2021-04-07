# ⚛️ Alert

Alert is a type of "pop-up" message to users of a script. An alert could be anything from notifying the user of an error to saying a short phrase such as "Hi". ... However, they can also be useful for giving the user information such as instructions for fixing errors in a form field.

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

## Sizes

| Size   | Usage   |
| ------ | ------- |
| SMALL  | Small.  |
| BASE   | Medium. |
| LARGE  | Large.  |

## Action

After poping up, a user can close the Alert.

## Usage

```js
<script>
  import Alert from "@dusk-network/alert";
  import {variants, sizes} from "@dusk-network/helpers";
  let title = "IMPORTANT ALERT";
  let dismissable = "X";
  let value = true;
</script>

<div class="p-10 w-6/12 mx-auto">
  <Alert variant="{variants.MOLECULE.ALERT.BRAND}" {title} {value} {dismissable} size="{sizes.MOLECULE.ALERT.BASE}">
    <p>This is an alert!</p>
  </Alert>
</div>
```