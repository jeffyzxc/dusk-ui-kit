<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk-network/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let id = "";
  let className = "";
  export { className as class };
</script>

<input
  use:useActions="{use}"
  use:forwardEvents
  class="duk-radio {className}"
  type="radio"
  id="{id}"
  {...exclude($$props, ['use', 'class'])} />
