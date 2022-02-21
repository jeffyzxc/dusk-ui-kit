<script>
  import { getContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import variants from "@dusk-network/helpers/variants.js";
  import sizes from "@dusk-network/helpers/sizes.js";
  import * as Icons from "./icons/index.js";
  import "./styles.css";

  /**
   * Used to select the icon based on icon name.
   */
  export let name = null;

  /**
   * Sets the size of the Icon.
   * @type {"xs" | "sm" | "lg" | "xl" | "xxl" | "xxxl" }
   */
  export let size = sizes.ICON.DEFAULT;

  /**
   * Sets the variant of the Icon.
   * @type {"brand" | "cta" | "info" | "success" | "warning" | "danger" }
   */
  export let variant = null;

  /**
   * Sets the Icon to have a tooltip when passed a string
   */
  export let tooltip = false;
  export let viewbox = "0 0 24 24";

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
    class:duk-icon--extra-small="{size === sizes.ICON.XS}"
    class:duk-icon--small="{size === sizes.ICON.SMALL}"
    class:duk-icon--large="{size === sizes.ICON.LARGE}"
    class:duk-icon--xl="{size === sizes.ICON.XL}"
    class:duk-icon--xxl="{size === sizes.ICON.XXL}"
    class:duk-icon--xxxl="{size === sizes.ICON.XXXL}"
    class:duk-button__icon="{context === contexts.ICON.BUTTON}"
    class:duk-alert__icon="{context === contexts.ICON.ALERT}"
    class:duk-icon--heading="{context === contexts.ICON.HEADING}"
    class:duk-icon--detail-list="{context === contexts.ICON.DETAIL_LIST}"
    class:duk-icon--group="{context === contexts.ICON.GROUP}"
    class:duk-icon--menu-social="{context === contexts.ICON.MENU_SOCIAL}"
    data-tooltip="{tooltip || undefined}"
    title="{$$props.title || undefined}"
    on:click
  >
    <svelte:component this="{icon}" viewbox="{viewbox}" />
  </div>
{/if}
