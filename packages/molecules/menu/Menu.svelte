<script>
  import { setContext, getContext } from "svelte";
  import orientations from "@dusk-network/helpers/orientations.js";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  export let orientation = orientations.MENU.VERTICAL;
  export let id = "__DUK-menu" + Math.random().toString(36);
  export let name;

  const context = getContext("DUK:menu:context");

  setContext("DUK:list:context", contexts.LIST.MENU);
  setContext("DUK:drop-down:context", contexts.DROP_DOWN.MENU);
</script>

<nav
  class="{$$props.class || ''} duk-menu"
  class:duk-menu--horizontal="{orientation === orientations.MENU.HORIZONTAL}"
  class:duk-menu--vertical="{orientation === orientations.MENU.VERTICAL}"
  class:duk-menu--navbar="{context === contexts.MENU.NAVBAR}"
  class:duk-menu--footer="{context === contexts.MENU.FOOTER}"
  id="{id}"
  role="navigation"
  aria-label="{name || undefined}"
>
  <slot name="title" />
  <ul class="duk-menu__list">
    <slot />
  </ul>
</nav>
