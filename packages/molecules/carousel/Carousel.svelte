<script>
  import { createEventDispatcher, getContext } from "svelte";
  import { exclude, variants, contexts } from "@dusk-network/helpers";
  import Carousel from "@beyonk/svelte-carousel/src/Carousel.svelte"; // TODO Webpack is not loading the shorthand. Needs investigation.
  import "./styles.css";

  let className = "";
  export { className as class };
  export const use = [];

  let context = getContext("DUK:carousel:context") || "";
  const dispatch = createEventDispatcher();
  const change = () => dispatch("change");
</script>

<div class="duk-carousel {className}" {...exclude($$props, ['use', 'class'])}>
  <Carousel perPage="1" controls="{false}" dots="{false}" on:change="{change}">
    <slot />
  </Carousel>
</div>
