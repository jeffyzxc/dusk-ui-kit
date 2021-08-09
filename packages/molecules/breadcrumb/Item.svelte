<script>
  export let href;
</script>

<li class="{$$props.class || ''} duk-breadcrumb__item">
  <a href="{href}">
    <slot />
  </a>
</li>
