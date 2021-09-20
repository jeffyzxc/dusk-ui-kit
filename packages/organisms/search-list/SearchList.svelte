<script>
  import {onMount, onDestroy} from "svelte";
  import { store, searchTerm, searchResults } from "./stores/store.js";
  import Control from "@dusk-network/control";
  import TextField from "@dusk-network/text-field";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import { Item } from "@dusk-network/search-list";
  import "./styles.css";


  export let data = [];
  let searchValue;

  onMount(() => {
    store.set(data);
  });

  onDestroy(() => { store.reset()});
  
  function onClick(){
    searchTerm.set(searchValue);
  }
</script>

<div
  class="{$$props.class || ''} duk-search-list"
>
  <Control width="full">
    <Button slot="buttonPostfix" on:click="{onClick}">
      <Icon name="magnify" size="sm"/>
    </Button>
    <TextField placeholder="Search" bind:value="{searchValue}"/>
  </Control>
  {#each $searchResults as token}
    <Item token="{token}"/>
  {/each}
</div>
