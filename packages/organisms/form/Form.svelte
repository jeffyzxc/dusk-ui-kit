<script>
  import { types, states } from "@dusk-network/helpers";
  import "./styles.css";

  export let type = types.FORM.STACKED;
  export let state = states.FORM.BASE;
</script>

<form
  class="{$$props.class || ''} duk-form"
  class:duk-form--stacked="{type === types.FORM.STACKED}"
  class:duk-form--inline-fixed="{type === types.FORM.INLINE_FIXED}"
  class:duk-form--inline-flex="{type === types.FORM.INLINE_FLEX}"
  class:duk-form--success="{state === states.FORM.SUCCESS}"
  class:duk-form--warning="{state === states.FORM.WARNING}"
  class:duk-form--danger="{state === states.FORM.DANGER}"
>
  <slot />
</form>
