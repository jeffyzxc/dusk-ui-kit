<script>
  import Drawer from "../";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";
  import Logo from "@dusk/logo";
  export let variant;
  export let logoVariant;
</script>

<Drawer {variant}>
  <span slot="logo">
    <Logo variant="{logoVariant}" class="w-48" />
  </span>
  <Menu>
    <List>
      <Item href="#test">Dashboard</Item>
      <Item>
        Wallet
        <List>
          <Item href="#test">Send</Item>
          <Item href="#test">Recieve</Item>
        </List>
      </Item>
    </List>
  </Menu>
  <Menu>
    <List>
      <Item href="#test">Help</Item>
      <Item href="#test">Settings</Item>
    </List>
  </Menu>
</Drawer>
