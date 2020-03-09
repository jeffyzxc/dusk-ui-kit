<script>
  import Menu from "../";
  import List, { Item } from "@dusk/list";
  export let orientation;
</script>

<Menu {orientation}>
  <List>
    <Item href="javascript://(0)">Navigation item</Item>
    <Item href="javascript://(0)">Another navigation item</Item>
    <Item>More navigation here, with no link</Item>
  </List>
</Menu>
