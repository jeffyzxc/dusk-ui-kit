<script>
  // import { actions } from "@storybook/addon-actions";
  import TextField from "../TextField.svelte";

  export let state;
  export let type;
  export let placeholder;
  export let disabled;
  export let multiline;

  let name = "world";
</script>

<TextField
  state="{state}"
  type="{type}"
  placeholder="{placeholder}"
  disabled="{disabled}"
  multiline="{multiline}"
  bind:value="{name}"
/>

<p>Bound value is: {name}</p>
