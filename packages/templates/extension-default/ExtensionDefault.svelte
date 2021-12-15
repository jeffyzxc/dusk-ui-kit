<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
  export let isLoading = false;
  export let isError = false;
</script>

<Template
  class="{$$props.class || ''} dark duk-template-extension-default"
  $$restProps="{$$restProps}"
  isLoading="{isLoading}"
  isError="{isError}"
>
  <svelte:fragment slot="navbar">
    <slot name="logo" />
  </svelte:fragment>
  <svelte:fragment slot="loading">
    <slot name="loading" />
  </svelte:fragment>
  <svelte:fragment slot="error">
    <slot name="error" />
  </svelte:fragment>
  <section>
    <div class="duk-template-extension-default__content">
      <slot />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
