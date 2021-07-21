<script>
  import List from "../List.svelte";
  import Key from "../Key.svelte";
  import Value from "../Value.svelte";
  export let type;
</script>

<div style="width: 300px">
  <List type="{type}">
    <Key>This is a key</Key>
    <Value>This is a value</Value>
  </List>
</div>
