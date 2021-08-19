<script>
  import { setContext } from "svelte";
  import { slide } from "svelte/transition";
  import contexts from "@dusk-network/helpers/contexts.js";
  import variants from "@dusk-network/helpers/variants.js";
  import { activeRow } from "./stores/state.js";

  export let type = null;
  export let variant = variants.TABLE.DEFAULT;
  export let id = "__DUK-table-row" + Math.random().toString(36);

  function getDatumContext(type) {
    let context = contexts.DATUM.ROW.BODY;
    if (type === "head") context = contexts.DATUM.ROW.HEAD;
    if (type === "foot") context = contexts.DATUM.ROW.FOOT;
    return context;
  }

  setContext("DUK:table:row:datum:context", getDatumContext(type));

  const handleClick = () => {
    if (getDatumContext(type) === contexts.DATUM.ROW.BODY) {
      $activeRow === id ? activeRow.set(null) : activeRow.set(id);
    }
  };
</script>

<tr
  class="{$$props.class || ''} duk-table__row"
  class:duk-table__row--cta="{variant === variants.TABLE.CTA}"
  class:duk-table__row--success="{variant === variants.TABLE.SUCCESS}"
  class:duk-table__row--warning="{variant === variants.TABLE.WARNING}"
  class:duk-table__row--danger="{variant === variants.TABLE.DANGER}"
  class:duk-table__row--active="{$activeRow === id}"
  id="{id}"
  on:click="{handleClick}"
  transition:slide
>
  <slot />
</tr>
