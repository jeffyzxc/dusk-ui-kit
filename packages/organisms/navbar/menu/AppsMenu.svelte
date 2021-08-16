<script>
  import { setContext } from "svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import Item from "@dusk-network/menu/Item.svelte";
  import { contexts } from "@dusk-network/helpers/index.js";

  export let apps;
  export let appName;

  setContext("DUK:menu:context", contexts.MENU.NAVBAR);
</script>

<Menu orientation="vertical">
  {#each apps as { title, url }}
    <Item href="{url}" active="{appName === title}">
      {title}
    </Item>
  {/each}
</Menu>
