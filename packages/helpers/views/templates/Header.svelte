<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts
  } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
</script>

<header
  use:useActions="{use}"
  use:forwardEvents
  class="duk-template__header {className}
  "
  {...exclude($$props, ['use', 'class'])}>
  <slot />
</header>
