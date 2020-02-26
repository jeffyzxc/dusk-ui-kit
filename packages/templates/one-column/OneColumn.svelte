<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class="duk-template duk-template__one-column {className}"
  {...exclude($$props, ['use', 'class'])}>
  <div class="duk-template__one-column__header">
    <slot name="header" />
  </div>
  <div class="duk-template__column duk-template__one-column__content">
    <slot name="central" />
    <slot />
  </div>
  <div class="duk-template__one-column__footer">
    <slot name="footer" />
  </div>
</div>
