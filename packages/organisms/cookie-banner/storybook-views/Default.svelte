<script>
  import CookieBanner from "../CookieBanner.svelte";
  export let cookie;
  export let config;
  export let description;
</script>

<CookieBanner cookie="{cookie}" config="{config}" description="{description}" />
