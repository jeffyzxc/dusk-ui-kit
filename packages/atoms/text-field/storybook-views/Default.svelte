<script>
  import { actions } from "@storybook/addon-actions";
  import TextField from "../";

  export let variant;
  export let type;
  export let placeholder;

  const events = actions({ onFocus: "focused", onMouseOver: "hovered" });
</script>

<TextField {...events} {variant} {type} {placeholder} />
