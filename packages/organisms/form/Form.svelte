<script>
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    tones,
    variants,
    types,
    states,
  } from "@dusk/helpers";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let variant = variants.ORGANISM.FOOTER.BRAND;
  export let tone = tones.ORGANISM.FORM.APP;
  export let type = types.ORGANISM.FORM.STACKED;
  export let state = states.ORGANISM.FORM.BASE;
  export let use = [];

  const forwardEvents = forwardEventsBuilder(current_component);

  function getClassNames(type, variant, tone, state) {
    return ` duk-form--${type} duk-form--${tone} duk-form--${variant} duk-form--${state}`;
  }
</script>

<form
  use:useActions="{use}"
  use:forwardEvents
  class="duk-form {className}
  {getClassNames(type, variant, tone, state)}"
  {...exclude($$props, ['use', 'class', 'type', 'tone', 'variant', 'state'])}>
  <slot />
</form>
