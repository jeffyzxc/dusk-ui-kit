<script>
  import List from "../List.svelte";
  import ListItem from "../Item.svelte";
  export let type;
</script>

<List type="{type}">
  <ListItem>List</ListItem>
  <ListItem>Item</ListItem>
  <ListItem>Test</ListItem>
</List>
