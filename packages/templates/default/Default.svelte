<script>
  import "./styles.css";
  export let isLoading = false;
  export let isError = false;
</script>

<div
  class="duk-template {$$props.class || ''}"
  class:duk-template--loading="{isLoading}"
  class:duk-template--error="{isError}"
>
  {#if isLoading}
    <div class="duk-template__loading">
      <slot name="loading" />
    </div>
  {:else if isError}
    <div class="duk-template__error">
      <slot name="error" />
    </div>
  {:else}
    <slot />
  {/if}
</div>
