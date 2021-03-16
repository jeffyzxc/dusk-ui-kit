<script>
  import Icon from "@dusk-network/icon";
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";

  let className = "";
  export { className as class };
  export let links;
</script>

<Menu orientation="vertical" class="duk-navbar__links-menu {className}">
  <List>
    {#each links as { title, url, icon }}
      <Item
        class="duk-navbar__links-menu__item"
        href="{url}"
        target="{url.lastIndexOf('dusk.network') === -1 && '_blank'}">
        {#if icon}
          <Icon name="{icon}" />
        {/if}
        {title}
      </Item>
    {/each}
  </List>
</Menu>
