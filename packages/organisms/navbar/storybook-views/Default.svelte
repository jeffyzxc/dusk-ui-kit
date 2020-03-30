<script>
  import Navbar from "../";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";
  import Logo from "@dusk/logo";
  export let variant;
  export let title;
</script>

<Navbar {variant} {title}>
  <div slot="logo">
    <Logo />
  </div>
  <Menu orientation="horizontal" name="Website Navigation">
    <List>
      <Item href="javascript:;">Nav Item</Item>
      <Item href="javascript:;">Another Item</Item>
      <Item>Not a link</Item>
    </List>
  </Menu>
</Navbar>
