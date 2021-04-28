<script>
  import Form from "../Form.svelte";
  import Control from "../../../molecules/control/Control.svelte";
  import TextField from "../../../atoms/text-field/TextField.svelte";
  export let type;
  export let variant;
  export let state;
</script>

<Form type="{type}" variant="{variant}" state="{state}">
  <Control
    type="{type}"
    variant="{variant}"
    label="Standard Text"
    state="{state}"
    id="__control-test-text__"
  >
    <TextField variant="{variant}" state="{state}" name="control_test" id="__control-test-text__" />
  </Control>
  <Control
    type="{type}"
    variant="{variant}"
    label="Password"
    state="{state}"
    id="__control-test-password__"
  >
    <TextField
      variant="{variant}"
      state="{state}"
      type="password"
      name="control_test"
      id="__control-test-password__"
    />
  </Control>
  <Control
    type="{type}"
    variant="{variant}"
    label="Longer Text..."
    state="{state}"
    id="__control-test-long__"
  >
    <TextField
      variant="{variant}"
      state="{state}"
      type="multi"
      name="control_test"
      id="__control-test-long__"
    />
  </Control>
</Form>
