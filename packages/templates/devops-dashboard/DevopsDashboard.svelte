<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
  export let isLoading = false;
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
        <slot name="map" />
      </div>
      <div class="duk-template-devops-dashboard__node-status">
        <slot name="node-status" />
      </div>
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-devops-dashboard__deployed-networks">
      <slot name="deployed-networks" />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
