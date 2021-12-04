<script>
  import Template from "../default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-extension-default" $$restProps="{$$restProps}">
  <svelte:fragment slot="navbar">
    <slot name="logo" />
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
