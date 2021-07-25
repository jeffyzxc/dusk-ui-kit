<script>
  import { getContext, onMount } from "svelte";
  import { contexts, variants, sizes } from "@dusk-network/helpers";
  import "./styles.css";

  export let name = null;
  export let href = null;
  export let size = sizes.ATOM.ICON.BASE;
  export let viewbox = "0 0 24 24";
  export let variant = null;
  export let tooltip = false;

  let element;
  let context = getContext("DUK:icon:context");

  onMount(async () => {
    if (href) {
      await import("../../helpers/dom-utils").then((domUtils) => {
        const wrapper = document.createElement("a");
        wrapper.setAttribute("href", href);
        domUtils.wrap(wrapper, element.firstElementChild);
      });
    }
  });

  function getIconComponentName(constant) {
    let componentName = constant.replace(/-([a-z,0-9])/g, function (g) {
      return g[1].toUpperCase();
    });
    return componentName.charAt(0).toUpperCase() + componentName.slice(1);
  }
</script>

{#if name}
  <div
    bind:this="{element}"
    class="{$$props.class || ''} duk-icon"
    class:duk-icon--brand="{variant === variants.ATOM.ICON.BRAND}"
    class:duk-icon--cta="{variant === variants.ATOM.ICON.CTA}"
    class:duk-icon--info="{variant === variants.ATOM.ICON.INFO}"
    class:duk-icon--success="{variant === variants.ATOM.ICON.SUCCESS}"
    class:duk-icon--warning="{variant === variants.ATOM.ICON.WARNING}"
    class:duk-icon--danger="{variant === variants.ATOM.ICON.DANGER}"
    class:duk-icon--small="{size === sizes.ATOM.ICON.SMALL}"
    class:duk-icon--large="{size === sizes.ATOM.ICON.LARGE}"
    class:duk-icon--xl="{size === sizes.ATOM.ICON.XL}"
    class:duk-icon--xxl="{size === sizes.ATOM.ICON.XXL}"
    class:duk-icon--xxxl="{size === sizes.ATOM.ICON.XXXL}"
    class:duk-button__icon="{context === contexts.ICON.BUTTON}"
    class:duk-list__icon="{context === contexts.ICON.LIST}"
    data-tooltip="{tooltip || undefined}"
    title="{$$props.title || undefined}"
  >
    {#await import(`./icons/${getIconComponentName(name)}.svelte`) then icon}
      <svelte:component this="{icon.default}" viewbox="{viewbox}" />
    {/await}
  </div>
{/if}
