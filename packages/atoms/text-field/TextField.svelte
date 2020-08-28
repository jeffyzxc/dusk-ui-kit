<script>
  import { current_component } from "svelte/internal";
  import { exclude, forwardEventsBuilder, variants, types, states } from "@dusk/helpers";
  import { Input, Textarea } from "@dusk/elements";
  import "./styles.css";

  const forwardEvents = forwardEventsBuilder(current_component);

  export const use = [];

  let className = "";
  export { className as class };

  export let variant = variants.ATOM.TEXT_FIELD.LIGHT;
  export let type = types.ATOM.TEXT_FIELD.TEXT;
  export let placeholder = "";
  export let state = states.ATOM.TEXT_FIELD.BASE;
  export let component = type === types.ATOM.TEXT_FIELD.MULTI_LINE ? Textarea : Input;
  export let id;

  function getClassNames(variant, state) {
    let classNames = "duk-text-field";
    classNames += ` duk-text-field--${variant}`;
    if (state) classNames += ` duk-text-field--${variant}--${state}`;
    // switch (variant) {
    //   case variants.ATOM.TEXT_FIELD.LIGHT:
    //     classNames += ` duk-text-field--light ${state}`;
    //     break;
    //   case variants.ATOM.TEXT_FIELD.DARK:
    //     classNames += " duk-text-field--dark";
    //     break;
    // case variants.ATOM.TEXT_FIELD.SUCCESS:
    //   classNames += " duk-text-field--success";
    //   break;
    // case variants.ATOM.TEXT_FIELD.WARNING:
    //   classNames += " duk-text-field--warning";
    //   break;
    // case variants.ATOM.TEXT_FIELD.DANGER:
    //   classNames += " duk-text-field--danger";
    //   break;
    //   default:
    //     classNames += "";
    // }

    // switch (state) {
    //   case states.ATOM.TEXT_FIELD.BASE:
    //     classNames += "";
    //     break;
    //   case states.ATOM.TEXT_FIELD.SUCCESS:
    //     classNames += "";
    //     break;
    //   default:
    //     classNames += "";
    // }

    return classNames;
  }
</script>

<svelte:component
  this="{component}"
  use="{[forwardEvents, ...use]}"
  class="duk-text-field {className}
  {getClassNames(variant, state)}"
  {id}
  {placeholder}
  {type}
  {...exclude($$props, ['use', 'class', 'variant', 'type', 'state', 'placeholder'])}>
  <slot />
</svelte:component>
