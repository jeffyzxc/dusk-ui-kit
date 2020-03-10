<script>
  import { getContext, setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts
  } from "@dusk/helpers";
  import { Tr } from "@dusk/elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let type = null;

  function getDatumContext(type) {
    let context = contexts.DATUM.ROW.BODY;
    if (type === "head") context = contexts.DATUM.ROW.HEAD;
    if (type === "foot") context = contexts.DATUM.ROW.FOOT;
    return context;
  }

  setContext("DUK:table:row:datum:context", getDatumContext(type));
</script>

<Tr
  class="duk-table__row {className}"
  use="{[forwardEvents, ...use]}"
  {...exclude($$props, ['use', 'class'])}>
  <slot />
</Tr>
