<script>
  import { getContext } from "svelte";
  import { contexts, variants, sizes } from "@dusk-network/helpers/index.js";
  import * as Icons from "./icons/index.js";
  import "./styles.css";

  export let name = null;
  export let size = sizes.ICON.DEFAULT;
  export let viewbox = "0 0 24 24";
  export let variant = null;
  export let tooltip = false;

  let context = getContext("DUK:icon:context");

  function getIconComponent(name) {
    let componentName = name.replace(/-([a-z,0-9])/g, function (g) {
      return g[1].toUpperCase();
    });
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    return Icons.default[componentName];
  }

  $: icon = getIconComponent(name) || null;
</script>

{#if name}
  <div
    class="{$$props.class || ''} duk-icon"
    class:duk-icon--brand="{variant === variants.ICON.BRAND}"
    class:duk-icon--cta="{variant === variants.ICON.CTA}"
    class:duk-icon--info="{variant === variants.ICON.INFO}"
    class:duk-icon--success="{variant === variants.ICON.SUCCESS}"
    class:duk-icon--warning="{variant === variants.ICON.WARNING}"
    class:duk-icon--danger="{variant === variants.ICON.DANGER}"
    class:duk-icon--small="{size === sizes.ICON.SMALL}"
    class:duk-icon--large="{size === sizes.ICON.LARGE}"
    class:duk-icon--xl="{size === sizes.ICON.XL}"
    class:duk-icon--xxl="{size === sizes.ICON.XXL}"
    class:duk-icon--xxxl="{size === sizes.ICON.XXXL}"
    class:duk-button__icon="{context === contexts.ICON.BUTTON}"
    class:duk-list__icon="{context === contexts.ICON.LIST}"
    class:duk-alert__icon="{context === contexts.ICON.ALERT}"
    data-tooltip="{tooltip || undefined}"
    title="{$$props.title || undefined}"
  >
    <svelte:component this="{icon}" viewbox="{viewbox}" />
  </div>
{/if}
