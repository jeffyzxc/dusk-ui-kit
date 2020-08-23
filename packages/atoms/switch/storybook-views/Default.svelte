<script>
  import Switch from "../";
  export let variant;
  export let tone;
  export let label;
  let demoSwitch = false;
</script>

<Switch
  id="demo-switch"
  name="demo_switch"
  {variant}
  {tone}
  value="{true}"
  bind:checked="{demoSwitch}">
  {label}
</Switch>

<p>Switch value: {demoSwitch}</p>
