<script>
  export let cols = 3;
</script>

<div
  class="{$$props.class || ''} duk-statistic-group"
  class:duk-statistic-group--2-col="{cols < 3}"
  class:duk-statistic-group--3-col="{cols === 3}"
>
  <slot />
</div>
