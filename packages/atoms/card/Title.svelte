<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts
  } from "@dusk/ui-kit-helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class="duk-card__title {className}
  "
  {...exclude($$props, ['use', 'class'])}>
  <slot />
</div>
