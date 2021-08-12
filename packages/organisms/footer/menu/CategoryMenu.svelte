<script>
  import Menu from "@dusk-network/menu/Menu.svelte";
  import Item from "@dusk-network/menu/Item.svelte";

  export let category;
</script>

<Menu orientation="vertical" class="duk-footer__category-menu">
  <h3 class="duk-footer__title" slot="title">{category.title}</h3>

  {#each category.links as { title, url }}
    <Item href="{url}">{title}</Item>
  {/each}
</Menu>
