<script>
  // import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, variants, types } from "@dusk-network/helpers";
  import "./styles.css";
  import Input from "@dusk-network/elements/Input.svelte";
  import Label from "@dusk-network/elements/Label.svelte";
  import createRipple from "@dusk-network/helpers/ripple.js";

  let className = "";
  export { className as class };
  export let variant = variants.ATOM.RADIO.BRAND;
  export let name = "";
  export let id = "";
  export const use = [];

  const forwardEvents = forwardEventsBuilder(current_component);
  const ripple = createRipple(variant);

  // let context = getContext("DUK:button:context");

  $: actionProp = {};
  $: defaultProp = {};

  function getClassNames(variant) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.RADIO.SUCCESS:
        classNames += " duk-radio--success";
        break;
      case variants.ATOM.RADIO.WARNING:
        classNames += " duk-radio--warning";
        break;
      case variants.ATOM.RADIO.DANGER:
        classNames += " duk-radio--danger";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<div
  class="duk-radio {className}
  {getClassNames(variant)}"
  {...exclude($$props, ["use", "class", "variant", "id", "name", "type"])}
>
  <Input
    use="{[forwardEvents, ripple, ...use]}"
    class="duk-radio__button"
    type="{types.ATOM.RADIO}"
    name="{name}"
    id="{id}"
    {...actionProp}
    {...defaultProp}
  />
  <Label class="duk-radio__label" for="{id}">
    <slot />
  </Label>
</div>
