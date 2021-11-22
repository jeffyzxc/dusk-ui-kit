<script>
  import "./styles.css";
  import { widths } from "@dusk-network/helpers";

  /**
   * Sets the width of the Control inside current container.
   * @type { "full" | "half" | "quarter" }
   */
  export let width = widths.TRUNCATE_TEXT.HALF;

  /**
   * Sets the width of the Control inside current container.
   * @type { "full" | "half" | "quarter" }
   */
  export let title = "";
</script>

<div
  class="{$$props.class || ''} duk-truncate-text"
  class:duk-truncate-text--quarter="{width === widths.TRUNCATE_TEXT.QUARTER}"
  class:duk-truncate-text--one-third="{width === widths.TRUNCATE_TEXT.ONE_THIRD}"
  class:duk-truncate-text--half="{width === widths.TRUNCATE_TEXT.HALF}"
  class:duk-truncate-text--three-quarters="{width === widths.TRUNCATE_TEXT.THREE_QUARTERS}"
  class:duk-truncate-text--max="{width === widths.TRUNCATE_TEXT.MAX}"
>
  <span class="duk-truncate-text__value" title="{title}">
    <slot />
  </span>
</div>
