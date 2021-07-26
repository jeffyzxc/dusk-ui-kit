<script>
  import Control from "../Control.svelte";
  import TextField from "../../../atoms/text-field/TextField.svelte";

  export let type;
  export let state;
  export let label;
  export let message;
  export let placeholder;
</script>

<Control type="{type}" label="{label}" message="{message}" state="{state}" id="__control-test__">
  <TextField
    state="{state}"
    name="control_test"
    id="__control-test__"
    placeholder="{placeholder}"
  />
</Control>
