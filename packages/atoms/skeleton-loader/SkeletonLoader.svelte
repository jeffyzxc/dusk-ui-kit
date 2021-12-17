<script>
  import "./styles.css";
  import variants from "@dusk-network/helpers/variants.js";

  /**
   * Sets the variant of the Address.
   * @type {"brand" | "cta" | "info" | "default" | "success" | "warning" | "danger" }
   */
  export let variant;

  /**
   * Sets the height of the skeleton loader.
   */
  export let height = "100%";

  /**
   * Sets the width of the skeleton loader.
   */
  export let width = "100%";

  /**
   * Sets the animation type to pulse when true.
   */
  export let pulse = false;
</script>

<div
  class="{$$props.class || ''} duk-skeleton-loader"
  class:duk-skeleton-loader--pulse="{pulse === true}"
  class:duk-skeleton-loader--loader="{pulse === false}"
  class:duk-skeleton-loader--brand="{variant === variants.SKELETON_LOADER.BRAND}"
  class:duk-skeleton-loader--cta="{variant === variants.SKELETON_LOADER.CTA}"
  class:duk-skeleton-loader--info="{variant === variants.SKELETON_LOADER.INFO}"
  class:duk-skeleton-loader--success="{variant === variants.SKELETON_LOADER.SUCCESS}"
  class:duk-skeleton-loader--warning="{variant === variants.SKELETON_LOADER.WARNING}"
  class:duk-skeleton-loader--danger="{variant === variants.SKELETON_LOADER.DANGER}"
>
  <div class="duk-skeleton-loader__wrapper">
    <div style="height:{height}; width:{width}" class="duk-skeleton-loader__placeholder"></div>
  </div>
</div>
