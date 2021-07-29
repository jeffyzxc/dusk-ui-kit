<script>
  import { variants, sizes } from "@dusk-network/helpers";
  import "./styles.css";

  export let variant = variants.ATOM.CARD.DEFAULT;
  export let size = sizes.ATOM.CARD.BASE;
  export let href = null;
  export let disabled = false;
</script>

{#if href}
  <a href="{href}">
    <div
      class="{$$props.class || ''} duk-card"
      class:duk-card--brand="{variant === variants.ATOM.CARD.BRAND}"
      class:duk-card--cta="{variant === variants.ATOM.CARD.CTA}"
      class:duk-card--info="{variant === variants.ATOM.CARD.INFO}"
      class:duk-card--success="{variant === variants.ATOM.CARD.SUCCESS}"
      class:duk-card--warning="{variant === variants.ATOM.CARD.WARNING}"
      class:duk-card--danger="{variant === variants.ATOM.CARD.DANGER}"
      class:duk-card--small="{size === sizes.ATOM.CARD.SMALL}"
      class:duk-card--large="{size === sizes.ATOM.CARD.LARGE}"
      class:duk-card--disabled="{disabled}"
      on:*
    >
      <slot />
    </div>
  </a>
{:else}
  <div
    class="{$$props.class || ''} duk-card"
    class:duk-card--brand="{variant === variants.ATOM.CARD.BRAND}"
    class:duk-card--cta="{variant === variants.ATOM.CARD.CTA}"
    class:duk-card--info="{variant === variants.ATOM.CARD.INFO}"
    class:duk-card--success="{variant === variants.ATOM.CARD.SUCCESS}"
    class:duk-card--warning="{variant === variants.ATOM.CARD.WARNING}"
    class:duk-card--danger="{variant === variants.ATOM.CARD.DANGER}"
    class:duk-card--small="{size === sizes.ATOM.CARD.SMALL}"
    class:duk-card--large="{size === sizes.ATOM.CARD.LARGE}"
    class:duk-card--disabled="{disabled}"
    on:*
  >
    <slot />
  </div>
{/if}
