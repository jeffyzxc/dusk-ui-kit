<script>
  import Navbar from "../Navbar.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import DropDown from "@dusk-network/drop-down/DropDown.svelte";
  import Item from "@dusk-network/menu/Item.svelte";
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
  id="sb-example-nav"
  darkMode="{window.document.body.classList.contains('dark')}"
>
  <svelte:fragment slot="logo">
    <Logo />
  </svelte:fragment>
  <svelte:fragment slot="networks">
    <Menu orientation="horizontal" name="Network Navigation">
      <Item>
        <DropDown options="{['Testnet', 'Mainnet']}" />
      </Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="apps">
    <Menu orientation="horizontal" name="Portal Navigation">
      <Item href="javascript:;" active="{true}">Explorer</Item>
      <Item href="javascript:;">Wallet</Item>
      <Item href="javascript:;">Staking</Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="links">
    <Menu orientation="horizontal" name="Developer Links">
      <Item href="https://shop.dusk.network">
        <Icon name="tshirt-crew-outline" /><span>Shop</span>
      </Item>
      <!-- <Item href="https://shop.dusk.network">
          <Icon name="store-outline" /><span>Buy Dusk</span>
        </Item> -->
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="navigation">
    <Menu orientation="horizontal" name="App Navigation">
      <Item href="javascript:;">Chain Info</Item>
      <Item href="javascript:;" active>Blocks</Item>
      <Item href="javascript:;">Transactions</Item>
    </Menu>
  </svelte:fragment>
</Navbar>
