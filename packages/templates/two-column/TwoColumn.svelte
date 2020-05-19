<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions, variants } from "@dusk/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };
  export let variant = variants.TEMPLATE.TWO_COL.TWENTY_EIGHTY;
  export let gutters = true;

  function getClassNames(variant, gutters) {
    let classNames = "";

    if (gutters) classNames += "duk-template--gutters";

    switch (variant) {
      case variants.TEMPLATE.TWO_COL.FIFTY_FIFTY:
        classNames += " duk-template__two-column--5050";
        break;
      case variants.TEMPLATE.TWO_COL.TWENTY_EIGHTY:
        classNames += " duk-template__two-column--2080";
        break;
      case variants.TEMPLATE.TWO_COL.EIGHTY_TWENTY:
        classNames += " duk-template__two-column--8020";
        break;
      case variants.TEMPLATE.TWO_COL.SIDEBAR_LEFT:
        classNames += " duk-template__two-column--fixed duk-template__two-column--sidebar-left";
        break;
      case variants.TEMPLATE.TWO_COL.SIDEBAR_RIGHT:
        classNames += " duk-template__two-column--fixed duk-template__two-column--sidebar-left";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class="duk-template duk-template__two-column {className}
  {getClassNames(variant, gutters)}"
  {...exclude($$props, ['use', 'class', 'variant', 'gutters'])}>
  <div class="duk-template__two-column__header">
    <slot name="header" />
  </div>
  <div class="duk-template__content duk-template__two-column__content">
    <div class="duk-template__column duk-template__two-column__content__west">
      <slot name="west" />
    </div>
    <div class="duk-template__column duk-template__two-column__content__east">
      <slot name="east" />
    </div>
    <slot />
  </div>
  <div class="duk-template__two-column__footer">
    <slot name="footer" />
  </div>
</div>
