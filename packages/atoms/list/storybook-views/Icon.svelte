<script>
  import List, { Item } from "../";
  import Icon from "@dusk-network/icon";
  export let type;
</script>

<List type="{type}">
  <Item>
    <Icon name="view-dashboard-outline" />
    Dashboard
  </Item>
  <Item>
    <Icon name="wallet" />
    Wallet
  </Item>
  <Item>
    <Icon name="help-circle-outline" />
    Help
  </Item>
</List>
