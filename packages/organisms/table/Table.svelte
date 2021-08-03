<script>
  import { options } from "./stores/options.js";
  import { pageNumber } from "./stores/state.js";
  import { table as dataTable } from "./table.js";
  // import Search from './components/Search.svelte'
  import Pagination from "@dusk-network/pagination/Pagination.svelte";
  import { onMount, onDestroy } from "svelte";
  import "./styles.css";

  export let data = [];
  export let settings = {};

  $: {
    dataTable.setRows(data);
    options.update(settings);
  }

  onMount(() => {
    dataTable.init();
  });
  onDestroy(() => dataTable.reset());
</script>

<div class="{$$props.class || ''} duk-table">
  <div class="duk-table__title">
    <slot name="title" />
  </div>
  <table class="duk-table__table">
    <slot name="head" />
    <slot />
    <slot name="foot" />
  </table>
  <div class="duk-table__actions">
    {#if $options.pagination === true}
      <Pagination pageNumber="{pageNumber}" items="{data}" itemsPerPage="{$options.rowPerPage}" />
    {/if}
    <slot name="actions" />
  </div>
</div>
