<script>
  import { setContext, afterUpdate } from "svelte";
  import DarkMode from "svelte-dark-mode";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import Item from "@dusk-network/menu/Item.svelte";
  import Toggle from "@dusk-network/toggle/Toggle.svelte";
  import contexts from "@dusk-network/helpers/contexts.js";

  let theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  // $: document.documentElement.className = theme;
  $: isDarkMode = theme === "dark";

  afterUpdate(() => {
    document.documentElement.className = theme;
  });

  // const toggleDarkMode = () => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };

  setContext("DUK:menu:context", contexts.MENU.NAVBAR);
</script>

<DarkMode bind:theme />

<Menu orientation="horizontal" class="duk-navbar__a11y-menu">
  <Item>
    <Icon class="duk-navbar__light-mode-icon" name="brightness-5" />
    <Toggle
      type="switch"
      variant="brand"
      name="dark_mode"
      id="__DUK-dark-mode"
      bind:checked="{isDarkMode}"
      on:click="{() => (theme = switchTheme)}"
    />
    <Icon class="duk-navbar__dark-mode-icon" name="brightness-4" />
  </Item>
</Menu>
