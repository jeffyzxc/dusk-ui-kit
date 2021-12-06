<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-explorer-charts" $$restProps="{$$restProps}">
  <svelte:fragment slot="navbar">
    <slot name="navbar" />
  </svelte:fragment>
  <section class="duk-template__container">
    <div class="duk-template-explorer-charts__map">
      <slot name="map" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-explorer-charts__market-data">
      <slot name="market-data" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-explorer-charts__blockchain-data">
      <slot name="blockchain-data" />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
