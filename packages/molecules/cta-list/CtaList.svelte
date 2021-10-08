<script>
  // FIXME numerical types are unclear.  Use helper for constants.
  // TODO CTALIST needs to be renamed to CTA_LIST.
  import variants from "@dusk-network/helpers/variants.js";
  import "./styles.css";

  /**
   * Sets the variant of the CTA List.
   * @type {"brand" | "cta" | "info" | "success" | "warning" | "danger" }
   */
  export let variant = variants.CTALIST.BRAND;

  /**
   * Sets the type of the CTA List.
   */
  export let type = 1;
</script>

<ol
  class="{$$props.class || ''} duk-cta-list"
  class:duk-cta-list--counter="{type === 2}"
  class:duk-cta-list--brand="{variant === variants.CTALIST.BRAND}"
  class:duk-cta-list--cta="{variant === variants.CTALIST.CTA}"
  class:duk-cta-list--info="{variant === variants.CTALIST.INFO}"
  class:duk-cta-list--success="{variant === variants.CTALIST.SUCCESS}"
  class:duk-cta-list--warning="{variant === variants.CTALIST.WARNING}"
  class:duk-cta-list--danger="{variant === variants.CTALIST.DANGER}"
>
  <slot />
</ol>
