<script>
  export let href;
  export let active = false;
</script>

<li
  class="{$$props.class || ''} duk-menu__item"
  class:duk-menu__item--active="{active}"
  on:click
  on:mouseover
  on:focus
>
  {#if href}
    <a href="{href}" class="duk-menu__item-wrapper" class:duk-menu__item-wrapper--active="{active}">
      <slot />
    </a>
  {:else}
    <span href="{href}" class="duk-menu__item-wrapper"><slot /></span>
  {/if}
</li>
