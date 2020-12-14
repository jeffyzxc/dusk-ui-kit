<script>
  import { createEventDispatcher, getContext } from "svelte";
  import { exclude, variants, contexts } from "@dusk/helpers";
  import FlatPickr from "svelte-flatpickr";
  // import { Label } from "@dusk/elements";

  import "flatpickr/dist/flatpickr.css";
  import "flatpickr/dist/themes/light.css";
  import "./styles.css";

  let className = "";
  export { className as class };

  export let value;
  export let options;
  // export let handler;
  export let variant = variants.ATOM.DATE_PICKER.LIGHT;
  export let placeholder = "";
  export const use = [];

  let context = getContext("DUK:date-picker:context") || "";

  const dispatch = createEventDispatcher();

  function getClassNames(variant) {
    let classNames = `duk-date-picker--${variant}`;

    switch (context) {
      case contexts.DATE_PICKER.CONTROL:
        classNames += " duk-control__input duk-control__input--date-picker";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }

  const change = () => dispatch("change");
</script>

<div
  class="duk-date-picker {className}
  {getClassNames(variant, context)}"
  {...exclude($$props, ['use', 'class', 'variant', 'name', 'options', 'handler', 'placeholder'])}>
  <FlatPickr options="{options}" bind:value placeholder="{placeholder}" on:change="{change}" />
</div>
