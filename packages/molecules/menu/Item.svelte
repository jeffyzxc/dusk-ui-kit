<script>
  export let href;
</script>

<li class="{$$props.class || ''} duk-menu__item" on:click on:mouseover>
  {#if href}
    <a href="{href}" class="duk-menu__item-wrapper">
      <slot />
    </a>
  {:else}
    <span href="{href}" class="duk-menu__item-wrapper"> <slot /></span>
  {/if}
</li>
