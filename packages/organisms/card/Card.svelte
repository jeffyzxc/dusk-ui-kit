<script>
  import { setContext } from "svelte";
  import { contexts, variants } from "@dusk-network/helpers/index.js";
  import "./styles.css";

  export let variant = variants.CARD.DEFAULT;
  export let href = null;
  export let disabled = false;

  // setContext("DUK:card:accordion");
  setContext("DUK:accordion:context", contexts.CARD.ACCORDION);
</script>

{#if href}
  <a href="{href}">
    <div
      class="{$$props.class || ''} duk-card"
      class:duk-card--brand="{variant === variants.CARD.BRAND}"
      class:duk-card--cta="{variant === variants.CARD.CTA}"
      class:duk-card--info="{variant === variants.CARD.INFO}"
      class:duk-card--success="{variant === variants.CARD.SUCCESS}"
      class:duk-card--warning="{variant === variants.CARD.WARNING}"
      class:duk-card--danger="{variant === variants.CARD.DANGER}"
      class:duk-card--disabled="{disabled}"
      on:*
    >
      <slot />
    </div>
  </a>
{:else}
  <div
    class="{$$props.class || ''} duk-card"
    class:duk-card--brand="{variant === variants.CARD.BRAND}"
    class:duk-card--cta="{variant === variants.CARD.CTA}"
    class:duk-card--info="{variant === variants.CARD.INFO}"
    class:duk-card--success="{variant === variants.CARD.SUCCESS}"
    class:duk-card--warning="{variant === variants.CARD.WARNING}"
    class:duk-card--danger="{variant === variants.CARD.DANGER}"
    class:duk-card--disabled="{disabled}"
    on:*
  >
    <slot />
  </div>
{/if}
