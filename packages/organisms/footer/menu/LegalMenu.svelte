<script>
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import ListItem from "@dusk-network/list/Item.svelte";

  let className = "";
  export { className as class };
  export let orientation;
  export let separator;
</script>

<Menu
  orientation="{orientation}"
  separator="{separator}"
  class="duk-footer__legal-menu {className}"
>
  <List>
    <ListItem href="https://dusk.network/footer-pages/privacy-policies">Privacy policy</ListItem>
    <ListItem href="https://dusk.network/footer-pages/terms-of-use">Terms of use</ListItem>
  </List>
</Menu>
