# ⚛️ Card

Cards are multi-purpose components, used to contain isolated content. It includes options for title, footer or title and action.

## Variants

Cards come in a variety of flavours that should be utilised according to the following instructions.

| Variant   | Usage           |
| --------- | --------------- |
| Primary   | Primary cards.  |
| Secondary | Secondary cards |
| Info      | Info cards.     |
| Success   | Success cards.  |
| Warning   | Warning cards.  |
| Danger    | Danger cards.   |

## Size

Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated.

| Size  | Usage                                                                |
| ----- | -------------------------------------------------------------------- |
| 100%  | Wide as the max-width of the element is palced in.                   |

## Actions

Only in the case of using title and action which will add buttons within the card build.
When the action required by a user has more than one option, always use one primary variant button for the most agreeable option, with secondary and info variants being available options.

Negative action buttons will be on the left. Positive action buttons should be on the right.

## Usage

```js
<script>
  import Card, { Content } from "@dusk-network/card";
  export let variant;
  export let elevation;
  export let content;
  export let size;
</script>
<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <Content>{content}</Content>
</Card>
```