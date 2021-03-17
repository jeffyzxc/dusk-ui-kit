<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude } from "@dusk-network/helpers";
  import { Div } from "@dusk-network/elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  let className = "";
  export { className as class };
</script>

<svelte:component
  this="{Div}"
  class="duk-list__item {className}"
  {...exclude($$props, ['use', 'class'])}>
  <slot />
</svelte:component>
