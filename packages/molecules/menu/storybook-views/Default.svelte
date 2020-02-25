<script>
  import Menu from "../";
  import List, { Item } from "../../../atoms/list";
  export let orientation;
</script>

<Menu {orientation}>
  <List>
    <Item href="#test">Navigation item</Item>
    <Item href="#test">Another navigation item</Item>
    <Item>More navigation here, with no link</Item>
  </List>
</Menu>
