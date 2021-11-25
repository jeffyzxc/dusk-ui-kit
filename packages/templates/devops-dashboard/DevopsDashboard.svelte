<script>
  import Template from "../default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-devops-dashboard" $$restProps="{$$restProps}">
  <svelte:fragment slot="navbar">
    <slot name="navbar" />
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
