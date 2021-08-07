<script>
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import ListItem from "@dusk-network/list/Item.svelte";
  import Toggle from "@dusk-network/toggle/Toggle.svelte";

  export let darkMode = false;

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
</script>

<Menu orientation="vertical">
  <List>
    <ListItem>
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
    </ListItem>
  </List>
</Menu>
