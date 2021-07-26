<script>
  import { variants, sizes } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import "./styles.css";

  export let value;
  export let id = "__DUK-alert-" + Math.random().toString(36);
  export let dismissable = false;
  export let variant = variants.MOLECULE.ALERT.INFO;
</script>

{#if value}
  <div
    id="{id}"
    class="{$$props.class || ''} duk-alert"
    class:duk-alert--success="{variant === variants.MOLECULE.ALERT.SUCCESS}"
    class:duk-alert--warning="{variant === variants.MOLECULE.ALERT.WARNING}"
    class:duk-alert--danger="{variant === variants.MOLECULE.ALERT.DANGER}"
    role="alertdialog"
    aria-labelledby="{id}-title"
    aria-describedby="{id}-content"
  >
    <div class="duk-alert__icon">
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
            <Icon size="{sizes.ATOM.ICON.BASE}" name="menu-burger-close" />
          </button>
        {/if}
        <slot name="actions" />
      </div>
    </div>
  </div>
{/if}
