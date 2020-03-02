<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions } from "@dusk/helpers";
  import { A, Div, Li } from "@dusk/elements";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let href = null;
  export let wrapper = href == null ? Div : A;
</script>

<svelte:component
  this="{Li}"
  use="{[forwardEvents, ...use]}"
  class="duk-list__item {className}"
  {...exclude($$props, ['use', 'class', 'href'])}>
  <slot name="wrapper">
    <svelte:component
      this="{wrapper}"
      aria-disabled="{!href}"
      {href}
      class="duk-list__item__wrapper">
      <slot />
    </svelte:component>
  </slot>
</svelte:component>
