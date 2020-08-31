<script>
  import { setContext } from "svelte";
  import { exclude, variants, states, tones, contexts, types } from "@dusk/helpers";
  import Icon from "@dusk/icon";
  import { Label } from "@dusk/elements";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let type = types.MOLECULE.CONTROL.STACKED;
  export let tone = tones.MOLECULE.CONTROL.APP;
  export let variant = variants.MOLECULE.CONTROL.LIGHT;
  export let state = states.MOLECULE.CONTROL.BASE;
  export let id;
  export let label;
  export let message = "";

  setContext("DUK:text-field:context", contexts.TEXT_FIELD.CONTROL);

  function getClassNames(type, variant, state, tone) {
    return ` duk-control--${type} duk-control--${tone} duk-control--${variant} duk-control--${state}`;
  }
</script>

<div
  class="duk-control {className}
  {getClassNames(type, variant, state, tone)}
  "
  {...exclude($$props, ['use', 'class', 'type', 'tone', 'variant', 'state', 'label', 'message'])}>
  <div class="duk-control__wrapper">
    {#if label}
      <Label control="{id}" class="duk-control__label">{label}</Label>
    {/if}
    <slot />
  </div>
  <div class="duk-control__message">
    {#if (state === states.MOLECULE.CONTROL.WARNING || state === states.MOLECULE.CONTROL.DANGER) && message !== ''}
      <Icon name="alert-outline" class="duk-control__message__icon" />
    {/if}
    <p>
      {#if state !== states.MOLECULE.CONTROL.SUCCESS && message !== ''}{message}{/if}
    </p>
  </div>
</div>
