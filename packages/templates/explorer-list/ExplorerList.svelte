<script>
  import Template from "@dusk-network/default";
  import "./styles.css";

  /**
   * Toggles the template global loading state if a boolean, otherwise an object that maps to the slots
   * that are loading.
   *
   * @type { "boolean" | "object" }
   */
  export let isLoading = false;

  /**
   * Toggles the template error state.
   */
  export let isError = false;
</script>

<Template
  class="{$$props.class || ''} duk-template-explorer-list"
  $$restProps="{$$restProps}"
  isLoading="{isLoading}"
  isError="{isError}"
>
  <svelte:fragment slot="navbar">
    <slot name="navbar" />
  </svelte:fragment>
  <svelte:fragment slot="loading">
    <slot name="loading" />
  </svelte:fragment>
  <svelte:fragment slot="error">
    <slot name="error" />
  </svelte:fragment>
  <section class="duk-template__container--no-padding">
    <div class="duk-template-explorer-list__all">
      <slot name="list" isLoading="{isLoading['list']}" />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
