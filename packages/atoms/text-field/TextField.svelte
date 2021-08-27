<script>
  import { getContext } from "svelte";
  import states from "@dusk-network/helpers/states.js";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  export let value = null;
  export let disabled = false;
  export let multiline = false;
  export let placeholder = "";
  export let state = states.TEXT_FIELD.DEFAULT;
  export let id;
  export let name;
  export let focused = false;

  let context = getContext("DUK:text-field:context") || "";

  function toggleFocused() {
    focused = !focused;
  }
</script>

{#if multiline}
  <textarea
    bind:value
    class="{$$props.class || ''} duk-text-field"
    class:duk-text-field--danger="{state === states.TEXT_FIELD.DANGER}"
    class:duk-text-field--success="{state === states.TEXT_FIELD.SUCCESS}"
    class:duk-text-field--warning="{state === states.TEXT_FIELD.WARNING}"
    class:duk-control__input--text-field="{context === contexts.TEXT_FIELD.CONTROL}"
    class:duk-control__input="{context === contexts.TEXT_FIELD.CONTROL}"
    class:duk-text-field--mnemonic="{context === contexts.TEXT_FIELD.MNEMONIC}"
    disabled="{disabled}"
    id="{id || undefined}"
    name="{name}"
    on:blur
    on:blur="{toggleFocused}"
    on:change
    on:click
    on:focus
    on:focus="{toggleFocused}"
    on:input
    on:keydown
    on:keypress
    on:keyup
    placeholder="{placeholder || undefined}"></textarea>
{:else}
  <input
    bind:value
    class="{$$props.class || ''} duk-text-field"
    class:duk-text-field--danger="{state === states.TEXT_FIELD.DANGER}"
    class:duk-text-field--success="{state === states.TEXT_FIELD.SUCCESS}"
    class:duk-text-field--warning="{state === states.TEXT_FIELD.WARNING}"
    class:duk-control__input--text-field="{context === contexts.TEXT_FIELD.CONTROL}"
    class:duk-control__input="{context === contexts.TEXT_FIELD.CONTROL}"
    class:duk-text-field--mnemonic="{context === contexts.TEXT_FIELD.MNEMONIC}"
    disabled="{disabled}"
    id="{id || undefined}"
    name="{name}"
    on:blur
    on:blur="{toggleFocused}"
    on:change
    on:click
    on:focus
    on:focus="{toggleFocused}"
    on:input
    on:keydown
    on:keypress
    on:keyup
    placeholder="{placeholder || undefined}"
    {...$$restProps}
  />
{/if}
