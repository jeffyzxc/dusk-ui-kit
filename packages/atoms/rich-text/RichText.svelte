<script>
  import * as marked from "marked";
  import "./styles.css";
  export let markdown;
</script>

<div class="rich-text">
  {#if markdown}
    {@html marked(markdown)}
  {:else}
    <slot />
  {/if}
</div>
