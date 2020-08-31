<script>
  import { exclude } from "@dusk/helpers";
  import Menu from "@dusk/menu";
  import List, { Item } from "@dusk/list";

  let className = "";
  export { className as class };
  export let category;
</script>

<Menu
  orientation="vertical"
  class="duk-footer__category-menu {className}"
  {...exclude($$props, ['class', 'orientation', 'separator', 'category'])}>
  <h3 class="duk-footer__title">{category.title}</h3>
  <List>
    {#each category.links as { title, url }}
      <Item class="duk-footer__category-menu__item" href="{url}">{title}</Item>
    {/each}
  </List>
</Menu>
