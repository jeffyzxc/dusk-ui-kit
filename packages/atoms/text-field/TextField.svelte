<script>
  import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    exclude,
    forwardEventsBuilder,
    variants,
    types,
    states,
    tones,
    contexts,
  } from "@dusk/helpers";
  import { Input, Textarea } from "@dusk/elements";
  import "./styles.css";

  const forwardEvents = forwardEventsBuilder(current_component);

  export const use = [];

  let className = "";
  export { className as class };

  export let variant = variants.ATOM.TEXT_FIELD.LIGHT;
  export let tone = tones.ATOM.TEXT_FIELD.APP;
  export let type = types.ATOM.TEXT_FIELD.TEXT;
  export let placeholder = "";
  export let state = states.ATOM.TEXT_FIELD.BASE;
  export let component = type === types.ATOM.TEXT_FIELD.MULTI_LINE ? Textarea : Input;
  export let id;
  export let name;

  let context = getContext("DUK:text-field:context") || "";

  function getClassNames(variant, state, tone, context) {
    let classNames = `duk-text-field--${tone} duk-text-field--${variant} duk-text-field--${state}`;

    switch (context) {
      case contexts.TEXT_FIELD.CONTROL:
        classNames += " duk-control__input duk-control__input--text-field";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<svelte:component
  this="{component}"
  use="{[forwardEvents, ...use]}"
  class="duk-text-field {className}
  {getClassNames(variant, state, tone, context)}"
  {id}
  {placeholder}
  {type}
  {name}
  {...exclude($$props, [
    'use',
    'class',
    'tone',
    'variant',
    'type',
    'state',
    'placeholder',
    'name',
  ])}>
  <slot />
</svelte:component>
