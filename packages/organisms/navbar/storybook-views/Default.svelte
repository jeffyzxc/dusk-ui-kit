<script>
  import Navbar from "../";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";
  import Logo from "@dusk/logo";
  export let variant;
  export let title;
</script>

<Navbar {variant} {title} class="absolute top-0 left-0">
  <div slot="logo">
    <Logo />
  </div>
  <Menu orientation="horizontal" name="Website Navigation">
    <List>
      <Item href="javascript:;">Nav Item</Item>
      <Item href="javascript:;">Nav Item</Item>
      <Item href="javascript:;" active>Active Item</Item>
      <Item>Static Item</Item>
    </List>
  </Menu>
</Navbar>
