<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude } from "@dusk-network/helpers";
  import Dd from "@dusk-network/elements/Dd.svelte";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
</script>

<svelte:component
  this="{Dd}"
  class="duk-list__value {className}"
  use="{[forwardEvents, ...use]}"
  {...exclude($$props, ["use", "class"])}
>
  <slot />
</svelte:component>
