<script>
  import "./styles.css";

  /**
   * Reverses the order of presentation
   */
  export let reverse = false;

  /**
   * Vertically aligns the content
   * @type {"top"|"middle"|"bottom"}
   */
  export let valign = "middle";
</script>

<div
  class="{$$props.class || ''} duk-media-content"
  class:duk-media-content--reverse="{reverse}"
  class:duk-media-content--top="{valign === 'top'}"
  class:duk-media-content--middle="{valign === 'middle'}"
  class:duk-media-content--bottom="{valign === 'bottom'}"
>
  <div class="duk-media-content__media">
    <slot name="media" />
  </div>
  <div class="duk-media-content__text">
    <slot name="text" />
  </div>
</div>
