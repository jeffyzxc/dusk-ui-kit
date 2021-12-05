<script>
  export let align = "left";
</script>

<div
  class="{$$props.class || ''} duk-card__content"
  class:duk-card__content--left="{align === 'left'}"
  class:duk-card__content--center="{align === 'center'}"
  class:duk-card__content--right="{align === 'right'}"
>
  <slot />
</div>
