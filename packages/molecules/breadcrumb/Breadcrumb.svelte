<script>
  import { createEventDispatcher, getContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Item from "./Item.svelte";
  import "./styles.css";

  /**
   * Renders the Breadcrumb as an `a` tag when set.
   */
  export let href = "";

  const context = getContext("DUK:breadcrumb:context");
  const dispatch = createEventDispatcher();
  const handleClick = () => {
    dispatch("exit");
  };
</script>

<ul
  class="{$$props.class || ''} duk-breadcrumb"
  class:duk-breadcrumb--wizard="{context === contexts.BREADCRUMB.WIZARD}"
>
  <Item href="{href}" on:click="{handleClick}">
    <Icon class="duk-breadcrumb__back-link" name="backspace-outline" />
  </Item>
  <slot />
</ul>
