<script>
  import { setContext, getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEvents as forwardEventsBuilder } from "@dusk/helpers";
  import { exclude } from "@dusk/helpers";
  import { useActions } from "@dusk/helpers";
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
