<style>
  .duk-scrim {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import { fade } from "svelte/transition";
  import { quadOut, quadIn } from "svelte/easing";

  export let opacity = 0.5;
  export let inProps = { duration: 200, easing: quadIn };
  export let outProps = { duration: 200, easing: quadOut };
</script>

<div
  id="__DUK-scrim"
  class="duk-scrim"
  style="opacity: {opacity};"
  in:fade="{inProps}"
  out:fade="{outProps}"
  on:click></div>
