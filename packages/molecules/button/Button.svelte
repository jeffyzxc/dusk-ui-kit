<script>
  import { setContext, getContext } from "svelte";
  import { variants, sizes, contexts } from "@dusk-network/helpers/index.js";
  import "./styles.css";

  export let id = "__DUK-button" + Math.random().toString(36);
  export let value = false;
  export let variant = variants.BUTTON.BRAND;
  export let size = sizes.BUTTON.DEFAULT;
  export let outline = false;
  export let circle = false;
  export let block = false;
  export let href = null;
  export let disabled = false;

  const context = getContext("DUK:button:context");

  setContext("DUK:icon:context", contexts.ICON.BUTTON);
</script>

<div class="duk-button-wrapper">
  {#if $$slots.labelLeft}
    <label class="duk-button-label" for="{id}">
      <slot name="labelLeft" />
    </label>
  {/if}
  {#if href && !disabled}
    <a href="{href}">
      <button
        class="{$$props.class || ''} duk-button"
        class:duk-button--brand="{variant === variants.BUTTON.BRAND}"
        class:duk-button--cta="{variant === variants.BUTTON.CTA}"
        class:duk-button--info="{variant === variants.BUTTON.INFO}"
        class:duk-button--success="{variant === variants.BUTTON.SUCCESS}"
        class:duk-button--warning="{variant === variants.BUTTON.WARNING}"
        class:duk-button--danger="{variant === variants.BUTTON.DANGER}"
        class:duk-button--small="{size === sizes.BUTTON.SMALL}"
        class:duk-button--large="{size === sizes.BUTTON.LARGE}"
        class:duk-button--outline="{outline}"
        class:duk-button--circle="{circle}"
        class:duk-button--block="{block}"
        class:duk-card-action-button="{context === contexts.BUTTON.ACTION.CARD}"
        class:duk-dialog-action-button="{context === contexts.BUTTON.ACTION.DIALOG}"
        class:duk-accordion__action="{context === contexts.BUTTON.ACCORDION}"
        class:duk-button--hero="{context === contexts.BUTTON.HERO}"
        disabled="{disabled || undefined}"
        id="{id}"
        on:click="{() => (value = !value)}"
        on:click
        on:mouseover
        on:focus
      >
        <slot />
      </button>
    </a>
  {:else}
    <button
      class="{$$props.class || ''} duk-button"
      class:duk-button--brand="{variant === variants.BUTTON.BRAND}"
      class:duk-button--cta="{variant === variants.BUTTON.CTA}"
      class:duk-button--info="{variant === variants.BUTTON.INFO}"
      class:duk-button--success="{variant === variants.BUTTON.SUCCESS}"
      class:duk-button--warning="{variant === variants.BUTTON.WARNING}"
      class:duk-button--danger="{variant === variants.BUTTON.DANGER}"
      class:duk-button--small="{size === sizes.BUTTON.SMALL}"
      class:duk-button--large="{size === sizes.BUTTON.LARGE}"
      class:duk-button--outline="{outline}"
      class:duk-button--circle="{circle}"
      class:duk-button--block="{block}"
      class:duk-card-action-button="{context === contexts.BUTTON.ACTION.CARD}"
      class:duk-dialog-action-button="{context === contexts.BUTTON.ACTION.DIALOG}"
      class:duk-accordion__action="{context === contexts.BUTTON.ACCORDION}"
      class:duk-button--hero="{context === contexts.BUTTON.HERO}"
      disabled="{disabled || undefined}"
      id="{id}"
      on:click="{() => (value = !value)}"
      on:click
      on:mouseover
      on:focus
    >
      <slot />
    </button>
  {/if}
  {#if $$slots.labelRight}
    <label class="duk-button-label" for="{id}">
      <slot name="labelRight" />
    </label>
  {/if}
</div>
