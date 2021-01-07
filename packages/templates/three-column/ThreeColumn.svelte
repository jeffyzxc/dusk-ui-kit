<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions, variants } from "@dusk-network/helpers";
  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };
  export let variant = variants.TEMPLATE.THREE_COL.THIRTY_THIRTY_THIRTY;
  export let gutters = true;

  function getClassNames(variant, gutters) {
    let classNames = "";

    if (gutters) classNames += "duk-template--gutters";

    switch (variant) {
      case variants.TEMPLATE.THREE_COL.THIRTY_THIRTY_THIRTY:
        classNames += " duk-template__three-column--333333";
        break;
      case variants.TEMPLATE.THREE_COL.TWENTY_FORTY_FORTY:
        classNames += " duk-template__three-column--204040";
        break;
      case variants.TEMPLATE.THREE_COL.FORTY_FORTY_TWENTY:
        classNames += " duk-template__three-column--404020";
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
  class="duk-template duk-template__three-column {className}
  {getClassNames(variant, gutters)}"
  {...exclude($$props, ['use', 'class', 'variant', 'gutters'])}>
  <div class="duk-template__three-column__header">
    <slot name="header" />
  </div>
  <div class="duk-template__content duk-template__three-column__content">
    <div class="duk-template__column duk-template__three-column__content__west">
      <slot name="west" />
    </div>
    <div class="duk-template__column duk-template__three-column__content__central">
      <slot name="central" />
    </div>
    <div class="duk-template__column duk-template__three-column__content__east">
      <slot name="east" />
    </div>
    <slot />
  </div>
  <div class="duk-template__three-column__footer">
    <slot name="footer" />
  </div>
</div>
