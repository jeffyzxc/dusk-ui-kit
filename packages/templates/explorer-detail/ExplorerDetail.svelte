<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
  export let isLoading = false;
  export let isError = false;
</script>

<Template
  class="{$$props.class || ''} duk-template-explorer-detail"
  $$restProps="{$$restProps}"
  isLoading="{isLoading}"
  isError="{isError}"
  let:width
  let:height
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
    <div class="duk-template-explorer-detail__details">
      <slot name="detail-details" height="{height}" width="{width}" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-explorer-detail__list">
      <slot name="detail-list" height="{height}" width="{width}" />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
