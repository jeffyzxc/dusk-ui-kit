<script>
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";

  let className = "";
  export { className as class };
  export let orientation;
  export let separator;
</script>

<Menu
  orientation="{orientation}"
  separator="{separator}"
  class="duk-footer__legal-menu {className}">
  <List>
    <Item href="https://dusk.network/footer-pages/privacy-policies">Privacy policy</Item>
    <Item href="https://dusk.network/footer-pages/terms-of-use">Terms of use</Item>
  </List>
</Menu>
