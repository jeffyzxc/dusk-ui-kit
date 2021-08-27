<script>
  import { onMount, onDestroy, setContext, getContext, createEventDispatcher } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import types from "@dusk-network/helpers/types.js";
  import variants from "@dusk-network/helpers/variants.js";
  import { words, compared, shuffled } from "./stores/words.js";
  import { options } from "./stores/options.js";
  import Word from "@dusk-network/mnemonic/Word.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import Group from "@dusk-network/button/Group.svelte";
  import "./styles.css";

  export let seed = [];
  export let type = types.MNEMONIC.PREVIEW;
  export let length = 12;

  const dispatch = createEventDispatcher();
  const context = getContext("DUK:mnemonic:context");

  setContext("DUK:button:context", contexts.BUTTON.MNEMONIC);

  $: isFilled($compared);

  onMount(() => {
    words.set(seed);
    options.set({ type: type });
  });
  onDestroy(() => {
    words.set([]);
    compared.set([]);
  });

  const isFilled = (filledWords) => {
    filledWords.length === length && dispatch("complete", filledWords);
    JSON.stringify(filledWords) === JSON.stringify(seed) && dispatch("passed");
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
  {#if $options.type === types.MNEMONIC.CONFIRM}
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
      {#each Array(length) as _}
        <Word />
      {/each}
    {:else if $options.type === types.MNEMONIC.CONFIRM}
      {#each $shuffled as _, i}
        <Word index="{i}" />
      {/each}
    {:else}
      {#each $words as word}
        <Word value="{word}" />
      {/each}
    {/if}
  </ol>
  {#if $options.type === types.MNEMONIC.CONFIRM}
    <Group class="duk-mnemonic__buttons">
      <Button variant="{variants.BUTTON.DANGER}" on:click="{reset}">Reset</Button>
    </Group>
  {/if}
</div>