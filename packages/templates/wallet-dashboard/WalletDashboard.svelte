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
  class="{$$props.class || ''} duk-template-wallet-dashboard"
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
    <div class="duk-template-wallet-dashboard__wrapper">
      <div class="duk-template-wallet-dashboard__block-first">
        <div class="duk-template-wallet-dashboard__block-first--balance">
          <slot name="balance" />
        </div>
        <div class="duk-template-wallet-dashboard__block-first--address">
          <slot name="address" />
        </div>
        <div class="duk-template-wallet-dashboard__block-first--transfer">
          <slot name="transfer" />
        </div>
        <div class="duk-template-wallet-dashboard__block-first--transaction">
          <slot name="transaction" />
        </div>
      </div>

      <div class="duk-template-wallet-dashboard__block-second">
        <div class="duk-template-wallet-dashboard__block-second--balance">
          <slot name="balance" />
        </div>
        <div class="duk-template-wallet-dashboard__block-second--network">
          <slot name="network" />
        </div>
        <div class="duk-template-wallet-dashboard__block-second--token">
          <slot name="token" />
        </div>
      </div>
    </div>
  </section>
  <svelte:fragment slot="footer">
    <slot name="footer" />
  </svelte:fragment>
</Template>
