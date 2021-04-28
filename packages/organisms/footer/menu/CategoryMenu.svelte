<script>
  import { exclude } from "@dusk-network/helpers";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import ListItem from "@dusk-network/list/Item.svelte";

  let className = "";
  export { className as class };
  export let category;
</script>

<Menu
  orientation="vertical"
  class="duk-footer__category-menu {className}"
  {...exclude($$props, ["class", "orientation", "separator", "category"])}
>
  <h3 class="duk-footer__title">{category.title}</h3>
  <List>
    {#each category.links as { title, url }}
      <ListItem class="duk-footer__category-menu__item" href="{url}">{title}</ListItem>
    {/each}
  </List>
</Menu>
