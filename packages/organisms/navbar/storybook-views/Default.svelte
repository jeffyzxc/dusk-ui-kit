<script>
  import Navbar from "../Navbar.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import Item from "@dusk-network/list/Item.svelte";
  import Logo from "@dusk-network/logo/Logo.svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";

  export let variant;
  export let title;

  let appName = "Explorer";
</script>

<Navbar
  appName="{appName}"
  variant="{variant}"
  title="{title}"
  class="absolute top-0 left-0"
  id="sb-example-nav"
  darkMode="{window.document.body.classList.contains('dark')}"
>
  <div slot="logo">
    <Logo />
  </div>
  <div slot="networks">
    <Menu orientation="horizontal" name="Network Navigation">
      <List>
        <Item href="javascript:;">Testnet</Item>
      </List>
    </Menu>
  </div>
  <div slot="apps">
    <Menu orientation="horizontal" name="Portal Navigation">
      <List>
        <Item href="javascript:;" active="{true}">Explorer</Item>
        <Item href="javascript:;">Wallet</Item>
        <Item href="javascript:;">Staking</Item>
      </List>
    </Menu>
  </div>
  <div slot="links">
    <Menu orientation="horizontal" name="Developer Links">
      <List>
        <Item href="https://shop.dusk.network">
          <Icon name="tshirt-crew-outline" /><span>Shop</span>
        </Item>
        <Item href="https://shop.dusk.network">
          <Icon name="store-outline" /><span>Buy Dusk</span>
        </Item>
      </List>
    </Menu>
  </div>
  <div slot="navigation">
    <Menu orientation="horizontal" name="App Navigation">
      <List>
        <Item href="javascript:;">Chain Info</Item>
        <Item href="javascript:;" active>Blocks</Item>
        <Item href="javascript:;">Transactions</Item>
      </List>
    </Menu>
  </div>
</Navbar>
