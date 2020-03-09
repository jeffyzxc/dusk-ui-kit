<script>
  import Drawer from "../";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";
  import Logo from "@dusk/logo";
  import Icon from "@dusk/icon";
  export let variant;
  export let logoVariant;
</script>

<Drawer {variant}>
  <div slot="logo">
    <Logo variant="{logoVariant}" class="w-48" />
  </div>
  <Menu>
    <List>
      <Item href="#test">
        <Icon name="view-dashboard-outline" />
        Dashboard
      </Item>
      <Item>
        <Icon name="wallet" />
        Wallet
        <List>
          <Item href="#test">
            <Icon name="arrow-right-circle" />
            Send
          </Item>
          <Item href="#test">
            <Icon name="arrow-left-circle" />
            Recieve
          </Item>
        </List>
      </Item>
    </List>
  </Menu>
  <Menu>
    <List>
      <Item href="#test">
        <Icon name="help-circle-outline" />
        Help
      </Item>
      <Item href="#test">
        <Icon name="cog-outline" />
        Settings
      </Item>
    </List>
  </Menu>
</Drawer>
