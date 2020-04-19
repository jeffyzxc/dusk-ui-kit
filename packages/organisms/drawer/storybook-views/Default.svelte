<script>
  import Drawer from "../";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";
  import Logo from "@dusk/logo";
  import Icon from "@dusk/icon";
  import { sizes } from "@dusk/helpers";
  export let variant;
  const active = true;
</script>

<Drawer {variant} class="sm:min-h-screen">
  <div slot="logo">
    <Logo class="w-48" />
  </div>
  <Menu>
    <List>
      <Item href="javascript:;" {active}>
        <Icon name="view-dashboard-outline" size="{sizes.ATOM.ICON.SMALL}" />
        <div class="hidden sm:inline-block">Dashboard</div>
      </Item>
      <Item href="javascript:;">
        <Icon name="wallet" size="{sizes.ATOM.ICON.SMALL}" />
        <div class="hidden sm:inline-block">Wallet</div>
        <List>
          <Item href="javascript:;">
            <Icon name="arrow-right-circle" size="{sizes.ATOM.ICON.SMALL}" />
            <div class="hidden sm:inline-block">Send</div>
          </Item>
          <Item href="javascript:;">
            <Icon name="arrow-left-circle" size="{sizes.ATOM.ICON.SMALL}" />
            <div class="hidden sm:inline-block">Recieve</div>
          </Item>
        </List>
      </Item>
    </List>
  </Menu>
  <Menu>
    <List>
      <Item href="#test">
        <Icon name="help-circle-outline" size="{sizes.ATOM.ICON.SMALL}" />
        <div class="hidden sm:inline-block">Help</div>
      </Item>
      <Item href="#test">
        <Icon name="cog-outline" size="{sizes.ATOM.ICON.SMALL}" />
        <div class="hidden sm:inline-block">Settings</div>
      </Item>
    </List>
  </Menu>
</Drawer>
