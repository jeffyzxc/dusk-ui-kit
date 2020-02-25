<script>
  import { setContext, getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../../helpers/forwardEvents.js";
  import { exclude } from "../../helpers/exclude.js";
  import { useActions } from "../../helpers/useActions.js";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class=" duk-button__group {className}
  "
  {...exclude($$props, ['use', 'class'])}>
  <slot />
</div>
