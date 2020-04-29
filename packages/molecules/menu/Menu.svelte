<script>
  import { setContext, getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    orientations,
    variants
  } from "@dusk/helpers";
  import "./styles.css";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };
  export let name = null;
  export let orientation = orientations.MENU.VERTICAL;
  export let variant = variants.MOLECULE.MENU.DARK;

  let context = getContext("DUK:menu:context");
  setContext("DUK:list:context", contexts.LIST.MENU);

  function getClassNames(variant, orientation, context) {
    let classNames = "";
    switch (variant) {
      case variants.MOLECULE.MENU.BRAND:
        classNames += " duk-menu--brand";
        break;
      case variants.MOLECULE.MENU.CTA:
        classNames += " duk-menu--cta";
        break;
      case variants.MOLECULE.MENU.INFO:
        classNames += " duk-menu--info";
        break;
      case variants.MOLECULE.MENU.SUCCESS:
        classNames += " duk-menu--success";
        break;
      case variants.MOLECULE.MENU.WARNING:
        classNames += " duk-menu--warning";
        break;
      case variants.MOLECULE.MENU.DANGER:
        classNames += " duk-menu--danger";
        break;
      case variants.MOLECULE.MENU.LIGHT:
        classNames += " duk-menu--light";
        break;
      case variants.MOLECULE.MENU.DARK:
        classNames += " duk-menu--dark";
        break;
      case variants.MOLECULE.MENU.BLACK:
        classNames += " duk-menu--black";
        break;
      case variants.MOLECULE.MENU.WHITE:
        classNames += " duk-menu--white";
        break;
      default:
        classNames += "";
    }
    switch (context) {
      case contexts.MENU.NAVBAR:
        classNames += " duk-navbar__menu duk-navbar__menu--hidden";
        break;
      case contexts.MENU.DRAWER:
        classNames += " duk-drawer__menu";
        break;
      default:
        classNames += "";
    }
    switch (orientation) {
      case orientations.MENU.HORIZONTAL:
        classNames += " duk-menu--horizontal";
        break;
      case orientations.MENU.VERTICAL:
        classNames += " duk-menu--vertical";
        break;
      default:
        classNames += ""
    }

    return classNames;
  }

  function getId(context) {
    let id = "";
    switch (context) {
      case contexts.MENU.NAVBAR:
        id = "__DUK-navbar-menu";
        break;
      default:
        id = "";
    }

    return id;
  }
</script>

<nav
  use:useActions="{use}"
  use:forwardEvents
  class="duk-menu {className}
  {getClassNames(variant, orientation, context)}"
  id="{getId(context)}"
  role="navigation"
  aria-label="{name || ''}"
  {...exclude($$props, ['use', 'class', 'orientation', 'name', 'variant'])}>
  <slot />
</nav>
