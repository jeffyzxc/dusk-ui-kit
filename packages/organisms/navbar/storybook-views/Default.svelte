<script>
  import Navbar from "../";
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";
  import Logo from "@dusk-network/logo";
  export let variant;
  export let title;
</script>

<Navbar variant="{variant}" title="{title}" class="absolute top-0 left-0" id="sb-example-nav">
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
        <Item href="javascript:;" active>Explorer</Item>
        <Item href="javascript:;">Wallet</Item>
        <Item href="javascript:;">Staking</Item>
      </List>
    </Menu>
  </div>
  <div slot="links">
    <Menu orientation="horizontal" name="Developer Links">
      <List>
        <Item href="javascript:;">Github</Item>
        <Item href="javascript:;">Wiki</Item>
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
