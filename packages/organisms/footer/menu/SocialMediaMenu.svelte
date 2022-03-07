<script>
  import { setContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import Icon from "@dusk-network/icon";
  import Menu, { Item } from "@dusk-network/menu";

  export let orientation;
  export let social;

  setContext("DUK:menu:context", contexts.MENU.FOOTER.SOCIAL);
  setContext("DUK:icon:context", contexts.ICON.FOOTER.MENU_SOCIAL);
</script>

<Menu orientation="{orientation}" class="duk-footer__social-media-menu">
  {#each social as { title, icon, url }}
    <Item href="{url}">
      <Icon name="{icon}" title="{title}" />
    </Item>
  {/each}
</Menu>
