<style lang="postcss">
  :global(.sb-logo) {
    @apply w-48;
  }
</style>

<script>
  import Logo from "../Logo.svelte";
  export let href;
</script>

<Logo href="{href}" class="sb-logo" />
