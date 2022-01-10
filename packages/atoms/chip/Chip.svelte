<script>
  import variants from "@dusk-network/helpers/variants.js";
  import "./styles.css";

  /**
   * Sets the variant of the Chip.
   * @type {"brand" | "cta" | "info" | "success" | "warning" | "danger" }
   */
  export let variant = variants.CHIP.BRAND;
</script>

<div
  class="{$$props.class || ''} duk-chip"
  class:duk-chip--brand="{variant === variants.CHIP.BRAND}"
  class:duk-chip--cta="{variant === variants.CHIP.CTA}"
  class:duk-chip--info="{variant === variants.CHIP.INFO}"
  class:duk-chip--success="{variant === variants.CHIP.SUCCESS}"
  class:duk-chip--warning="{variant === variants.CHIP.WARNING}"
  class:duk-chip--danger="{variant === variants.CHIP.DANGER}"
>
  <div class="duk-chip__text">
    <span><slot /></span>
  </div>
</div>
