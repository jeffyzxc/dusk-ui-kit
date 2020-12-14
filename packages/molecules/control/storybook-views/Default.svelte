<script>
  import Control from "../";
  import TextField from "../../../atoms/text-field/TextField.svelte";

  export let type;
  export let variant;
  export let state;
  export let label;
  export let message;
  export let placeholder;
</script>

<Control
  type="{type}"
  variant="{variant}"
  label="{label}"
  message="{message}"
  state="{state}"
  id="__control-test__">
  <TextField
    variant="{variant}"
    state="{state}"
    name="control_test"
    id="__control-test__"
    placeholder="{placeholder}" />
</Control>
