<script>
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import ListItem from "@dusk-network/list/Item.svelte";

  let className = "";
  export { className as class };
  export let apps;
  export let appName;
</script>

<Menu orientation="vertical" class="duk-navbar__apps-menu {className}">
  <List>
    {#each apps as { title, url }}
      <ListItem class="duk-navbar__apps-menu__item" href="{url}" active="{appName === title}">
        {title}
      </ListItem>
    {/each}
  </List>
</Menu>
