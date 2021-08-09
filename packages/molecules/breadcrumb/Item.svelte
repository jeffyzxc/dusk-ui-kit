<script>
  export let href;
</script>

<li class="{$$props.class || ''} duk-breadcrumb__item" on:click on:mouseover>
  {#if href}
    <a href="{href}">
      <slot />
    </a>
  {:else}
    <slot />
  {/if}
</li>
