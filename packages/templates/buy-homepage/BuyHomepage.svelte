<script>
  import Template from "@dusk-network/default";
  import "./styles.css";

  /**
   * Toggles the template global loading state if a boolean, otherwise an object that maps to the slots
   * that are loading.
   *
   * @type { "boolean" | "object" }
   */
  export let isLoading = false;

  /**
   * Toggles the template error state.
   */
  export let isError = false;
</script>

<Template
  class="{$$props.class || ''} duk-template-buy-homepage"
  $$restProps="{$$restProps}"
  isError="{isError}"
  isLoading="{isLoading}"
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
    <div class="duk-template-buy-homepage__hero">
      <slot name="hero" isLoading="{isLoading['control_panel']}" />
    </div>
  </section>
  <section class="duk-template__container">
    <div class="duk-template-buy-homepage__blocks">
      <div class="duk-template-buy-homepage__steps">
        <slot name="latest-blocks" isLoading="{isLoading['steps']}" />
      </div>
      <div class="duk-template-buy-homepage__markets">
        <slot name="latest-transactions" isLoading="{isLoading['markets']}" />
      </div>
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
