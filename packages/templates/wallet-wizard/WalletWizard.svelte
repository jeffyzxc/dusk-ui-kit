<script>
  import Template from "../default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-wallet-wizard" $$restProps="{$$restProps}">
  <svelte:fragment slot="navbar">
    <slot name="navbar" />
  </svelte:fragment>
  <section class="duk-template__container">
    <div class="duk-template-wallet-wizard__wizard">
      <slot name="wizard" />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
