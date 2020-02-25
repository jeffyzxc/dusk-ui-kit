<script>
  import Navbar from "../";
  import Menu from "../../../molecules/menu";
  import List, { Item } from "../../../atoms/list";
  import Logo from "../../../atoms/logo";
  export let variant;
  export let logoVariant;
</script>

<Navbar {variant}>
  <span slot="logo">
    <Logo variant="{logoVariant}" style="width: 90px" />
  </span>
  <Menu orientation="horizontal">
    <List>
      <Item href="#test">Nav Item</Item>
      <Item href="#test">Another Item</Item>
      <Item>Not a link</Item>
    </List>
  </Menu>
</Navbar>
