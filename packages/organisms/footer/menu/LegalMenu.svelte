<script>
  import Menu from "@dusk-network/menu/Menu.svelte";
  import Item from "@dusk-network/menu/Item.svelte";

  export let orientation;
</script>

<Menu orientation="{orientation}" class="duk-footer__legal-menu">
  <Item href="https://dusk.network/footer-pages/privacy-policies">Privacy policy</Item>
  <Item href="https://dusk.network/footer-pages/terms-of-use">Terms of use</Item>
</Menu>
