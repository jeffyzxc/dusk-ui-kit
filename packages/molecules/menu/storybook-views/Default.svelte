<script>
  import Menu from "../Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import Item from "@dusk-network/list/Item.svelte";
  export let orientation;
  export let variant;
  export let separator;

  let items = [
    { id: "1", value: "Navigation item 1" },
    { id: "2", value: "Navigation item 2" },
    { id: "3", value: "Navigation item 3" },
    { id: "4", value: "Navigation item 4" },
  ];
</script>

<Menu orientation="{orientation}" variant="{variant}" separator="{separator}">
  <List>
    {#each items as { id, value }}
      <Item href="javascript://(0)">{value}</Item>
    {/each}
  </List>
</Menu>
