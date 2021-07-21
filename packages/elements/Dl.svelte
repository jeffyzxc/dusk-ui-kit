<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk-network/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
</script>

<dl use:useActions="{use}" use:forwardEvents {...exclude($$props, ["use"])}>
  <slot />
</dl>
