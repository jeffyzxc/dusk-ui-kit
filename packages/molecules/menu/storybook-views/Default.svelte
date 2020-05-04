<script>
  import Menu from "../";
  import List, { Item } from "@dusk/list";
  export let orientation;
  export let variant;
  export let carousel;
  let items = [
    { id: "1", value: "Navigation item 1"},
    { id: "2", value: "Navigation item 2"},
    { id: "3", value: "Navigation item 3"},
    { id: "4", value: "Navigation item 4"},
    { id: "5", value: "Navigation item 5"},
    { id: "6", value: "Navigation item 6"},
    { id: "7", value: "Navigation item 7"},
    { id: "8", value: "Navigation item 8"},
    { id: "9", value: "Navigation item 9"}
  ];
</script>

<Menu {orientation} {variant} {carousel} class="w-256">
  <List>
    {#each items as {id, value}}
      <Item href="javascript://(0)" class="w-64">{value}</Item>
    {/each}
  </List>
</Menu>
