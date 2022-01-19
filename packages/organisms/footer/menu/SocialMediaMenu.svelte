<script>
  import Icon from "@dusk-network/icon";
  import Menu, { Item } from "@dusk-network/menu";

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
