<style lang="postcss">
  :global(.sb-demo) {
    @apply text-indigo-500 w-48;
  }
</style>

<script>
  import LoadingIndicator from "../LoadingIndicator";
  export let variant;
</script>

<LoadingIndicator variant="{variant}" class="sb-demo" />
