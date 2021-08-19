<script>
  import { setContext } from "svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import Item from "@dusk-network/menu/Item.svelte";
  import Toggle from "@dusk-network/toggle/Toggle.svelte";
  import contexts from "@dusk-network/helpers/contexts.js";

  export let darkMode = false;

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  setContext("DUK:menu:context", contexts.MENU.NAVBAR);
</script>

<Menu orientation="horizontal">
  <Item>
    <Icon class="duk-navbar__dark-mode-icon" name="brightness-4" />
    <Toggle
      type="switch"
      variant="brand"
      value="dark-mode"
      name="dark_mode"
      id="__DUK-dark-mode"
      bind:checked="{darkMode}"
      on:click="{toggleDarkMode}"
    />
    <Icon class="duk-navbar__light-mode-icon" name="brightness-5" />
  </Item>
</Menu>
