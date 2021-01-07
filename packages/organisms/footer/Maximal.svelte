<script>
  import { exclude } from "@dusk-network/helpers";
  import CategoryMenu from "./menu/CategoryMenu.svelte";
  import Newsletter from "./menu/Newsletter.svelte";

  export let categories;
</script>

<div
  class="duk-footer__maximal container"
  {...exclude($$props, ['use', 'class', 'copyright', 'social', 'categories'])}>
  {#each categories as category}
    <CategoryMenu category="{category}" />
  {/each}
  <Newsletter />
</div>
