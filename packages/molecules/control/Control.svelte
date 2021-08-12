<script>
  //TODO Refactor this into a Form Item component since this is only used in Forms and can then import DropDowns if needed.
  import { setContext } from "svelte";
  import { states, contexts, types, icons } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import "./styles.css";

  export let type = types.CONTROL.STACKED;
  export let state = states.CONTROL.DEFAULT;
  export let id = "__DUK-control" + Math.random().toString(36);
  export let label = "";
  export let message = "";

  setContext("DUK:icon:context", contexts.ICON.CONTROL);
  setContext("DUK:text-field:context", contexts.TEXT_FIELD.CONTROL);
  setContext("DUK:toggle:context", contexts.TOGGLE.CONTROL);
  setContext("DUK:drop-down:context", contexts.DROP_DOWN.CONTROL);
  setContext("DUK:date-picker:context", contexts.DATE_PICKER.CONTROL);
</script>

<div
  class="{$$props.class || ''} duk-control"
  class:duk-control--stacked="{type === types.CONTROL.STACKED}"
  class:duk-control--inline-fixed="{type === types.CONTROL.INLINE_FIXED}"
  class:duk-control--inline-flex="{type === types.CONTROL.INLINE_FLEX}"
  class:duk-control--success="{state === states.CONTROL.SUCCESS}"
  class:duk-control--warning="{state === states.CONTROL.WARNING}"
  class:duk-control--danger="{state === states.CONTROL.DANGER}"
>
  <div class="duk-control__wrapper">
    {#if label}
      <label for="{id}" class="duk-control__label">{label}</label>
    {/if}
    <slot />
  </div>
  <div class="duk-control__message">
    {#if state === states.CONTROL.WARNING || state === states.CONTROL.DANGER}
      <Icon name="{icons.ALERT_OUTLINE}" />
    {/if}
    {#if state === states.CONTROL.SUCCESS}
      <Icon name="{icons.CHECK_DECAGRAM_OUTLINE}" />
    {/if}
    {#if state !== states.CONTROL.SUCCESS && message !== ""}<p>{message}</p>{/if}
  </div>
</div>
