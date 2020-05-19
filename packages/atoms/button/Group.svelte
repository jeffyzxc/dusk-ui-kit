<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class=" duk-button-group {className}
  "
  {...exclude($$props, ['use', 'class'])}>
  <slot />
</div>
