<script>
  import { getContext } from "svelte";
  import { contexts, variants } from "@dusk-network/helpers";

  export let variant = variants.ATOM.TABLE.DEFAULT;
  export let cols = "1";

  let context = getContext("DUK:table:row:datum:context");
</script>

{#if context === contexts.DATUM.ROW.HEAD}
  <th
    class="{$$props.class ||
      ''} duk-table__datum duk-table__datum--head duk-table__datum--cols-{cols}"
    class:duk-table__datum--cta="{variant === variants.ATOM.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.ATOM.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.ATOM.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.ATOM.TABLE.DANGER}"
  >
    <slot />
  </th>
{:else if context === contexts.DATUM.ROW.FOOT}
  <td
    class="{$$props.class ||
      ''} duk-table__datum duk-table__datum--foot duk-table__datum--cols-{cols}"
    class:duk-table__datum--cta="{variant === variants.ATOM.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.ATOM.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.ATOM.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.ATOM.TABLE.DANGER}"
  >
    <slot />
  </td>
{:else}
  <td
    class="{$$props.class || ''} duk-table__datum duk-table__datum--cols-{cols}"
    class:duk-table__datum--cta="{variant === variants.ATOM.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.ATOM.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.ATOM.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.ATOM.TABLE.DANGER}"
  >
    <slot />
  </td>
{/if}
