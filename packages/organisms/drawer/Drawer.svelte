<script>
  import { setContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    variants
  } from "@dusk/helpers";
  import "./styles.css";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };

  export let variant = variants.ORGANISM.DRAWER.BRAND;
  setContext("DUK:menu:context", contexts.MENU.DRAWER);
  setContext("DUK:logo:context", contexts.LOGO.DRAWER);

  function getClassNames(variant) {
    let classNames = "";
    switch (variant) {
      case variants.ORGANISM.DRAWER.BRAND:
        classNames += " duk-drawer--brand";
        break;
      case variants.ORGANISM.DRAWER.CTA:
        classNames += " duk-drawer--cta";
        break;
      case variants.ORGANISM.DRAWER.INFO:
        classNames += " duk-drawer--info";
        break;
      case variants.ORGANISM.DRAWER.SUCCESS:
        classNames += " duk-drawer--success";
        break;
      case variants.ORGANISM.DRAWER.WARNING:
        classNames += " duk-drawer--warning";
        break;
      case variants.ORGANISM.DRAWER.DANGER:
        classNames += " duk-drawer--danger";
        break;
      case variants.ORGANISM.DRAWER.LIGHT:
        classNames += " duk-drawer--light";
        break;
      case variants.ORGANISM.DRAWER.DARK:
        classNames += " duk-drawer--dark";
        break;
      case variants.ORGANISM.DRAWER.BLACK:
        classNames += " duk-drawer--black";
        break;
      case variants.ORGANISM.DRAWER.WHITE:
        classNames += " duk-drawer--white";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }

  // const toggleDrawer = () => {
  //   document
  //     .getElementById("__DUK-drawer")
  //     .classList.toggle("duk-navbar__menu--hidden");
  // };
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class="duk-drawer {className}
  {getClassNames(variant)}"
  {...exclude($$props, ['use', 'class', 'variant'])}>
  <div class="duk-drawer__header hidden sm:flex">
    <slot name="logo" />
  </div>
  <div class="duk-drawer__content">
    <slot />
  </div>
</div>
