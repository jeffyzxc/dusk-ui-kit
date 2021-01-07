<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude } from "@dusk-network/helpers";
  import { A, Span, Li } from "@dusk-network/elements";
  import createRipple from "@dusk-network/helpers/ripple.js";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let href = null;
  export let active = null;
  export let wrapper = href == null ? Span : A;
  const ripple = createRipple();
  if (href) use.push(ripple);
</script>

<svelte:component
  this="{Li}"
  class="duk-list__item {className}"
  {...exclude($$props, ['use', 'class', 'href', 'active'])}>
  <slot name="wrapper">
    <svelte:component
      this="{wrapper}"
      use="{[forwardEvents, ...use]}"
      href="{href}"
      class="duk-list__item__wrapper {active ? 'duk-list__item__wrapper--active' : ''}">
      <slot />
    </svelte:component>
  </slot>
</svelte:component>
