<script>
  import Navbar from "@dusk-network/navbar";
  import DropDown from "@dusk-network/drop-down";
  import Logo from "@dusk-network/logo";
  import Icon from "@dusk-network/icon";
  import Menu, { Item } from "@dusk-network/menu";
</script>

<Navbar
  appName="sb-demo"
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
      <Item href="javascript:;">Explorer</Item>
      <Item href="javascript:;">Buy</Item>
      <Item href="javascript:;">Staking</Item>
      <Item href="javascript:;" active="{true}">Wallet</Item>
      <Item href="javascript:;">Labs</Item>
      <Item href="javascript:;">Docs</Item>
      <Item href="javascript:;">Grants</Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="links">
    <Menu orientation="horizontal" name="Developer Links">
      <Item href="https://shop.dusk.network">
        <Icon name="tshirt-crew-outline" /><span>Shop</span>
      </Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="navigation">
    <Menu orientation="horizontal" name="App Navigation">
      <Item href="javascript:;" active>Overview</Item>
      <Item href="javascript:;">Create New Wallet</Item>
      <Item href="javascript:;">Access My Wallet</Item>
      <Item href="javascript:;">FAQ</Item>
    </Menu>
  </svelte:fragment>
</Navbar>
