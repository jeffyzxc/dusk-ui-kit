<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, contexts } from "@dusk/helpers";
  import { Tr } from "@dusk/elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let type = null;
  export let highlight = false;

  function getDatumContext(type) {
    let context = contexts.DATUM.ROW.BODY;
    if (type === "head") context = contexts.DATUM.ROW.HEAD;
    if (type === "foot") context = contexts.DATUM.ROW.FOOT;
    return context;
  }

  const context = getDatumContext(type);
  setContext("DUK:table:row:datum:context", context);

  function getClassNames(highlight, context) {
    let classNames = "";
    if (highlight && context === contexts.DATUM.ROW.BODY)
      classNames += " duk-table__row--highlight";
    return classNames;
  }
</script>

<Tr
  class="duk-table__row {className}
  {getClassNames(highlight, context)}"
  use="{[forwardEvents, ...use]}"
  {...exclude($$props, ['use', 'class', 'highlight'])}>
  <slot />
</Tr>
