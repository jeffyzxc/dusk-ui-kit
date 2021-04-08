# ⚛️ Footer

Provides a standard website or app footer.

## Tones

| Value     | Description                              |
| --------- | ---------------------------------------- |
| app       | Applies styling for an app context.      |
| marketing | Applies styling for a marketing context. |

## Variants

| Value   | Description                       |
| ------- | --------------------------------- |
| brand   | Applies a brand styling.          |
| cta     | Applies a call to action styling. |
| dark    | Applies a dark styling.           |
| light   | Applies a light styling.          |
| success | Applies a success styling.        |
| warning | Applies a warning styling.        |
| danger  | Applies a danger styling.         |

## Types

| Type    | Usage   |
| ------- | --------|
| MAXIMAL | Maximal |
| MINIMAL | Minimal |


## Example

```js
<script>
  import Footer from "@dusk-network/footer";
  import { variants, types } from "@dusk-network/helpers";
  export let social;
  export let categories;
</script>

<Footer type="{types.ORGANISM.FOOTER.MINIMAL}" variant="{variants.ORGANISM.FOOTER.BRAND}" social="{social}" categories="{categories}" />
```
