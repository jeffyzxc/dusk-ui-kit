<script>
  import { current_component } from "svelte/internal";
  import { getContext } from "svelte";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts
  } from "@dusk/helpers";
  import { Td, Th } from "@dusk/elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  let context = getContext("DUK:table:row:datum:context");
  export let component = context == contexts.DATUM.ROW.HEAD ? Th : Td;
</script>

<svelte:component
  this="{component}"
  use="{[forwardEvents, ...use]}"
  class="duk-table__row__datum {className}"
  {...exclude($$props, ['use', 'class', 'href'])}>
  <slot />
</svelte:component>
