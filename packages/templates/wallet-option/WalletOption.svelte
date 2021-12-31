<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
  export let isLoading = false;
  export let isError = false;
</script>

<Template
  class="{$$props.class || ''} duk-template-wallet-option"
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
    <div class="duk-template-wallet-option__heading-mobile">
      <slot name="heading-mobile" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-wallet-option__block">
      <div class="duk-template-wallet-option__lead-question">
        <slot name="lead-question" />
      </div>
      <div class="duk-template-wallet-option__option">
        <slot name="option" />
      </div>
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
