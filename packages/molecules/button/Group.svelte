<script>
  export let align = "left";
</script>

<div
  class="{$$props.class || ''} duk-button-group"
  class:duk-button-group--left="{align === 'left'}"
  class:duk-button-group--center="{align === 'center'}"
  class:duk-button-group--right="{align === 'right'}"
>
  <slot />
</div>
