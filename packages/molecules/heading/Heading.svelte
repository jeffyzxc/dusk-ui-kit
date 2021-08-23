<script>
  import { getContext, setContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import sizes from "@dusk-network/helpers/sizes.js";
  import "./styles.css";

  export let size = sizes.HEADING.DEFAULT;

  const context = getContext("DUK:heading:context");

  setContext("DUK:icon:context", contexts.ICON.HEADING);
</script>

<div
  class="{$$props.class || ''} duk-heading"
  class:duk-heading--card="{context === contexts.HEADING.CARD}"
  class:duk-heading--hero="{context === contexts.HEADING.HERO}"
  class:duk-heading--small="{size === sizes.HEADING.SMALL}"
  class:duk-heading--large="{size === sizes.HEADING.LARGE}"
>
  <slot name="icon" />
  <slot />
</div>
