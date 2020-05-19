<script>
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    variants,
    elevations,
    sizes,
  } from "@dusk/helpers";
  import "./styles.css";

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = "";
  export { className as class };
  export let variant = variants.ATOM.CARD.WHITE;
  export let elevation = elevations.ATOM.CARD.SMALL;
  export let size = sizes.ATOM.CARD.BASE;

  function getClassNames(variant, elevation, size) {
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

    switch (elevation) {
      case elevations.ATOM.CARD.SMALL:
        classNames += " duk-card--elevated-small";
        break;
      case elevations.ATOM.CARD.MEDIUM:
        classNames += " duk-card--elevated-medium";
        break;
      case elevations.ATOM.CARD.LARGE:
        classNames += " duk-card--elevated-large";
        break;
      case elevations.ATOM.CARD.NONE:
      default:
        classNames += "";
    }

    switch (size) {
      case sizes.ATOM.CARD.SMALL:
        classNames += " duk-card--small";
        break;
      case sizes.ATOM.CARD.LARGE:
        classNames += " duk-card--large";
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
  {getClassNames(variant, elevation, size)}"
  {...exclude($$props, ['use', 'class', 'variant', 'elevation', 'size'])}>
  <slot />
</div>
