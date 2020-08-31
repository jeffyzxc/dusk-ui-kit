<script>
  import Form from "../";
  import Control from "../../../molecules/control/Control.svelte";
  import TextField from "../../../atoms/text-field/TextField.svelte";
  export let type;
  export let variant;
  export let tone;
  export let state;
</script>

<Form {type} {tone} {variant} {state}>
  <Control {type} {variant} {tone} label="Standard Text" {state} id="__control-test-text__">
    <TextField {tone} {variant} {state} name="control_test" id="__control-test-text__" />
  </Control>
  <Control {type} {variant} {tone} label="Password" {state} id="__control-test-password__">
    <TextField
      {tone}
      {variant}
      {state}
      type="password"
      name="control_test"
      id="__control-test-password__" />
  </Control>
  <Control {type} {variant} {tone} label="Longer Text..." {state} id="__control-test-long__">
    <TextField
      {tone}
      {variant}
      {state}
      type="multi"
      name="control_test"
      id="__control-test-long__" />
  </Control>
</Form>
