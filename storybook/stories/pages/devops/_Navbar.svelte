<script>
  import Navbar from "@dusk-network/navbar";
  import DropDown from "@dusk-network/drop-down";
  import Logo from "@dusk-network/logo";
  import Menu, { Item } from "@dusk-network/menu";

  export let activePage = "dashboard";
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
        <DropDown options="{['Mainnet', 'Testnet']}" selectedIndex="{1}" />
      </Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="apps">
    <Menu orientation="horizontal" name="Portal Navigation">
      <Item href="javascript:;" active>DevOps</Item>
    </Menu>
  </svelte:fragment>
  <svelte:fragment slot="navigation">
    <Menu orientation="horizontal" name="App Navigation">
      {#if activePage === "authentication"}
        <Item href="javascript:;">Authenticate</Item>
      {:else}
        <Item href="javascript:;" active="{activePage === 'dashboard'}">Dashboard</Item>
        <Item href="javascript:;" active="{activePage === 'deploy-network'}">Deploy Network</Item>
      {/if}
    </Menu>
  </svelte:fragment>
</Navbar>
