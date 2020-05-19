<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
</script>

<label
  use:useActions="{use}"
  use:forwardEvents
  class="{className}"
  {...exclude($$props, ['use', 'class'])}>
  <slot />
</label>
