<script>
  import Switch from "../Switch.svelte";
  export let variant = null;
  let demoSwitch = false;
</script>

<Switch id="demo-switch" name="demo_switch" variant="{variant}" bind:value="{demoSwitch}" />
{#if demoSwitch}
  <p>It's on!</p>
{:else}
  <p>It's off!</p>
{/if}
