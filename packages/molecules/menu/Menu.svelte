<script>
  import { setContext } from "svelte";
  import { contexts, orientations } from "@dusk-network/helpers";
  import "./styles.css";

  export let id;
  export let name = null;
  export let orientation = orientations.MENU.VERTICAL;
  export let separator = null;

  setContext("DUK:list:context", contexts.LIST.MENU);
</script>

<nav
  class="{$$props.class || ''} duk-menu"
  class:duk-menu--horizontal="{orientation === orientations.MENU.HORIZONTAL}"
  class:duk-menu--vertical="{orientation === orientations.MENU.VERTICAL}"
  class:duk-menu--separator-dot="{separator === 'dot'}"
  class:duk-menu--separator-dash="{separator === 'dash'}"
  class:duk-menu--separator-bar="{separator === 'bar'}"
  id="{id}"
  role="navigation"
  aria-label="{name || undefined}"
>
  <slot />
</nav>
