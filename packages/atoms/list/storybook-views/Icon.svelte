<script>
  import List from "../List.svelte";
  import ListItem from "../Item.svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";
  export let type;
</script>

<List type="{type}">
  <ListItem>
    <Icon name="view-dashboard-outline" />
    Dashboard
  </ListItem>
  <ListItem>
    <Icon name="wallet" />
    Wallet
  </ListItem>
  <ListItem>
    <Icon name="help-circle-outline" />
    Help
  </ListItem>
</List>
