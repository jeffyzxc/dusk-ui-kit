<script>
  import { setContext } from "svelte";
  import { contexts, variants } from "@dusk-network/helpers";

  // export let id = "__DUK-table-row" + Math.random().toString(36);
  // export let expanded = false;
  export let type = null;
  export let variant = variants.ATOM.TABLE.DEFAULT;

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
  class:duk-table__row--cta="{variant === variants.ATOM.TABLE.CTA}"
  class:duk-table__row--success="{variant === variants.ATOM.TABLE.SUCCESS}"
  class:duk-table__row--warning="{variant === variants.ATOM.TABLE.WARNING}"
  class:duk-table__row--danger="{variant === variants.ATOM.TABLE.DANGER}"
>
  <slot />
</tr>
