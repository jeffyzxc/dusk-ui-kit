<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-explorer-detail" $$restProps="{$$restProps}">
  <svelte:fragment slot="navbar">
    <slot name="navbar" />
  </svelte:fragment>
  <section class="duk-template__container">
    <div class="duk-template-explorer-detail__details">
      <slot name="detail-details" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-explorer-detail__list">
      <slot name="detail-list" />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
