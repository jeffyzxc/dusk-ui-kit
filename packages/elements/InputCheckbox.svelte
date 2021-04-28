<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk-network/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  export let id = "";
  export let value = undefined;
  let className = "";
  export { className as class };
</script>

<input
  use:useActions="{use}"
  use:forwardEvents
  class="duk-checkbox {className}"
  type="checkbox"
  id="{id}"
  bind:checked="{value}"
  {...exclude($$props, ["use", "class"])}
/>
