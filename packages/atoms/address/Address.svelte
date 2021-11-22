<script>
  import variants from "@dusk-network/helpers/variants.js";
  import "./styles.css";

  /**
   * Sets the variant of the Address.
   * @type {"brand" | "cta" | "info" | "default" | "success" | "warning" | "danger" }
   */
  export let variant;
</script>

<div
  class="{$$props.class || ''} duk-address"
  class:duk-address--brand="{variant === variants.ADDRESS.BRAND}"
  class:duk-address--cta="{variant === variants.ADDRESS.CTA}"
  class:duk-address--info="{variant === variants.ADDRESS.INFO}"
  class:duk-address--success="{variant === variants.ADDRESS.SUCCESS}"
  class:duk-address--warning="{variant === variants.ADDRESS.WARNING}"
  class:duk-address--danger="{variant === variants.ADDRESS.DANGER}"
>
  <slot />
</div>
