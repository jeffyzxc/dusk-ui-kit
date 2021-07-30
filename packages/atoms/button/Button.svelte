<script>
  import { setContext, getContext } from "svelte";
  import { variants, sizes, contexts } from "@dusk-network/helpers";
  import "./styles.css";

  export let value = false;
  export let variant = variants.ATOM.BUTTON.BRAND;
  export let outline = false;
  export let size = sizes.ATOM.BUTTON.BASE;
  export let href = null;
  export let circle = false;
  export let disabled = false;

  let context = getContext("DUK:button:context");

  setContext("DUK:label:context", contexts.LABEL.BUTTON);
  setContext("DUK:icon:context", contexts.ICON.BUTTON);
</script>

{#if href && !disabled}
  <a href="{href}">
    <button
      class="{$$props.class || ''} duk-button"
      class:duk-button--brand="{variant === variants.ATOM.BUTTON.BRAND}"
      class:duk-button--cta="{variant === variants.ATOM.BUTTON.CTA}"
      class:duk-button--info="{variant === variants.ATOM.BUTTON.INFO}"
      class:duk-button--success="{variant === variants.ATOM.BUTTON.SUCCESS}"
      class:duk-button--warning="{variant === variants.ATOM.BUTTON.WARNING}"
      class:duk-button--danger="{variant === variants.ATOM.BUTTON.DANGER}"
      class:duk-button--small="{size === sizes.ATOM.BUTTON.SMALL}"
      class:duk-button--large="{size === sizes.ATOM.BUTTON.LARGE}"
      class:duk-button--outline="{outline}"
      class:duk-button--circle="{circle}"
      class:duk-card-action-button="{context === contexts.BUTTON.ACTION.CARD}"
      class:duk-dialog-action-button="{context === contexts.BUTTON.ACTION.DIALOG}"
      class:duk-accordion__action="{context === contexts.BUTTON.ACCORDION}"
      disabled="{disabled || undefined}"
      on:click="{() => (value = !value)}"
      on:click
      on:mouseover
      on:*
    >
      <slot />
    </button>
  </a>
{:else}
  <button
    class="{$$props.class || ''} duk-button"
    class:duk-button--brand="{variant === variants.ATOM.BUTTON.BRAND}"
    class:duk-button--cta="{variant === variants.ATOM.BUTTON.CTA}"
    class:duk-button--info="{variant === variants.ATOM.BUTTON.INFO}"
    class:duk-button--success="{variant === variants.ATOM.BUTTON.SUCCESS}"
    class:duk-button--warning="{variant === variants.ATOM.BUTTON.WARNING}"
    class:duk-button--danger="{variant === variants.ATOM.BUTTON.DANGER}"
    class:duk-button--small="{size === sizes.ATOM.BUTTON.SMALL}"
    class:duk-button--large="{size === sizes.ATOM.BUTTON.LARGE}"
    class:duk-button--outline="{outline}"
    class:duk-button--circle="{circle}"
    class:duk-card-action-button="{context === contexts.BUTTON.ACTION.CARD}"
    class:duk-dialog-action-button="{context === contexts.BUTTON.ACTION.DIALOG}"
    class:duk-accordion__action="{context === contexts.BUTTON.ACCORDION}"
    disabled="{disabled || undefined}"
    on:click="{() => (value = !value)}"
    on:click
    on:mouseover
    on:*
  >
    <slot />
  </button>
{/if}
