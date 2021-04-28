<script>
  import { setContext, getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    orientations,
  } from "@dusk-network/helpers";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let id;
  export let use = [];
  export let name = null;
  export let orientation = orientations.MENU.VERTICAL;
  export let separator = null;

  const forwardEvents = forwardEventsBuilder(current_component);
  const context = getContext("DUK:menu:context");

  setContext("DUK:list:context", contexts.LIST.MENU);

  function getClassNames(orientation, context, separator) {
    let classNames = "";

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
        classNames += "";
    }

    switch (separator) {
      case "dot":
        classNames += " duk-menu--separator-dot";
        break;
      case "dash":
        classNames += " duk-menu--separator-dash";
        break;
      case "bar":
        classNames += " duk-menu--separator-bar";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<nav
  use:useActions="{use}"
  use:forwardEvents
  class="duk-menu {className}
  {getClassNames(orientation, context, separator)}"
  id="{id}"
  role="navigation"
  aria-label="{name || ''}"
  {...exclude($$props, ["use", "class", "orientation", "name", "variant", "separator"])}
>
  <slot />
</nav>
