<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, variants, types } from "@dusk-network/helpers";
  import "./styles.css";
  import Input from "@dusk-network/elements/Input.svelte";
  import Label from "@dusk-network/elements/Label.svelte";
  import createRipple from "@dusk-network/helpers/ripple.js";

  let className = "";
  export { className as class };
  export let variant = variants.ATOM.CHECKBOX.BRAND;
  export let name = "";
  export let checked = false;
  export let id = "";
  export let value = "";
  export const use = [];

  const forwardEvents = forwardEventsBuilder(current_component);
  const ripple = createRipple(variant);

  $: actionProp = {};
  $: defaultProp = {};

  function getClassNames(variant) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.CHECKBOX.SUCCESS:
        classNames += " duk-checkbox--success";
        break;
      case variants.ATOM.CHECKBOX.WARNING:
        classNames += " duk-checkbox--warning";
        break;
      case variants.ATOM.CHECKBOX.DANGER:
        classNames += " duk-checkbox--danger";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<div
  class="duk-checkbox {className}
  {getClassNames(variant)}"
  {...exclude($$props, ["use", "class", "variant", "id", "name", "type"])}
>
  <Input
    use="{[forwardEvents, ripple, ...use]}"
    class="duk-checkbox__button"
    type="{types.ATOM.CHECKBOX}"
    name="{name}"
    checked="{checked}"
    value="{value}"
    id="{id}"
    {...actionProp}
    {...defaultProp}
  />
  <Label class="duk-checkbox__label" for="{id}">
    <slot />
  </Label>
</div>
