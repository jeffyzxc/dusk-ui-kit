<script>
  import Control from "../";
  import TextField from "../../../atoms/text-field/TextField.svelte";

  export let type;
  export let tone;
  export let variant;
  export let state;
  export let label;
  export let message;
  export let placeholder;
</script>

<Control {type} {variant} {tone} {label} {message} {state} id="__control-test__">
  <TextField {tone} {variant} {state} name="control_test" id="__control-test__" {placeholder} />
</Control>
