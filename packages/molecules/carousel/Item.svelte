<script>
  import { exclude } from "@dusk-network/helpers";
  import Div from "@dusk-network/elements/Div.svelte";
  let className = "";
  export { className as class };
</script>

<svelte:component
  this="{Div}"
  class="duk-list__item {className}"
  {...exclude($$props, ["use", "class"])}
>
  <slot />
</svelte:component>
