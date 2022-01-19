<script>
  import { onDestroy, setContext, getContext } from "svelte";
  import Pagination from "@dusk-network/pagination";
  import DropDown from "@dusk-network/drop-down";
  import contexts from "@dusk-network/helpers/contexts.js";
  import { getTable } from "./table.js";
  import { key } from "./key.js";
  import { createContext } from "./context.js";
  import "./styles.css";

  /**
   * Sets the data displayed in the Table.
   */
  export let data = [];

  /**
   * Sets the settings available in the Table.
   */
  export let settings = {};

  /**
   * Sets the number of columns of the Table Row, default is 12 columns but can be extended to 24.
   */
  export let gridType = "12";

  setContext(key, {});
  createContext();

  const table = getTable();
  const { rows, id, options, pageNumber, columns, activeRow } = getContext(key);

  export const dataRows = rows;

  $: {
    table.setRows(data);
    options.update(settings);
  }

  onDestroy(() => table.reset());

  setContext("DUK:drop-down:context", contexts.DROP_DOWN.TABLE);
  setContext("DUK:pagination:context", contexts.PAGINATION.TABLE);
  setContext("DUK:datum:context", gridType);
</script>

<div id="{$id}" class="{$$props.class || ''} duk-table">
  <div class="duk-table__title">
    <slot name="title" />
  </div>
  <table class="duk-table__table" class:duk-table__table--extended="{gridType === '24'}">
    <slot name="head" />
    <slot />
    <slot name="foot" />
  </table>
  <!-- {#if $$slots.actions || $options.pagination || $options.limiter} -->
  <div class="duk-table__actions">
    {#if $options.pagination === true}
      <Pagination
        pageNumber="{pageNumber}"
        items="{data}"
        itemsPerPage="{$options.rowsPerPage}"
        on:pagination="{() => {
          columns.redraw();
          activeRow.set(null);
        }}"
      />
    {/if}
    <slot name="actions" />
    {#if $options.limiter === true}
      <DropDown
        dropUp="{true}"
        items="{data}"
        options="{[10, 20, 30, 40, 50]}"
        on:select="{(event) => {
          settings = { ...settings, rowsPerPage: event.detail };
          columns.redraw();
          activeRow.set(null);
        }}"
      />
    {/if}
  </div>
  <!-- {/if} -->
</div>
