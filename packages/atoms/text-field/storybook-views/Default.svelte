<script>
  import { actions } from "@storybook/addon-actions";
  import TextField from "../";

  export let variant;
  export let state;
  export let type;
  export let placeholder;
  export let disabled;
  export let multiline;

  const events = actions({ onFocus: "focused", onMouseOver: "hovered" });
</script>

<TextField {...events} {variant} {state} {type} {placeholder} {disabled} {multiline} />
