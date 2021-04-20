<script>
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import ListItem from "@dusk-network/list/Item.svelte";

  let className = "";
  export { className as class };
  export let links;
</script>

<Menu orientation="vertical" class="duk-navbar__links-menu {className}">
  <List>
    {#each links as { title, url, icon }}
      <ListItem
        class="duk-navbar__links-menu__item"
        href="{url}"
        target="{url.lastIndexOf('dusk.network') === -1 && '_blank'}"
      >
        {#if icon}
          <Icon name="{icon}" />
        {/if}
        {title}
      </ListItem>
    {/each}
  </List>
</Menu>
