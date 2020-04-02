<script>
  import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts
  } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let type = "text";
  export let placeholder = "";
  let className = "";
  export { className as class };
  const context = getContext("DUK:input:context");
  function getClassNames(context) {
    let classNames = "";

    switch (context) {
      case contexts.INPUT.TEXT:
        classNames += " duk-input__text";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<input
  use:useActions="{use}"
  use:forwardEvents
  class="{className}
  {getClassNames(context)}"
  {type}
  {placeholder}
  {...exclude($$props, ['use', 'class'])} />
