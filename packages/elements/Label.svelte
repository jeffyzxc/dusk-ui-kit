<script>
  import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts
  } from "@dusk/ui-kit-helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  const context = getContext("DUK:label:context");
  function getClassNames(context) {
    let classNames = "";

    switch (context) {
      case contexts.LABEL.BUTTON:
        classNames += " duk-button__label";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<span
  use:useActions="{use}"
  use:forwardEvents
  class="{className}
  {getClassNames(context)}"
  {...exclude($$props, ['use', 'class'])}>
  <slot />
</span>
