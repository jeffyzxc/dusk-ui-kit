<script context="module">
  export const internals = {
    component: null,
    dukClass: null,
    contexts: {}
  };
</script>

<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions
  } from "@dusk/ui-kit-helpers";
  export let use = [];
  let className = "";
  export { className as class };
  export let component = internals.component;
  let dukForwardEvents = [];
  export { dukForwardEvents as forwardEvents };
  const dukClass = internals.class;
  const contexts = internals.contexts;
  const forwardEvents = forwardEventsBuilder(
    current_component,
    dukForwardEvents
  );
  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }
</script>

<svelte:component
  this="{component}"
  use="{[forwardEvents, ...use]}"
  class="{dukClass}
  {className}"
  {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])}>
  <slot />
</svelte:component>
