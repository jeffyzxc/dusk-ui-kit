<script>
  import { setContext } from "svelte";
  import { exclude, variants, states, contexts, types } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Label from "@dusk-network/elements/Label.svelte";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let type = types.MOLECULE.CONTROL.STACKED;
  export let variant = variants.MOLECULE.CONTROL.LIGHT;
  export let state = states.MOLECULE.CONTROL.BASE;
  export let id;
  export let label;
  export let message = "";

  setContext("DUK:text-field:context", contexts.TEXT_FIELD.CONTROL);
  setContext("DUK:date-picker:context", contexts.DATE_PICKER.CONTROL);

  function getClassNames(type, variant, state) {
    return ` duk-control--${type} duk-control--${variant} duk-control--${state}`;
  }
</script>

<div
  class="duk-control {className}
  {getClassNames(type, variant, state)}
  "
  {...exclude($$props, ["use", "class", "type", "variant", "state", "label", "message"])}
>
  <div class="duk-control__wrapper">
    {#if label}
      <Label control="{id}" class="duk-control__label">{label}</Label>
    {/if}
    <slot />
  </div>
  <div class="duk-control__message">
    {#if (state === states.MOLECULE.CONTROL.WARNING || state === states.MOLECULE.CONTROL.DANGER) && message !== ""}
      <Icon name="alert-outline" class="duk-control__message__icon" />
    {/if}
    <p>
      {#if state !== states.MOLECULE.CONTROL.SUCCESS && message !== ""}{message}{/if}
    </p>
  </div>
</div>
