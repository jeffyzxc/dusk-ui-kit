<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude } from "@dusk-network/helpers";
  import A from "@dusk-network/elements/A.svelte";
  import Span from "@dusk-network/elements/Span.svelte";
  import Li from "@dusk-network/elements/Li.svelte";

  const forwardEvents = forwardEventsBuilder(current_component);

  let className = "";
  export { className as class };
  export let use = [];
  export let href = null;
  export let target = "_self";
  export let active = null;
  export let wrapper = href == null ? Span : A;
</script>

<svelte:component
  this="{Li}"
  class="{className} duk-list__item"
  {...exclude($$props, ["use", "class", "href", "active", "target"])}
>
  <slot name="wrapper">
    <svelte:component
      this="{wrapper}"
      use="{[forwardEvents, ...use]}"
      href="{href}"
      target="{target}"
      class="duk-list__item-wrapper {active ? 'duk-list__item-wrapper--active' : ''}"
    >
      <slot />
    </svelte:component>
  </slot>
</svelte:component>
