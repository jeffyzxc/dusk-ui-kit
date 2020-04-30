<script>
  import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    variants,
    types
  } from "@dusk/helpers";
  import "./styles.css";
  import { Input, Label } from "@dusk/elements";
  import createRipple from "@dusk/helpers/ripple.js";


  let className = "";
  export { className as class };
  export let variant = variants.ATOM.CHECKBOX.BRAND;
  export let name = "";
  export let checked = false;
  export let id = "";
  export const use = [];

  const forwardEvents = forwardEventsBuilder(current_component);
  const ripple = createRipple(variant);

  let context = getContext("DUK:button:context");

  $: actionProp = {};
  $: defaultProp = {};

  function getClassNames(variant, context) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.CHECKBOX.BRAND:
        classNames += " duk-checkbox--brand";
        break;
      case variants.ATOM.CHECKBOX.CTA:
        classNames += " duk-checkbox--cta";
        break;
      case variants.ATOM.CHECKBOX.INFO:
        classNames += " duk-checkbox--info";
        break;
      case variants.ATOM.CHECKBOX.SUCCESS:
        classNames += " duk-checkbox--success";
        break;
      case variants.ATOM.CHECKBOX.WARNING:
        classNames += " duk-checkbox--warning";
        break;
      case variants.ATOM.CHECKBOX.DANGER:
        classNames += " duk-checkbox--danger";
        break;
      case variants.ATOM.CHECKBOX.LIGHT:
        classNames += " duk-checkbox--light";
        break;
      case variants.ATOM.CHECKBOX.DARK:
        classNames += " duk-checkbox--dark";
        break;
      case variants.ATOM.CHECKBOX.WHITE:
        classNames += " duk-checkbox--white";
        break;
      case variants.ATOM.CHECKBOX.BLACK:
        classNames += " duk-checkbox--black";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<div
  class="duk-checkbox {className} {getClassNames(variant, context)}"
  {...exclude($$props, ['use', 'class', 'variant', 'id', 'name', 'type'])}
>
  <Input
    use="{[forwardEvents, ripple, ...use]}"
    class="duk-checkbox__button"
    type="{types.ATOM.CHECKBOX}"
    {name}
    {checked}
    id="{id}"
    {...actionProp}
    {...defaultProp}
  />
  <Label class="duk-checkbox__label" for="{id}">
    <slot />
  </Label>
</div>
