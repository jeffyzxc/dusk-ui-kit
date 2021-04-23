<script>
  import Switch from "../";
  export let variant;
  export let label;
  let demoSwitch = false;
</script>

<Switch id="demo-switch" name="demo_switch" variant="{variant}" bind:value="{demoSwitch}">
  {label}
</Switch>

<p>Switch value: {demoSwitch}</p>
