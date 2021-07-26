<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude } from "@dusk-network/helpers";
  import Dt from "@dusk-network/elements/Dt.svelte";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
</script>

<svelte:component
  this="{Dt}"
  class="duk-list__key {className}"
  use="{[forwardEvents, ...use]}"
  {...exclude($$props, ["use", "class"])}
>
  <slot />
</svelte:component>
