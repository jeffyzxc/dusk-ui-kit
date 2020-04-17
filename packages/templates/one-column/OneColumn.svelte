<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  export let gutters = true;

  let className = "";
  export { className as class };

  function getClassNames(gutters) {
    let classNames = "";

    if (gutters) classNames += "duk-template--gutters";

    return classNames;
  }
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class="duk-template duk-template__one-column {className}
  {getClassNames(gutters)}"
  {...exclude($$props, ['use', 'class', 'gutters'])}>
  <div class="duk-template__one-column__header">
    <slot name="header" />
  </div>
  <div class="duk-template__content duk-template__one-column__content">
    <div
      class="duk-template__column duk-template__one-column__content__central">
      <slot name="central" />
      <slot />
    </div>
  </div>
  <div class="duk-template__one-column__footer">
    <slot name="footer" />
  </div>
</div>
