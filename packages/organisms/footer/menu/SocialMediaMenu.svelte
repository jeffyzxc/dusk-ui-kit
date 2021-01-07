<script>
  import { exclude } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon";
  import Menu from "@dusk-network/menu";
  import List, { Item } from "@dusk-network/list";

  let className = "";
  export { className as class };
  export let orientation;
  export let separator;
  export let social;
</script>

<Menu
  orientation="{orientation}"
  separator="{separator}"
  class="duk-footer__social-media-menu {className}"
  {...exclude($$props, ['class', 'orientation', 'separator', 'social'])}>
  <List>
    {#each social as { title, icon, url }}
      <Item class="duk-footer__social-media-menu__item" href="{url}">
        <Icon name="{icon}" title="{title}" />
      </Item>
    {/each}
  </List>
</Menu>
