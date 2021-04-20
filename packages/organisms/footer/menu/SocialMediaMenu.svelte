<script>
  import { exclude } from "@dusk-network/helpers";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import List from "@dusk-network/list/List.svelte";
  import ListItem from "@dusk-network/list/Item.svelte";

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
  {...exclude($$props, ["class", "orientation", "separator", "social"])}
>
  <List>
    {#each social as { title, icon, url }}
      <ListItem class="duk-footer__social-media-menu__item" href="{url}">
        <Icon name="{icon}" title="{title}" />
      </ListItem>
    {/each}
  </List>
</Menu>
