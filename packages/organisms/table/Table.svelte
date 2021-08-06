<script>
  import { options } from "./stores/options.js";
  import { pageNumber, activeRow } from "./stores/state.js";
  import { table as dataTable } from "./table.js";
  // import Search from './components/Search.svelte'
  import Pagination from "@dusk-network/pagination/Pagination.svelte";
  import Limiter from "@dusk-network/limiter/Limiter.svelte";
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

  const handlePagination = () => {
    activeRow.set(null);
  };

  const handleLimit = (event) => {
    activeRow.set(null);
    settings = { ...settings, rowPerPage: event.detail };
  };
</script>

active row: {$activeRow}
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
      <Pagination
        pageNumber="{pageNumber}"
        items="{data}"
        itemsPerPage="{$options.rowPerPage}"
        on:pagination="{handlePagination}"
      />
    {/if}
    <slot name="actions" />
    {#if $options.limiter === true}
      <Limiter items="{data}" options="{[10, 20, 30, 40, 50]}" on:limit="{handleLimit}" />
    {/if}
  </div>
</div>
