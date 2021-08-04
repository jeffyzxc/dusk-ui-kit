<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions, types, states } from "@dusk-network/helpers";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let type = types.FORM.STACKED;
  export let state = states.FORM.BASE;
  export let use = [];

  const forwardEvents = forwardEventsBuilder(current_component);

  function getClassNames(type, state) {
    return ` duk-form--${type} duk-form--${state}`;
  }
</script>

<form
  use:useActions="{use}"
  use:forwardEvents
  class="duk-form {className}
  {getClassNames(type, state)}"
  {...exclude($$props, ["use", "class", "type", "variant", "state"])}
>
  <slot />
</form>
