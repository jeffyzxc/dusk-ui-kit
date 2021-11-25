<script>
  import Navbar from "@dusk-network/navbar";
  import DropDown from "@dusk-network/drop-down";
  import Logo from "@dusk-network/logo";
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
      <Item href="javascript:;" active="{true}">DevOps</Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="navigation">
    <Menu orientation="horizontal" name="App Navigation">
      <Item href="javascript:;" active>Dashboard</Item>
    </Menu>
  </svelte:fragment>
</Navbar>
