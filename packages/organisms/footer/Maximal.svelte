<script>
  import { exclude } from "@dusk/helpers";
  import CategoryMenu from "./menu/CategoryMenu.svelte";
  import Newsletter from "./menu/Newsletter.svelte";

  export let tone;
  export let categories;
</script>

<div
  class="duk-footer__maximal container"
  {...exclude($$props, ['use', 'class', 'copyright', 'social', 'categories', 'tone'])}>
  {#each categories as category}
    <CategoryMenu category="{category}" />
  {/each}
  <Newsletter tone="{tone}" />
</div>
