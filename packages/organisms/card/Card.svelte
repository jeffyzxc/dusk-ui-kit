<script>
  import { setContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import variants from "@dusk-network/helpers/variants.js";
  import states from "@dusk-network/helpers/states.js";
  import "./styles.css";

  export let variant = variants.CARD.DEFAULT;
  export let state = states.CARD.DEFAULT;
  export let href = null;
  export let disabled = false;

  setContext("DUK:rich-text:context", contexts.RICH_TEXT.CARD);
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
      class:duk-card--passed="{state === states.CARD.PASSED}"
      class:duk-card--error="{state === states.CARD.ERROR}"
      class:duk-card--failed="{state === states.CARD.FAILED}"
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
    class:duk-card--passed="{state === states.CARD.PASSED}"
    class:duk-card--error="{state === states.CARD.ERROR}"
    class:duk-card--failed="{state === states.CARD.FAILED}"
    class:duk-card--disabled="{disabled}"
    on:*
  >
    <slot />
  </div>
{/if}
