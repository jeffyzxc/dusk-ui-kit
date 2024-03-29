<script>
  import { getContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import types from "@dusk-network/helpers/types.js";
  import variants from "@dusk-network/helpers/variants.js";
  import Icon from "@dusk-network/icon";
  import "./styles.css";

  /**
   * Sets the variant of the Toggle.
   * @type {"brand" | "cta" | "info" | "success" | "warning" | "danger" }
   */
  export let variant = variants.TOGGLE.BRAND;

  /**
   * Sets the type of the Toggle.
   * @type { "checkbox" | "radio" }
   */
  export let type = types.TOGGLE.SWITCH;

  /**
   * Sets the `name` attribute on the Toggle.
   */
  export let name = "";

  /**
   * Sets the `checked` attrtibute on the Toggle when true.
   */
  export let checked = false;

  /**
   * Sets the `id` of the Toggle if set, otherwise the ID is generated.
   */
  export let id = "__DUK-toggle" + Math.random().toString(36);

  /**
   * Used as a switch when the Toggle is clicked.
   */
  export let value = false;

  /**
   * Used to bind the Toggle to a group.
   */
  export let group = false;

  /**
   * Sets the `disabled` attribute on the Toggle when true.
   */
  export let disabled = false;

  /**
   * Sets the selected state of the Toggle when true.
   */
  export let selected = false;

  /**
   * Used to set the On icon of the Toggle switch thumb.
   */
  export let onIcon = "";

  /**
   * Used to set the Off icon of the Toggle switch thumb.
   */
  export let offIcon = "";

  const context = getContext("DUK:toggle:context");
</script>

<div
  class="{$$props.class || ''} duk-toggle"
  class:duk-toggle--control="{context === contexts.TOGGLE.CONTROL}"
  class:duk-toggle--brand="{variant === variants.TOGGLE.BRAND}"
  class:duk-toggle--brand-invert="{variant === variants.TOGGLE.BRAND_INVERT}"
  class:duk-toggle--cta="{variant === variants.TOGGLE.CTA}"
  class:duk-toggle--info="{variant === variants.TOGGLE.INFO}"
  class:duk-toggle--success="{variant === variants.TOGGLE.SUCCESS}"
  class:duk-toggle--warning="{variant === variants.TOGGLE.WARNING}"
  class:duk-toggle--danger="{variant === variants.TOGGLE.DANGER}"
>
  {#if type === types.TOGGLE.CHECKBOX}
    <label class="duk-toggle__label duk-toggle__label--checkbox" for="{id}">
      <input
        class="duk-toggle__checkbox"
        type="checkbox"
        role="checkbox"
        name="{name}"
        value="{value}"
        id="{id}"
        disabled="{disabled || undefined}"
        bind:checked
        on:click="{() => (value = !value)}"
        on:click
        on:change
      />
      <span class="duk-toggle__checkbox-label-wrapper">
        <slot />
      </span>
    </label>
  {:else if type === types.TOGGLE.BUTTON}
    <input
      class="duk-toggle__button"
      type="radio"
      role="radio"
      name="{name}"
      value="{value}"
      id="{id}"
      disabled="{disabled || undefined}"
      selected="{selected || undefined}"
      bind:group
      on:click
      on:change
    />
    <label class="duk-toggle__label duk-toggle__label--button" for="{id}">
      <slot />
    </label>
  {:else if type === types.TOGGLE.RADIO}
    <label class="duk-toggle__label duk-toggle__label--radio" for="{id}">
      <input
        class="duk-toggle__radio"
        type="radio"
        role="radio"
        name="{name}"
        value="{value}"
        id="{id}"
        disabled="{disabled || undefined}"
        selected="{selected || undefined}"
        bind:group
        on:click
        on:change
      />
      <span class="duk-toggle__radio-label-wrapper"> <slot /></span>
    </label>
  {:else}
    <div class="duk-toggle__switch-wrapper">
      <input
        class="duk-toggle__switch"
        type="checkbox"
        role="switch"
        name="{name}"
        value="{value}"
        id="{id}"
        disabled="{disabled || undefined}"
        data-action="aria-switch"
        aria-labelledby="{id}-label"
        aria-checked="{checked ? 'true' : 'false'}"
        bind:checked
        on:click="{() => (value = !value)}"
        on:click
        on:change
      />
      <label for="{id}" class="duk-toggle__switch-track"></label>
      <label for="{id}" class="duk-toggle__switch-thumb">
        {#if value && onIcon}
          <Icon name="{onIcon}" />
        {:else if offIcon}
          <Icon name="{offIcon}" />
        {/if}
      </label>
      <label class="duk-toggle__label duk-toggle__label--switch" for="{id}">
        <slot />
      </label>
    </div>
  {/if}
</div>
