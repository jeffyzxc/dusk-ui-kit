<script>
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import Item from "@dusk-network/menu/Item.svelte";

  export let orientation;
  export let social;
</script>

<Menu orientation="{orientation}" class="duk-footer__social-media-menu">
  {#each social as { title, icon, url }}
    <Item href="{url}">
      <Icon name="{icon}" title="{title}" />
    </Item>
  {/each}
</Menu>
