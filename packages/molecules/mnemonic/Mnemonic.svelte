<script>
  import { onMount, onDestroy, setContext, getContext, createEventDispatcher } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import types from "@dusk-network/helpers/types.js";
  import variants from "@dusk-network/helpers/variants.js";
  import { words, compared, shuffled } from "./stores/words.js";
  import { options } from "./stores/options.js";
  import Word from "./Word.svelte";
  import Button from "@dusk-network/button";
  import Group from "@dusk-network/group";
  import "./styles.css";

  /**
   * Sets the array of objects that populate Mnemonic.
   */
  export let seed = [];

  /**
   * Sets the type of Mnemonic.
   * @type { "authenticate" | "preview" | "confirm"}
   */
  export let type = types.MNEMONIC.PREVIEW;

  /**
   * Sets the total number of items that populate Mnemonic.
   */
  export let length = 12;

  /**
   * Sets if the Mnemonic should be disabled.
   */
  export let disabled = false;

  const dispatch = createEventDispatcher();
  const context = getContext("DUK:mnemonic:context");

  setContext("DUK:button:context", contexts.BUTTON.MNEMONIC);

  $: isFilled($compared);
  $: options.update({ type: type });

  onMount(() => {
    words.set(seed);
    options.set({ type: type });
  });

  onDestroy(() => {
    words.set([]);
    compared.set([]);
  });

  const isFilled = (filledWords) => {
    const isIncomplete = filledWords.some(function (word) {
      return word === null || word === undefined || word === "";
    });

    filledWords.length === length && !isIncomplete && dispatch("complete", filledWords);

    if ($options.type === types.MNEMONIC.CONFIRM) {
      JSON.stringify(filledWords) === JSON.stringify(seed) && dispatch("passed");
    }
  };

  const selectWord = (word) => {
    compared.update((a) => [...a, word]);
  };

  const reset = () => {
    compared.set([]);
  };
</script>

<div
  class="{$$props.class || ''} duk-mnemonic"
  class:duk-mnemonic--card="{context === contexts.MNEMONIC.CARD}"
>
  {#if $options.type === types.MNEMONIC.CONFIRM && !disabled}
    <Group class="duk-mnemonic__buttons">
      {#each $shuffled as word}
        <Button
          variant="{variants.BUTTON.BRAND}"
          on:click="{selectWord(word)}"
          disabled="{$compared.includes(word)}"
        >
          {word}
        </Button>
      {/each}
    </Group>
  {/if}
  <ol class="duk-mnemonic__list">
    {#if $options.type === types.MNEMONIC.AUTHENTICATE}
      {#each Array(length) as _, i}
        <Word index="{i}" disabled="{disabled}" name="`mnemonic_auth_word_{i}`" />
      {/each}
    {:else if $options.type === types.MNEMONIC.CONFIRM}
      {#each $shuffled as _, i}
        <Word index="{i}" disabled="{disabled}" />
      {/each}
    {:else}
      {#each $words as word}
        <Word value="{word}" disabled="{disabled}" />
      {/each}
    {/if}
  </ol>
  {#if $options.type === types.MNEMONIC.CONFIRM && !disabled}
    <Group class="duk-mnemonic__buttons">
      <Button variant="{variants.BUTTON.DANGER}" on:click="{reset}">Reset</Button>
    </Group>
  {/if}
</div>
