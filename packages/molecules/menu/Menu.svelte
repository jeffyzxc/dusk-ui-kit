<script>
  import { setContext, getContext } from "svelte";
  import orientations from "@dusk-network/helpers/orientations.js";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  /**
   * Sets the orientation of the Menu.
   * @type { "horizontal" | "vertical" }
   */
  export let orientation = orientations.MENU.VERTICAL;

  /**
   * Sets the `id` of the Menu if set, otherwise the ID is generated.
   * @type {string}
   */
  export let id = "__DUK-menu" + Math.random().toString(36);

  /**
   * Sets the `name` attribute on the Menu.
   */
  export let name = "";

  setContext("DUK:drop-down:context", contexts.DROP_DOWN.MENU);

  const context = getContext("DUK:menu:context");
</script>

<nav
  class="{$$props.class || ''} duk-menu"
  class:duk-menu--horizontal="{orientation === orientations.MENU.HORIZONTAL}"
  class:duk-menu--vertical="{orientation === orientations.MENU.VERTICAL}"
  class:duk-menu--navbar="{context === contexts.MENU.NAVBAR}"
  class:duk-menu--footer="{context === contexts.MENU.FOOTER}"
  id="{id}"
  aria-label="{name || undefined}"
>
  <slot name="title" />
  <ul class="duk-menu__list">
    <slot />
  </ul>
</nav>
