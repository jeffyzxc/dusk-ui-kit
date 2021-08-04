<script>
  import Form from "@dusk-network/form/Form.svelte";
  import Control from "@dusk-network/control/Control.svelte";
  import TextField from "@dusk-network/text-field/TextField.svelte";
  export let type;
  export let state;
</script>

<Form type="{type}" state="{state}">
  <Control type="{type}" label="Standard Text" state="{state}" id="__control-test-text__">
    <TextField state="{state}" name="control_test" id="__control-test-text__" />
  </Control>
  <Control type="{type}" label="Password" state="{state}" id="__control-test-password__">
    <TextField state="{state}" type="password" name="control_test" id="__control-test-password__" />
  </Control>
  <Control type="{type}" label="Longer Text..." state="{state}" id="__control-test-long__">
    <TextField state="{state}" type="multi" name="control_test" id="__control-test-long__" />
  </Control>
</Form>
