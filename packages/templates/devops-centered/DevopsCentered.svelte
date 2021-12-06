<script>
  import Template from "@dusk-network/default";
  import "./styles.css";
</script>

<Template class="{$$props.class || ''} duk-template-devops-centered" $$restProps="{$$restProps}">
  <svelte:fragment slot="navbar">
    <slot name="navbar" />
  </svelte:fragment>
  <section class="duk-template__container">
    <div class="duk-template-devops-centered__content">
      <slot />
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
