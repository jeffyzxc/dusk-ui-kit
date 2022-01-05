<script>
  // FIXME This needs DRYing (with a ButtonSkeleton.svelte file).
  import { setContext, getContext } from "svelte";
  import variants from "@dusk-network/helpers/variants.js";
  import sizes from "@dusk-network/helpers/sizes.js";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  /**
   * Sets the `id` of the Button if set, otherwise the ID is generated.
   * @type {string}
   */
  export let id = "__DUK-button" + Math.random().toString(36);

  /**
   * Used as a switch when the button is clicked.
   */
  export let value = false;

  /**
   * Sets the variant of the Button.
   * @type {"brand" | "cta" | "info" | "success" | "warning" | "danger" }
   */
  export let variant = variants.BUTTON.BRAND;

  /**
   * Sets the size of the Button.
   * @type {"sm" | "lg" }
   */
  export let size = sizes.BUTTON.DEFAULT;

  /**
   * Sets the Button to outlined when true.
   */
  export let outline = false;

  /**
   * Sets the Button to have circular edges when true.
   */
  export let circle = false;

  /**
   * Sets the Button to act as a block element when true.
   */
  export let block = false;

  /**
   * Renders the Button as an `a` tag when set.
   */
  export let href = "";

  /**
   * Sets the `disabled` attribute on the Button when true.
   */
  export let disabled = false;

  const context = getContext("DUK:button:context");

  setContext("DUK:icon:context", contexts.ICON.BUTTON);
</script>

<div class="duk-button-wrapper">
  {#if $$slots.labelLeft}
    <label
      class="duk-button-label"
      class:duk-button-label--small="{size === sizes.BUTTON.SMALL}"
      class:duk-button-label--large="{size === sizes.BUTTON.LARGE}"
      class:duk-button-label--hero="{context === contexts.BUTTON.HERO}"
      for="{id}"
    >
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
        class:duk-accordion__action="{context === contexts.BUTTON.ACCORDION}"
        class:duk-button--hero="{context === contexts.BUTTON.HERO}"
        class:duk-button--mnemonic="{context === contexts.BUTTON.MNEMONIC}"
        class:duk-button--control="{context === contexts.BUTTON.CONTROL}"
        class:duk-button--heading="{context === contexts.BUTTON.HEADING}"
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
      class:duk-accordion__action="{context === contexts.BUTTON.ACCORDION}"
      class:duk-button--hero="{context === contexts.BUTTON.HERO}"
      class:duk-button--mnemonic="{context === contexts.BUTTON.MNEMONIC}"
      class:duk-button--control="{context === contexts.BUTTON.CONTROL}"
      class:duk-button--heading="{context === contexts.BUTTON.HEADING}"
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
    <label
      class="duk-button-label"
      class:duk-button-label--small="{size === sizes.BUTTON.SMALL}"
      class:duk-button-label--large="{size === sizes.BUTTON.LARGE}"
      class:duk-button-label--hero="{context === contexts.BUTTON.HERO}"
      for="{id}"
    >
      <slot name="labelRight" />
    </label>
  {/if}
</div>
