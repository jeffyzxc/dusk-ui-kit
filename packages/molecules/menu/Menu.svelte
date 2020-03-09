<script>
  import { setContext, getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    orientations
  } from "@dusk/helpers";
  import "./styles.css";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };
  export let name = null;
  export let orientation = orientations.MENU.VERTICAL;

  let context = getContext("DUK:menu:context");
  setContext("DUK:list:context", contexts.LIST.MENU);

  function getClassNames(orientation, context) {
    let classNames = "";
    switch (orientation) {
      case orientations.MENU.HORIZONTAL:
        classNames += " duk-menu--horizontal";
        break;
      case orientations.MENU.VERTICAL:
        classNames += " duk-menu--vertical";
        break;
      default:
      //TODO: Exception handling
    }
    switch (context) {
      case contexts.MENU.NAVBAR:
        classNames += " duk-navbar__menu duk-navbar__menu--hidden";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }

  function getId() {
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
  {getClassNames(orientation, context)}"
  id="{getId(context)}"
  role="navigation"
  aria-label="{name || ''}"
  {...exclude($$props, ['use', 'class', 'orientation', 'name'])}>
  <slot />
</nav>
