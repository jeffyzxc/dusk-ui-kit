<script>
  import { setContext } from "svelte";
  import { contexts, variants } from "@dusk-network/helpers";

  // export let id = "__DUK-table-row" + Math.random().toString(36);
  // export let expanded = false;
  export let type = null;
  export let variant = variants.TABLE.DEFAULT;

  function getDatumContext(type) {
    let context = contexts.DATUM.ROW.BODY;
    if (type === "head") context = contexts.DATUM.ROW.HEAD;
    if (type === "foot") context = contexts.DATUM.ROW.FOOT;
    return context;
  }
  setContext("DUK:table:row:datum:context", getDatumContext(type));
</script>

<tr
  class="{$$props.class || ''} duk-table__row"
  class:duk-table__row--cta="{variant === variants.TABLE.CTA}"
  class:duk-table__row--success="{variant === variants.TABLE.SUCCESS}"
  class:duk-table__row--warning="{variant === variants.TABLE.WARNING}"
  class:duk-table__row--danger="{variant === variants.TABLE.DANGER}"
>
  <slot />
</tr>
