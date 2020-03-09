<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
</script>

<span use:useActions="{use}" use:forwardEvents {...exclude($$props, ['use'])}>
  <slot />
</span>
