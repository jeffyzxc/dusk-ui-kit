<script>
  import Icon from "@dusk-network/icon";
  import { setContext, getContext, onMount } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import variants from "@dusk-network/helpers/variants.js";
  import { key } from "./key.js";

  export let variant = variants.TABLE.DEFAULT;
  export let cols = "1";
  export let dataKey = undefined;
  export let hidden = false;
  export let actions = false;
  export let id = "__DUK-table-datum" + Math.random().toString(36);

  const { activeRow } = getContext(key);

  let context = getContext("DUK:table:row:datum:context");
  let gridType = getContext("DUK:datum:context");
  let ref, refActions, activeRowId;

  setContext("DUK:loading-indicator:context", contexts.LOADING_INDICATOR.DATUM);
  setContext("DUK:truncate-text:context", contexts.TRUNCATE_TEXT.DATUM);
  setContext("DUK:heading:context", contexts.HEADING.DATUM);

  onMount(() => {
    if (ref && hidden && context === contexts.DATUM.ROW.BODY) {
      ref.parentNode.classList.add("duk-table__row--has-extra-information");
    }
  });
  const handleClick = () => {
    if (refActions && context === contexts.DATUM.ROW.BODY) {
      activeRowId = refActions.parentNode.id;
      $activeRow === activeRowId ? activeRow.set(null) : activeRow.set(activeRowId);
    }
  };
</script>

{#if context === contexts.DATUM.ROW.HEAD}
  <th
    class="{$$props.class ||
      ''} duk-table__datum duk-table__datum--head duk-table__datum--cols-{cols}"
    class:duk-table__datum--cta="{variant === variants.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.TABLE.DANGER}"
    class:duk-table__datum--sortable="{dataKey}"
    class:duk-table__datum--hidden="{hidden}"
    data-key="{dataKey}"
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
{:else if actions}
  <td
    class="{$$props.class ||
      ''} duk-table__datum duk-table__datum--actions duk-table__datum--cols-{cols}"
    class:duk-table__datum--cta="{variant === variants.TABLE.CTA}"
    class:duk-table__datum--success="{variant === variants.TABLE.SUCCESS}"
    class:duk-table__datum--warning="{variant === variants.TABLE.WARNING}"
    class:duk-table__datum--danger="{variant === variants.TABLE.DANGER}"
    on:click="{handleClick}"
    bind:this="{refActions}"
  >
    <span
      class="duk-table__datum--actions-icon"
      class:duk-table__datum--actions-icon--open="{$activeRow === activeRowId}"
    >
      <Icon name="menu-down-outline" size="sm" />
    </span>
  </td>
{:else}
  <td
    class="{$$props.class || ''} duk-table__datum duk-table__datum--cols-{hidden === true
      ? gridType
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
