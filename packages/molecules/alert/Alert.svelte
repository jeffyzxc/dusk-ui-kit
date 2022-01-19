<script>
  import { setContext } from "svelte";
  import variants from "@dusk-network/helpers/variants.js";
  import sizes from "@dusk-network/helpers/sizes.js";
  import contexts from "@dusk-network/helpers/contexts.js";
  import Icon from "@dusk-network/icon";
  import "./styles.css";

  /**
   * Used to display the Alert when true.
   */
  export let value = false;

  /**
   * Sets the `id` of the Alert if set, otherwise the ID is generated.
   * @type {string}
   */
  export let id = "__DUK-alert-" + Math.random().toString(36);

  /**
   * Sets the Alert to be dismissable when true.
   */
  export let dismissable = false;

  /**
   * Sets the variant of the Alert.
   * @type { "success" | "warning" | "danger" }
   */
  export let variant = variants.ALERT.INFO;

  /**
   * Sets the Alert as a modal.
   */
  export let modal = false;

  setContext("DUK:icon:context", contexts.ICON.ALERT);
</script>

{#if value}
  <div
    id="{id}"
    class="{$$props.class || ''} duk-alert"
    class:duk-alert--success="{variant === variants.ALERT.SUCCESS}"
    class:duk-alert--warning="{variant === variants.ALERT.WARNING}"
    class:duk-alert--danger="{variant === variants.ALERT.DANGER}"
    class:duk-alert--modal="{modal}"
    role="alertdialog"
    aria-labelledby="{id}-title"
    aria-describedby="{id}-content"
    on:click
    on:mouseover
    on:focus
  >
    <div class="duk-alert__indicator">
      <slot name="icon" />
    </div>
    <div class="duk-alert__body">
      <h4 id="{id}-title">
        <slot name="title" />
      </h4>
      <div id="{id}-content" class="duk-alert__content">
        <slot />
      </div>
      <div class="duk-alert__actions">
        {#if dismissable}
          <button
            id="{id}-dismiss"
            aria-controls="{id}"
            aria-label="Dismiss alert"
            on:click="{() => (value = false)}"
            class="duk-alert__dismiss"
          >
            <Icon size="{sizes.ICON.DEFAULT}" name="menu-burger-close" />
          </button>
        {/if}
        <slot name="actions" />
      </div>
    </div>
  </div>
{/if}
