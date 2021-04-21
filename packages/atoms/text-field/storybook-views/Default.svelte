<script>
  import { actions } from "@storybook/addon-actions";
  import TextField from "../TextField.svelte";

  export let variant;
  export let state;
  export let type;
  export let placeholder;
  export let disabled;
  export let multiline;

  const events = actions({ onFocus: "focused", onMouseOver: "hovered" });
</script>

<TextField
  {...events}
  variant="{variant}"
  state="{state}"
  type="{type}"
  placeholder="{placeholder}"
  disabled="{disabled}"
  multiline="{multiline}"
/>
