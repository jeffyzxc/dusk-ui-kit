<script>
  import "./styles.css";

  /**
   * Toggles the template loading state if a boolean, otherwise an object that maps to the slots
   * that are loading can be provided and used in the app template.
   *
   * @type { "boolean" | "object" }
   */
  export let isLoading = false;

  /**
   * Toggles the template error state.
   */
  export let isError = false;

  let width;
  let height;
</script>

<div
  bind:clientWidth="{width}"
  bind:clientHeight="{height}"
  class="duk-template {$$props.class || ''}"
  class:duk-template--loading="{isLoading}"
  class:duk-template--error="{isError}"
>
  <div class="duk-template__navbar">
    <slot name="navbar" />
  </div>
  <main>
    {#if isLoading && typeof isLoading === "boolean"}
      <div class="duk-template__loading">
        <slot name="loading" />
      </div>
    {:else if isError}
      <div class="duk-template__error">
        <slot name="error" />
      </div>
    {:else}
      <slot width="{width}" height="{height}" />
    {/if}
  </main>
  <div class="duk-template__footer">
    <slot name="footer" />
  </div>
</div>
