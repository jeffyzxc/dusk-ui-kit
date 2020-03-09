<script>
  import Navbar from "../";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";
  import Logo from "@dusk/logo";
  export let variant;
  export let logoVariant;
</script>

<Navbar {variant}>
  <span slot="logo">
    <Logo variant="{logoVariant}" style="width: 90px" />
  </span>
  <Menu orientation="horizontal" name="Website Navigation">
    <List>
      <Item href="javascript:;">Nav Item</Item>
      <Item href="javascript:;">Another Item</Item>
      <Item>Not a link</Item>
    </List>
  </Menu>
</Navbar>
