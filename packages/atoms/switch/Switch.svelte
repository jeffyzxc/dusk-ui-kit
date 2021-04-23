<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, variants } from "@dusk-network/helpers";
  import "./styles.css";
  import { InputCheckbox, Label } from "@dusk-network/elements";

  let className = "";
  export { className as class };

  export let id;
  export let name;
  export let value = undefined;
  export let variant = variants.ATOM.SWITCH.BRAND;
  export let disabled = false;
  export const use = [];

  const forwardEvents = forwardEventsBuilder(current_component);

  $: actionProp = {};
  $: defaultProp = {};

  function getClassNames(variant) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.SWITCH.BRAND:
        classNames += " duk-switch--brand";
        break;
      case variants.ATOM.SWITCH.CTA:
        classNames += " duk-switch--cta";
        break;
      case variants.ATOM.SWITCH.INFO:
        classNames += " duk-switch--info";
        break;
      case variants.ATOM.SWITCH.SUCCESS:
        classNames += " duk-switch--success";
        break;
      case variants.ATOM.SWITCH.WARNING:
        classNames += " duk-switch--warning";
        break;
      case variants.ATOM.SWITCH.DANGER:
        classNames += " duk-switch--danger";
        break;
      case variants.ATOM.SWITCH.LIGHT:
        classNames += " duk-switch--light";
        break;
      case variants.ATOM.SWITCH.DARK:
        classNames += " duk-switch--dark";
        break;
      case variants.ATOM.SWITCH.WHITE:
        classNames += " duk-switch--white";
        break;
      case variants.ATOM.SWITCH.BLACK:
        classNames += " duk-switch--black";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<Label
  for="{id}"
  class="duk-switch {className}
  {getClassNames(variant)}"
  {...exclude($$props, ["use", "class", "variant", "id", "name", "type"])}
>
  <div class="duk-switch__inner">
    <InputCheckbox
      use="{[forwardEvents, ...use]}"
      class="duk-switch__inner__checkbox sr-only"
      name="{name}"
      id="{id}"
      bind:value
      disabled="{disabled}"
      {...actionProp}
      {...defaultProp}
    />
    <div class="duk-switch__inner__track"></div>
    <div class="duk-switch__inner__thumb"></div>
  </div>
  <span class="ml-2 cursor-pointer">
    <slot />
  </span>
</Label>
