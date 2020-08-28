<script>
  import { exclude } from "@dusk/helpers";
  import Icon from "@dusk/icon";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";

  let className = "";
  export { className as class };
  export let orientation;
  export let separator;
  export let social;
</script>

<Menu
  {orientation}
  {separator}
  class="duk-footer__social-media-menu {className}"
  {...exclude($$props, ['class', 'orientation', 'separator', 'social'])}>
  <List>
    {#each social as { title, icon, url }}
      <Item class="duk-footer__social-media-menu__item" href="{url}">
        <Icon name="{icon}" {title} />
      </Item>
    {/each}
  </List>
</Menu>
