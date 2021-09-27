<script>
  import { setContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  setContext("DUK:heading:context", contexts.HEADING.DISCLAIMER_LIST);
</script>

<div class="{$$props.class || ''} duk-disclaimer-list">
  <slot name="heading" />
  <ul class="duk-disclaimer-list__list">
    <slot />
  </ul>
</div>
