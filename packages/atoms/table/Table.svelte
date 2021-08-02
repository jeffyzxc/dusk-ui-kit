<script>
  // import { setContext } from "svelte";
  // import { writable } from "svelte/store";
  // import { contexts } from "@dusk-network/helpers";
  // import { options } from "svelte-simple-datatables/src/stores/options.js";
  // import { datatable } from "./datatable.js";
  // import Search from './components/Search.svelte'
  // import Pagination from './components/Pagination.svelte'
  // import { onMount, onDestroy } from "svelte";
  import "./styles.css";

  // export let data = [];
  // export let settings = {};

  // $: {
  //   datatable.setRows(data);
  //   options.update(settings);
  // }

  // onMount(() => datatable.init());
  // onDestroy(() => datatable.reset());
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
    <slot name="actions" />
  </div>
</div>
