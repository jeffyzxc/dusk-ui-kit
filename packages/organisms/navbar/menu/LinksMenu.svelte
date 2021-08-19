<script>
  import { setContext } from "svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import Item from "@dusk-network/menu/Item.svelte";
  import contexts from "@dusk-network/helpers/contexts.js";

  export let links;

  setContext("DUK:menu:context", contexts.MENU.NAVBAR);
</script>

<Menu orientation="horizontal" class="duk-navbar__links-menu">
  {#each links as { title, url, icon }}
    <Item href="{url}" target="{url.lastIndexOf('dusk.network') === -1 && '_blank'}">
      {#if icon}
        <Icon name="{icon}" />
      {/if}
      <span>{title}</span>
    </Item>
  {/each}
</Menu>
