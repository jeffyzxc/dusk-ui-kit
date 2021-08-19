<script>
  import types from "@dusk-network/helpers/types.js";
  import variants from "@dusk-network/helpers/variants.js";
  import "./styles.css";

  export let variant = variants.TOGGLE.BRAND;
  export let type = types.TOGGLE.SWITCH;
  export let name = "";
  export let checked = false;
  export let id = "__DUK-toggle" + Math.random().toString(36);
  export let value = false;
  export let disabled = false;
  export let selected = false;
</script>

<div
  class="{$$props.class || ''} duk-toggle"
  class:duk-toggle--brand="{variant === variants.TOGGLE.BRAND}"
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
        role="checkbox"
        name="{name}"
        value="{value}"
        id="{id}"
        disabled="{disabled || undefined}"
        bind:checked
        on:click
        on:change
      />
      <label for="{id}" class="duk-toggle__switch-track"></label>
      <label for="{id}" class="duk-toggle__switch-thumb"></label>
      <label class="duk-toggle__label duk-toggle__label--switch" for="{id}">
        <slot />
      </label>
    </div>
  {/if}
</div>
