<script>
  import { setContext, getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    exclude,
    forwardEventsBuilder,
    useActions,
    variants,
    types,
    contexts
  } from "@dusk/helpers";
  import { Input, Textarea } from "@dusk/elements";
  import "./styles.css";

  const forwardEvents = forwardEventsBuilder(current_component);

  export const use = [];

  let className = "";
  export { className as class };

  export let variant = variants.ATOM.TEXT_FIELD.LIGHT;
  export let type = types.ATOM.TEXT_FIELD.TEXT;
  export let placeholder = "";
  export let component = type === types.ATOM.TEXT_FIELD.MULTI_LINE ? Textarea : Input;

  function getClassNames(variant, type) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.BUTTON.LIGHT:
        classNames += " duk-text-field--light";
        break;
      case variants.ATOM.BUTTON.DARK:
        classNames += " duk-text-field--dark";
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
  {getClassNames(variant, type)}"
  {placeholder}
  {type}
  {...exclude($$props, ['use', 'class', 'variant', 'type', 'placeholder'])}>
  <slot />
</svelte:component>
