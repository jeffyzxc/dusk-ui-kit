# ⚛️ Loading indicator

tell users that the app needs more time to process the last user action.


## Variant

| Variant  | Usage          |
| -------- | -------------- |
| Brand    | Brand color    |
| LIGHT    | light version  |


## Actions

Loading indicator is triggered whenever the action requiers time to process to indicate to the user that the action is in progress.

## Usage

```js
<script>
  import LoadingIndicator from "@dusk-network/loading-indicator";
  import { variants } from "@dusk-network/helpers";
</script>

<LoadingIndicator variant="{variants.ATOM.LOADING_INDICATOR.BRAND}" class="w-48" />
```