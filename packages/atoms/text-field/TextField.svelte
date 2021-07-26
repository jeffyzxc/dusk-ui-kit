<script>
  import { getContext } from "svelte";
  import { types, states, contexts } from "@dusk-network/helpers";
  import "./styles.css";

  export let value = null;
  export let disabled = false;
  export let type = types.ATOM.TEXT_FIELD.TEXT;
  export let placeholder = "";
  export let state = states.ATOM.TEXT_FIELD.BASE;
  export let id;
  export let name;
  export let focused = false;

  let context = getContext("DUK:text-field:context") || "";

  $: isTextArea = type === types.ATOM.TEXT_FIELD.MULTI_LINE;

  function toggleFocused() {
    focused = !focused;
  }
</script>

{#if isTextArea}
  <textarea
    bind:value
    class="{$$props.class || ''} duk-text-field"
    class:duk-text-field--danger="{state === states.ATOM.TEXT_FIELD.DANGER}"
    class:duk-text-field--success="{state === states.ATOM.TEXT_FIELD.SUCCESS}"
    class:duk-text-field--warning="{state === states.ATOM.TEXT_FIELD.WARNING}"
    class:duk-control__input--text-field="{context === contexts.TEXT_FIELD.CONTROL}"
    class:duk-control__input="{context === contexts.TEXT_FIELD.CONTROL}"
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
    class:duk-text-field--danger="{state === states.ATOM.TEXT_FIELD.DANGER}"
    class:duk-text-field--success="{state === states.ATOM.TEXT_FIELD.SUCCESS}"
    class:duk-text-field--warning="{state === states.ATOM.TEXT_FIELD.WARNING}"
    class:duk-control__input--text-field="{context === contexts.TEXT_FIELD.CONTROL}"
    class:duk-control__input="{context === contexts.TEXT_FIELD.CONTROL}"
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
  />
{/if}
