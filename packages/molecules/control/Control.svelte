<script>
  import { setContext } from "svelte";
  import { exclude, states, contexts, types } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Label from "@dusk-network/elements/Label.svelte";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let type = types.MOLECULE.CONTROL.STACKED;
  export let state = states.MOLECULE.CONTROL.BASE;
  export let id = "";
  export let label = "";
  export let message = "";

  setContext("DUK:text-field:context", contexts.TEXT_FIELD.CONTROL);
  setContext("DUK:date-picker:context", contexts.DATE_PICKER.CONTROL);

  function getClassNames(type, state) {
    return ` duk-control--${type} duk-control--${state}`;
  }
</script>

<div
  class="duk-control {className}
  {getClassNames(type, state)}
  "
  {...exclude($$props, ["use", "class", "type", "state", "label", "message"])}
>
  <div class="duk-control__wrapper">
    {#if label}
      <Label control="{id}" class="duk-control__label">{label}</Label>
    {/if}
    <slot />
  </div>
  <div class="duk-control__message">
    {#if state === states.MOLECULE.CONTROL.WARNING || state === states.MOLECULE.CONTROL.DANGER}
      <Icon name="alert-outline" class="duk-control__message__icon" />
    {/if}
    {#if state === states.MOLECULE.CONTROL.SUCCESS}
      <Icon name="check-decagram-outline" class="duk-control__message__icon" />
    {/if}
    {#if state !== states.MOLECULE.CONTROL.SUCCESS && message !== ""}<p>{message}</p>{/if}
  </div>
</div>
