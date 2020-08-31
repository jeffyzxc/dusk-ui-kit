<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let control;
  let className = "";
  export { className as class };
</script>

<label
  use:useActions="{use}"
  use:forwardEvents
  class="{className}"
  for="{control}"
  {...exclude($$props, ['use', 'class', 'control'])}>
  <slot />
</label>
