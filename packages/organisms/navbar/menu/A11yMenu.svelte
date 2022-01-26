<script>
  import { setContext, afterUpdate, createEventDispatcher } from "svelte";
  import DarkMode from "svelte-dark-mode";
  import Menu, { Item } from "@dusk-network/menu";
  import Toggle from "@dusk-network/toggle";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import contexts from "@dusk-network/helpers/contexts.js";

  const dispatch = createEventDispatcher();

  let theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: isDarkMode = theme === "dark";

  afterUpdate(() => {
    document.documentElement.className = theme;
  });

  setContext("DUK:menu:context", contexts.MENU.NAVBAR);
</script>

<DarkMode bind:theme />

<Menu orientation="horizontal" class="duk-navbar__a11y-menu">
  <Item>
    <Button variant="default" on:click="{() => dispatch('settings')}">
      <Icon name="cog-outline" />
    </Button>
  </Item>
  <Item>
    <Toggle
      type="switch"
      variant="brand-invert"
      name="dark_mode"
      id="__DUK-dark-mode"
      onIcon="brightness-4"
      offIcon="brightness-5"
      bind:checked="{isDarkMode}"
      on:click="{() => (theme = switchTheme)}"
      value="{isDarkMode ? true : false}"
    />
  </Item>
</Menu>
