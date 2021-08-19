<script>
  // import { getContext } from "svelte";
  import "./styles.css";

  // const context = getContext("DUK:search:context");
</script>

<div class="{$$props.class || ''} duk-search">
  <slot />
</div>
