<script>
  // FIXME numerical types are unclear.  Use helper for constants.
  import variants from "@dusk-network/helpers/variants.js";
  import "./styles.css";

  /**
   * Sets the variant of the CTA List.
   * @type {"brand" | "cta" | "info" | "success" | "warning" | "danger" }
   */
  export let variant = variants.CTA_LIST.BRAND;

  /**
   * Sets the type of the CTA List.
   */
  export let type = 1;
</script>

<ol
  class="{$$props.class || ''} duk-cta-list"
  class:duk-cta-list--counter="{type === 2}"
  class:duk-cta-list--brand="{variant === variants.CTA_LIST.BRAND}"
  class:duk-cta-list--cta="{variant === variants.CTA_LIST.CTA}"
  class:duk-cta-list--info="{variant === variants.CTA_LIST.INFO}"
  class:duk-cta-list--success="{variant === variants.CTA_LIST.SUCCESS}"
  class:duk-cta-list--warning="{variant === variants.CTA_LIST.WARNING}"
  class:duk-cta-list--danger="{variant === variants.CTA_LIST.DANGER}"
>
  <slot />
</ol>
