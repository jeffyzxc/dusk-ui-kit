<script>
  import { createEventDispatcher } from "svelte";
  import Button from "@dusk-network/button/Button.svelte"; // TODO remove dependency and roll custom buttons in scope here
  import Icon from "@dusk-network/icon/Icon.svelte";
  import List from "@dusk-network/list/List.svelte";
  import Item from "@dusk-network/list/Item.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import "./styles.css";

  export let ref = "";
  export let items;
  export let itemsPerPage;
  export let pageNumber;

  const dispatch = createEventDispatcher();

  const slice = (arr, page) => {
    if (page < 5) {
      return arr.slice(0, 5);
    } else if (page > arr.length - 4) {
      return arr.slice(arr.length - 5, arr.length);
    }
    return arr.slice(page - 2, page + 1);
  };

  const setPage = (number) => {
    pageNumber.set(number);
    dispatch("pagination");
  };

  $: pageCount = Array.from(Array(Math.ceil(items.length / itemsPerPage)).keys());
  $: buttons = slice(pageCount, $pageNumber);
</script>

<nav
  class="{$$props.class || ''} duk-pagination"
  role="navigation"
  aria-label="Pagination Navigation"
  ref="{ref}"
>
  <Button
    class="duk-pagination__button duk-pagination__button--prev"
    disabled="{$pageNumber === 1}"
    on:click="{() => setPage($pageNumber - 1)}"
  >
    <Icon name="backspace-outline" />
  </Button>
  <Menu class="duk-pagination__menu" orientation="horizontal">
    <List>
      <Item>
        <Button
          class="duk-pagination__button"
          active="{$pageNumber === 1 || undefined}"
          on:click="{() => setPage(1)}">1</Button
        >
      </Item>
      {#if pageCount.length > 6 && $pageNumber >= 5}
        <Item class="duk-pagination__ellipsis">
          <span>…</span>
        </Item>
      {/if}
      {#each buttons as buttonNumber}
        {#if buttonNumber > 0 && buttonNumber < pageCount.length - 1}
          <Item>
            <Button
              class="duk-pagination__button"
              active="{$pageNumber === buttonNumber + 1}"
              on:click="{() => setPage(buttonNumber + 1)}">{buttonNumber + 1}</Button
            >
          </Item>
        {/if}
      {/each}
      {#if pageCount.length > 6 && $pageNumber <= pageCount.length - 3}
        <Item class="duk-pagination__ellipsis">
          <span>…</span>
        </Item>
      {/if}
      {#if pageCount.length > 1}
        <Item>
          <Button
            class="duk-pagination__button"
            active="{$pageNumber === pageCount.length}"
            on:click="{() => setPage(pageCount.length)}"
          >
            {pageCount.length}
          </Button>
        </Item>
      {/if}
    </List>
  </Menu>
  <Button
    class="duk-pagination__button duk-pagination__button--next"
    disabled="{$pageNumber === pageCount.length}"
    on:click="{() => setPage($pageNumber + 1)}"
  >
    <Icon name="backspace-reverse-outline" />
  </Button>
</nav>
