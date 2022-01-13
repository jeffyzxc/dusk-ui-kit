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
  class="{$$props.class || ''} duk-template-devops-dashboard"
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
  <section class="duk-template__container">
    <div class="duk-template-devops-dashboard__overview">
      <div class="duk-template-devops-dashboard__map">
        <slot name="map" isLoading="{isLoading['map']}" />
      </div>
      <div class="duk-template-devops-dashboard__node-status">
        <slot name="node-status" isLoading="{isLoading['node_status']}" />
      </div>
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-devops-dashboard__deployed-networks">
      <slot name="deployed-networks" isLoading="{isLoading['deployed_networks']}" />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
