<script>
  import { current_component } from "svelte/internal";
  import { getContext } from "svelte";
  import { forwardEventsBuilder, exclude, contexts } from "@dusk/helpers";
  import { Td, Th } from "@dusk/elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let prominent = false;
  let className = "";
  export { className as class };
  let context = getContext("DUK:table:row:datum:context");
  export let component = context == contexts.DATUM.ROW.HEAD ? Th : Td;

  function getClassNames(prominent, context) {
    let classNames = "";
    if (prominent && context === contexts.DATUM.ROW.HEAD)
      classNames += " duk-table__row__datum--prominent";
    return classNames;
  }
</script>

<svelte:component
  this="{component}"
  use="{[forwardEvents, ...use]}"
  class="duk-table__row__datum {className}
  {getClassNames(prominent, context)}"
  {...exclude($$props, ['use', 'class', 'prominent'])}>
  <slot />
</svelte:component>
