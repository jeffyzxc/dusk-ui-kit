<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let href = "javascript:void(0);";
</script>

<a use:useActions="{use}" use:forwardEvents {href} {...exclude($$props, ['use', 'href'])}>
  <slot />
</a>
