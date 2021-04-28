<script>
  import { createEventDispatcher } from "svelte";
  import { exclude } from "@dusk-network/helpers";
  import Carousel from "@beyonk/svelte-carousel/src/Carousel.svelte";
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
  const dispatch = createEventDispatcher();
  const change = () => dispatch("change");
</script>

<div class="duk-carousel {className}" {...exclude($$props, ["use", "class"])}>
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
    on:change="{change}"
  >
    <slot />
  </Carousel>
</div>
