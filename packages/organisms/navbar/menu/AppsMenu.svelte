<script>
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";

  let className = "";
  export { className as class };
  export let apps;
  export let appName;
</script>

<Menu orientation="vertical" class="duk-navbar__apps-menu {className}">
  <List>
    {#each apps as { title, url }}
      <Item class="duk-navbar__apps-menu__item" href="{url}" active="{appName === title}">
        {title}
      </Item>
    {/each}
  </List>
</Menu>
