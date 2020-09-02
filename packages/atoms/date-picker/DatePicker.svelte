<script>
  import { createEventDispatcher, getContext } from "svelte";
  import { exclude, variants, tones, contexts } from "@dusk/helpers";
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
  export let tone = tones.ATOM.DATE_PICKER.APP;
  export let placeholder = "";
  export const use = [];

  let context = getContext("DUK:date-picker:context") || "";

  const dispatch = createEventDispatcher();

  function getClassNames(variant, tone) {
    let classNames = `duk-date-picker--${variant} duk-date-picker--${tone}`;

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
  {getClassNames(variant, tone, context)}"
  {...exclude($$props, [
    'use',
    'class',
    'tone',
    'variant',
    'name',
    'options',
    'handler',
    'placeholder',
  ])}>
  <FlatPickr {options} bind:value {placeholder} on:change="{change}" />
</div>
