<script>
  import { setContext, getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    exclude,
    forwardEventsBuilder,
    useActions,
    variants,
    sizes,
    contexts
  } from "@dusk/helpers";
  import { A, Button } from "@dusk/elements";
  import "./styles.css";

  const forwardEvents = forwardEventsBuilder(current_component);

  export const use = [];

  let className = "";
  export { className as class };

  export let variant = variants.ATOM.BUTTON.BRAND;
  export let outline = false;
  export let size = sizes.BUTTON.BASE;
  export let href = null;
  export let component = href == null ? Button : A;

  const contextId = "DUK:button:context";
  let context = getContext(contextId);
  $: actionProp =
    context === contexts.BUTTON.ACTION.DIALOG && action !== null
      ? { "data-duk-card-button-action": action }
      : {};
  $: defaultProp =
    context === contexts.BUTTON.ACTION.DIALOG && defaultAction
      ? { "data-duk-card-button-default": "" }
      : {};
  setContext(contextId, contexts.LABEL.BUTTON);

  function getClassNames(variant, size, context, outline) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.BUTTON.BRAND:
        classNames += " duk-button--brand";
        break;
      case variants.ATOM.BUTTON.CTA:
        classNames += " duk-button--cta";
        break;
      case variants.ATOM.BUTTON.INFO:
        classNames += " duk-button--info";
        break;
      case variants.ATOM.BUTTON.SUCCESS:
        classNames += " duk-button--success";
        break;
      case variants.ATOM.BUTTON.WARNING:
        classNames += " duk-button--warning";
        break;
      case variants.ATOM.BUTTON.DANGER:
        classNames += " duk-button--danger";
        break;
      case variants.ATOM.BUTTON.LIGHT:
        classNames += " duk-button--light";
        break;
      case variants.ATOM.BUTTON.DARK:
        classNames += " duk-button--dark";
        break;
      default:
        classNames += "";
    }
    switch (size) {
      case sizes.BUTTON.SMALL:
        classNames += " duk-button--small";
        break;
      case sizes.BUTTON.LARGE:
        classNames += " duk-button--large";
        break;
      default:
        classNames += "";
    }
    switch (context) {
      case contexts.BUTTON.ACTION.CARD:
        classNames += " duk-card__action duk-card__action--button";
        break;
      case contexts.BUTTON.ACTION.DIALOG:
        classNames += " duk-dialog__action duk-dialog__action--button";
        break;
      default:
        classNames += "";
    }
    if (outline) classNames += " duk-button--outline";

    return classNames;
  }
</script>

<svelte:component
  this="{component}"
  use="{[forwardEvents, ...use]}"
  class="duk-button {className}
  {getClassNames(variant, size, context, outline)}"
  {...actionProp}
  {...defaultProp}
  {...exclude($$props, ['use', 'class', 'variant', 'size', 'outline'])}>
  <slot />
</svelte:component>
