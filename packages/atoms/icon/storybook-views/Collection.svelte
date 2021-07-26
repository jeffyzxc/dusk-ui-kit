<style lang="postcss">
  .icon-collection-grid {
    @apply grid grid-cols-4 gap-5 w-full;
    @apply sm:grid-cols-10 sm:gap-10;
  }
</style>

<script>
  import Icon from "../Icon.svelte";
  import { icons } from "../../../helpers";
  export let variant;
  export let size;
  export let tooltip;
  export let href;
</script>

<div class="icon-collection-grid">
  {#each Object.values(icons) as icon}
    <Icon
      name="{icon}"
      title="{icon}"
      variant="{variant}"
      tooltip="{tooltip}"
      size="{size}"
      href="{href}"
    />
  {/each}
</div>
