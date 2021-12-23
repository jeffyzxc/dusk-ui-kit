<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
  export let isLoading = false;
  export let isError = false;
</script>

<Template
  class="{$$props.class || ''} duk-template-explorer-homepage"
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
