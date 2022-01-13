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
  class="{$$props.class || ''} duk-template-explorer-homepage"
  $$restProps="{$$restProps}"
  isError="{isError}"
  isLoading="{isLoading}"
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
  <section class="duk-template__container">
    <div class="duk-template-explorer-homepage__control-panel">
      <slot name="control-panel" isLoading="{isLoading['control_panel']}" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-explorer-homepage__latest">
      <div class="duk-template-explorer-homepage__latest-blocks">
        <slot name="latest-blocks" isLoading="{isLoading['latest_blocks']}" />
      </div>
      <div class="duk-template-explorer-homepage__latest-transactions">
        <slot name="latest-transactions" isLoading="{isLoading['latest_transactions']}" />
      </div>
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
