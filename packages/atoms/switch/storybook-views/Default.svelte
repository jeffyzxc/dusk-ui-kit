<script>
  import Switch from "../Switch.svelte";
  import { variants } from "@dusk-network/helpers";
  let demoSwitch = false;
</script>

<Switch
  id="demo-switch"
  name="demo_switch"
  variant="{variants.ATOM.SWITCH.DANGER}"
  value="{true}"
  bind:checked="{demoSwitch}"
/>
{#if demoSwitch}
  <p>It's on!</p>
{:else}
  <p>It's off!</p>
{/if}
