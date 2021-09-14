<script>
    export let type;
</script>
<div 
    class="duk-disclaimer-list__item"
    class:duk-disclaimer-list__item--gray = "{type === 2}"
>
    <slot name="icon"/>
    <slot/>
</div>