<script>
  import Template from "../default";
  import "./styles.css";
  export let isLoading = false;
  export let isError = false;
</script>

<Template
  class="{$$props.class || ''} duk-template-wallet-homepage"
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
    <div class="duk-template-wallet-homepage__hero">
      <slot name="hero" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-wallet-homepage__cta">
      <div class="duk-template-wallet-homepage__cta-create">
        <slot name="cta-create" />
      </div>
      <div class="duk-template-wallet-homepage__cta-access">
        <slot name="cta-access" />
      </div>
    </div>
  </section>
  <section class="duk-template-wallet-homepage__about">
    <div class="duk-template__container">
      <slot name="about-dusk" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-wallet-homepage__info">
      <div class="duk-template-wallet-homepage__info-security">
        <slot name="info-security" />
      </div>
      <div class="duk-template-wallet-homepage__info-access">
        <slot name="info-access" />
      </div>
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-wallet-homepage__faq">
      <slot name="faq" />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
