<script>
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import ListItem from "@dusk-network/list/Item.svelte";

  export let apps;
  export let appName;
</script>

<Menu orientation="vertical">
  <List>
    {#each apps as { title, url }}
      <ListItem href="{url}" active="{appName === title}">
        {title}
      </ListItem>
    {/each}
  </List>
</Menu>
