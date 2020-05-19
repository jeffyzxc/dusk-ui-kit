<script context="module">
  export const internals = {
    component: null,
    dukClass: null,
    contexts: {},
  };
</script>

<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude } from "@dusk/helpers";
  export let use = [];
  let className = "";
  export { className as class };
  export let component = internals.component;
  let dukForwardEvents = [];
  export { dukForwardEvents as forwardEvents };
  const dukClass = internals.class;
  const contexts = internals.contexts;
  const forwardEvents = forwardEventsBuilder(current_component, dukForwardEvents);
  for (let context in contexts) {
    /* eslint-disable no-prototype-builtins */
    if (contexts.hasOwnProperty(context)) {
      /* eslint-enable no-prototype-builtins */
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
