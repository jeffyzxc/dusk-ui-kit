<script>
  import types from "@dusk-network/helpers/types.js";
  import Minimal from "./Minimal.svelte";
  import Maximal from "./Maximal.svelte";
  import "./styles.css";

  export let type = types.FOOTER.MINIMAL;
  export let social;
  export let categories;

  let today = new Date();
  let year = today.getFullYear();
  const copyright = `© 2018 - ${year} Dusk Network B.V. All Rights Reserved.`;
</script>

<footer class="{$$props.class || ''} duk-footer">
  {#if type === types.FOOTER.MAXIMAL}
    <Maximal categories="{categories}" />
  {/if}
  <Minimal copyright="{copyright}" social="{social}" />
</footer>
