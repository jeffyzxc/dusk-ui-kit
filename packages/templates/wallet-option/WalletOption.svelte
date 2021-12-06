<script>
  import Template from "../default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-wallet-option" $$restProps="{$$restProps}">
  <svelte:fragment slot="navbar">
    <slot name="navbar" />
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
