<script>
  import { setContext } from "svelte";
  import types from "@dusk-network/helpers/types.js";
  import contexts from "@dusk-network/helpers/contexts.js";
  import TextField from "@dusk-network/text-field/TextField.svelte";
  import { compared } from "./stores/words.js";
  import { options } from "./stores/options.js";

  /**
   * Sets the value of Word.
   */
  export let value;

  /**
   * Sets the index used to select the clicked word.
   */
  export let index;

  /**
   * Sets if the Word is disabled.
   */
  export let disabled;

  /**
   * Sets the `id` of the Word if set, otherwise the ID is generated.
   */
  export let id = "__DUK-mnemonic-word" + Math.random().toString(36);

  setContext("DUK:text-field:context", contexts.TEXT_FIELD.MNEMONIC);
</script>

<li class="duk-mnemonic__word" id="{id}">
  {#if $options.type === types.MNEMONIC.AUTHENTICATE}
    <TextField
      type="{types.TEXT_FIELD.TEXT}"
      placeholder="_____"
      maxlength="8"
      disabled="{disabled}"
      bind:value="{$compared[index]}"
    />
  {:else if disabled}
    <del>
      {value || $compared[index] || ""}
    </del>
  {:else}
    {value || $compared[index] || ""}
  {/if}
</li>
