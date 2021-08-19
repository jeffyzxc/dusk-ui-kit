<script>
  import { getContext, setContext, onMount } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import variants from "@dusk-network/helpers/variants.js";

  export let variant = variants.TABLE.DEFAULT;
  export let cols = "1";
  export let key;
  export let hidden = false;
  export let id = "__DUK-table-datum" + Math.random().toString(36);

  let context = getContext("DUK:table:row:datum:context");
  let ref;

  onMount(() => {
    if (ref && hidden && context === contexts.DATUM.ROW.BODY) {
      ref.parentNode.classList.add("duk-table__row--has-extra-information");
    }
  });

  setContext("DUK:list:context", contexts.LIST.DATUM);
</script>

{#if context === contexts.DATUM.ROW.HEAD}
  <th
    class="{$$props.class ||
      ''} duk-table__datum duk-table__datum--head duk-table__datum--cols-{cols}"
    class:duk-table__datum--cta="{variant === variants.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.TABLE.DANGER}"
    class:duk-table__datum--sortable="{key}"
    class:duk-table__datum--hidden="{hidden}"
    data-key="{key}"
  >
    <slot />
  </th>
{:else if context === contexts.DATUM.ROW.FOOT}
  <td
    class="{$$props.class || ''} duk-table__datum duk-table__datum--foot"
    class:duk-table__datum--cta="{variant === variants.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.TABLE.DANGER}"
  >
    <slot />
  </td>
{:else}
  <td
    class="{$$props.class || ''} duk-table__datum duk-table__datum--cols-{hidden === true
      ? '12'
      : cols}"
    class:duk-table__datum--cta="{variant === variants.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.TABLE.DANGER}"
    class:duk-table__datum--extra-information="{hidden}"
    id="{id}"
    bind:this="{ref}"
  >
    <slot />
  </td>
{/if}
