<script>
  import { getContext } from "svelte";
  import { contexts, variants } from "@dusk-network/helpers";

  export let variant = variants.TABLE.DEFAULT;
  export let cols = "1";
  export let key;

  let context = getContext("DUK:table:row:datum:context");
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
    data-key="{key}"
  >
    <slot />
  </th>
{:else if context === contexts.DATUM.ROW.FOOT}
  <td
    class="{$$props.class ||
      ''} duk-table__datum duk-table__datum--foot duk-table__datum--cols-{cols}"
    class:duk-table__datum--cta="{variant === variants.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.TABLE.DANGER}"
  >
    <slot />
  </td>
{:else}
  <td
    class="{$$props.class || ''} duk-table__datum duk-table__datum--cols-{cols}"
    class:duk-table__datum--cta="{variant === variants.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.TABLE.DANGER}"
  >
    <slot />
  </td>
{/if}
