<script>
  import "./styles.css";
  import { getContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";

  const context = getContext("DUK:content:context");
</script>

<div
  class="{$$props.class || ''} duk-content"
  class:duk-content--card="{context === contexts.CONTENT.CARD}"
>
  <slot />
</div>
