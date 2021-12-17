<script>
  import "./styles.css";
  import variants from "@dusk-network/helpers/variants.js";

  /**
   * Sets the variant of the Address.
   * @type {"brand" | "cta" | "info" | "default" | "success" | "warning" | "danger" }
   */
  export let variant;

  /**
   * Sets the height in pixels of the skeleton loader.
   */
  export let height = "0";

  /**
   * Sets the width in pixels of the skeleton loader.
   */
  export let width = "200";

  /**
   * Sets the border radius of the skeleton loader to 100% when true.
   */
  export let round = false;

  /**
   * Sets the animation type to pulse when true.
   */
  export let pulse = false;

  /**
   * Default animation type initialized as true.
   */
  export let loader = true;
</script>

<div
  style="height:{height}px; width:{width}px"
  class="{$$props.class || ''} duk-skeleton-loader"
  class:duk-skeleton-loader--round="{round === true}"
  class:duk-skeleton-loader--pulse="{pulse === true && loader === false}"
  class:duk-skeleton-loader--loader="{pulse === false && loader === true}"
  class:duk-skeleton-loader--brand="{variant === variants.SKELETON_LOADER.BRAND}"
  class:duk-skeleton-loader--cta="{variant === variants.SKELETON_LOADER.CTA}"
  class:duk-skeleton-loader--info="{variant === variants.SKELETON_LOADER.INFO}"
  class:duk-skeleton-loader--success="{variant === variants.SKELETON_LOADER.SUCCESS}"
  class:duk-skeleton-loader--warning="{variant === variants.SKELETON_LOADER.WARNING}"
  class:duk-skeleton-loader--danger="{variant === variants.SKELETON_LOADER.DANGER}"
></div>
