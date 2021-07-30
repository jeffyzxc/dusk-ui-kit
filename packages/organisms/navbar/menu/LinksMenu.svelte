<script>
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import ListItem from "@dusk-network/list/Item.svelte";

  export let links;
</script>

<Menu orientation="vertical">
  <List>
    {#each links as { title, url, icon }}
      <ListItem href="{url}" target="{url.lastIndexOf('dusk.network') === -1 && '_blank'}">
        {#if icon}
          <Icon name="{icon}" />
        {/if}
        <span>{title}</span>
      </ListItem>
    {/each}
  </List>
</Menu>
