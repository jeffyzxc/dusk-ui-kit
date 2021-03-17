<script>
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import { exclude, variants, contexts } from "@dusk-network/helpers";
  import Carousel from "@beyonk/svelte-carousel/src/Carousel.svelte"; // TODO Webpack is not loading the shorthand. Needs investigation.
  import "./styles.css";

  let className = "";
  export { className as class };
  export const use = [];
  export let dots = true;
  export let loop = true;
  export let perPage = 1;
  export let autoplay = 0;
  export let duration = 200;
  export let easing = "ease-out";
  export let startIndex = 0;
  export let controls = 0;

  let carousel;
  let context = getContext("DUK:carousel:context") || "";
  const dispatch = createEventDispatcher();
  const change = () => dispatch("change");

  // onMount(async () => {
  //   console.log(carousel.$$);
  //   console.log(carousel.$$.context);
  // });
</script>

<div class="duk-carousel {className}" {...exclude($$props, ['use', 'class'])}>
  <Carousel
    bind:this="{carousel}"
    loop="{loop}"
    perPage="{perPage}"
    controls="{controls}"
    dots="{dots}"
    autoplay="{autoplay}"
    duration="{duration}"
    easing="{easing}"
    startIndex="{startIndex}"
    on:change="{change}">
    <slot />
  </Carousel>
</div>
