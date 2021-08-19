<script>
  import { setContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  setContext("DUK:button:context", contexts.BUTTON.HERO);
  setContext("DUK:rich-text:context", contexts.RICH_TEXT.HERO);
</script>

<div class="{$$props.class || ''} duk-hero" class:duk-hero--with-image="{$$slots.image}">
  <slot name="introduction" />
  <slot name="cta" />
  <slot name="image" />
</div>
