<script>
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    variants
  } from "@dusk/ui-kit-helpers";
  const forwardEvents = forwardEventsBuilder(current_component);
  export let use = [];
  let className = "";
  export { className as class };
  export let variant = variants.ATOM.CARD.WHITE;

  function getClassNames(variant) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.CARD.BRAND:
        classNames += " duk-card--brand";
        break;
      case variants.ATOM.CARD.CTA:
        classNames += " duk-card--cta";
        break;
      case variants.ATOM.CARD.INFO:
        classNames += " duk-card--info";
        break;
      case variants.ATOM.CARD.SUCCESS:
        classNames += " duk-card--success";
        break;
      case variants.ATOM.CARD.WARNING:
        classNames += " duk-card--warning";
        break;
      case variants.ATOM.CARD.DANGER:
        classNames += " duk-card--danger";
        break;
      case variants.ATOM.CARD.LIGHT:
        classNames += " duk-card--light";
        break;
      case variants.ATOM.CARD.DARK:
        classNames += " duk-card--dark";
        break;
      case variants.ATOM.CARD.WHITE:
        classNames += " duk-card--white";
        break;
      case variants.ATOM.CARD.BLACK:
        classNames += " duk-card--black";
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
  class="duk-card {className}
  {getClassNames(variant)}"
  {...exclude($$props, ['use', 'class', 'variant'])}>
  <slot />
</div>
