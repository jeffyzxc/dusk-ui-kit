<script>
  import { onDestroy } from "svelte";
  import { setContext, getContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import { key } from "./key.js";
  import { createContext } from "./context.js";
  import "./styles.css";

  /**
   * Provides the dataset to be searched over.
   */
  export let data = [];

  /**
   * Used to add a search button to the input field when true
   */
  export let fieldButton = false;

  let searchValue;

  setContext(key, {});
  createContext();
  const { store, searchTerm, searchResults } = getContext(key);

  export const dataSearchResults = searchResults;

  $: store.set(data);

  onDestroy(() => {
    store.reset();
  });

  const onClick = () => {
    searchTerm.set(searchValue);
  };

  setContext("DUK:control:context", contexts.CONTROL.SEARCH_LIST);
  setContext("DUK:detail-list:context", contexts.DETAIL_LIST.SEARCH_LIST);
</script>

<div class="{$$props.class || ''} duk-search-list">
  {#if fieldButton}
    <Control width="full">
      <Button slot="buttonPostfix" on:click="{onClick}">
        <Icon name="magnify" size="sm" />
      </Button>
      <TextField placeholder="Search" bind:value="{searchValue}" />
    </Control>
  {:else}
    <Control width="full">
      <TextField placeholder="Search" bind:value="{$searchTerm}" />
    </Control>
  {/if}
  <div class="duk-search-list__results">
    <slot />
  </div>
</div>
