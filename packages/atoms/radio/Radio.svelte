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
  export let variant = variants.ATOM.RADIO.BRAND;
  export let name = "";
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
      case variants.ATOM.RADIO.BRAND:
        classNames += " duk-radio--brand";
        break;
      case variants.ATOM.RADIO.CTA:
        classNames += " duk-radio--cta";
        break;
      case variants.ATOM.RADIO.INFO:
        classNames += " duk-radio--info";
        break;
      case variants.ATOM.RADIO.SUCCESS:
        classNames += " duk-radio--success";
        break;
      case variants.ATOM.RADIO.WARNING:
        classNames += " duk-radio--warning";
        break;
      case variants.ATOM.RADIO.DANGER:
        classNames += " duk-radio--danger";
        break;
      case variants.ATOM.RADIO.LIGHT:
        classNames += " duk-radio--light";
        break;
      case variants.ATOM.RADIO.DARK:
        classNames += " duk-radio--dark";
        break;
      case variants.ATOM.RADIO.WHITE:
        classNames += " duk-radio--white";
        break;
      case variants.ATOM.RADIO.BLACK:
        classNames += " duk-radio--black";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<div
  class="duk-radio {className} {getClassNames(variant, context)}"
  {...exclude($$props, ['use', 'class', 'variant', 'id', 'name', 'type'])}
>
  <Input
    use="{[forwardEvents, ripple, ...use]}"
    class="duk-radio__button"
    type="{types.ATOM.RADIO}"
    {name}
    id="{id}"
    {...actionProp}
    {...defaultProp}
  />
  <Label class="duk-radio__label" for="{id}">
    <slot />
  </Label>
</div>
