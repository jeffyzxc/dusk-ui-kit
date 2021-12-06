<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-explorer-homepage" $$restProps="{$$restProps}">
  <svelte:fragment slot="navbar">
    <slot name="navbar" />
  </svelte:fragment>
  <section class="duk-template__container">
    <div class="duk-template-explorer-homepage__control-panel">
      <slot name="control-panel" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-explorer-homepage__latest">
      <div class="duk-template-explorer-homepage__latest-blocks">
        <slot name="latest-blocks" />
      </div>
      <div class="duk-template-explorer-homepage__latest-blocks">
        <slot name="latest-transactions" />
      </div>
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
