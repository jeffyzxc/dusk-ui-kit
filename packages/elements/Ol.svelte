<script>
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions
  } from "@dusk/ui-kit-helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
</script>

<ol use:useActions="{use}" use:forwardEvents {...exclude($$props, ['use'])}>
  <slot />
</ol>
