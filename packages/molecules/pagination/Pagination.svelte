<script>
  // FIXME remove Button (molecule) dependency and add context for menu
  // FIXME This uses a Menu (molecule) while also being used by Table (organism)
  import { createEventDispatcher, setContext, getContext } from "svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Menu from "@dusk-network/menu/Menu.svelte";
  import Item from "@dusk-network/menu/Item.svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  /**
   * Sets the `ref` attribute on the Pagination
   */
  export let ref = "";

  /**
   * Sets the data used by Pagination.
   */
  export let items;

  /**
   * Sets the number of items per page.
   */
  export let itemsPerPage;

  /**
   * Sets the page number og Pagination
   */
  export let pageNumber;

  const dispatch = createEventDispatcher();
  const context = getContext("DUK:pagination:context");

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

  setContext("DUK:menu:context", contexts.MENU.PAGINATION);
</script>

<nav
  class="{$$props.class || ''} duk-pagination"
  class:duk-pagination--table="{context === contexts.PAGINATION.TABLE}"
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
  </Menu>
  <Button
    class="duk-pagination__button duk-pagination__button--next"
    disabled="{$pageNumber === pageCount.length}"
    on:click="{() => setPage($pageNumber + 1)}"
  >
    <Icon name="backspace-reverse-outline" />
  </Button>
</nav>
