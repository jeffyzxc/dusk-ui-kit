<script>
  import { getContext } from "svelte";
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    contexts,
    variants
  } from "@dusk/helpers";
  import "./styles.css";
  import { A, Div } from "@dusk/elements";

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let className = "";
  export { className as class };

  export let href = null;
  export let wrapper = href == null ? Div : A;
  export let variant = variants.ATOM.LOGO.DARK;

  let context = getContext("DUK:logo:context");

  function getClassNames(variant, context) {
    let classNames = "";
    switch (variant) {
      case variants.ATOM.LOGO.BRAND:
        classNames += " duk-logo--brand";
        break;
      case variants.ATOM.LOGO.LIGHT:
        classNames += " duk-logo--light";
        break;
      case variants.ATOM.LOGO.DARK:
        classNames += " duk-logo--dark";
        break;
      case variants.ATOM.LOGO.WHITE:
        classNames += " duk-logo--white";
        break;
      case variants.ATOM.LOGO.BLACK:
        classNames += " duk-logo--black";
        break;
      default:
        classNames += "";
    }
    switch (context) {
      case contexts.LOGO.NAVBAR:
        classNames += " duk-navbar__logo";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<svelte:component
  this="{wrapper}"
  use="{[forwardEvents, ...use]}"
  class="duk-logo {className}
  {getClassNames(variant, context)}"
  {...exclude($$props, ['use', 'class', 'variant', 'href'])}>
  <svg
    id="__DUK_LOGO"
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 291.36 63.27">
    <path
      d="M.21.15A.24.24,0,0,0,0,.38.23.23,0,0,0,.21.61a31.21,31.21,0,0,1,19,9,31,31,0,0,1,9.13,22.05,31,31,0,0,1-9.13,22,31.21,31.21,0,0,1-19,9,.24.24,0,0,0-.21.23.23.23,0,0,0,.21.23A31.55,31.55,0,0,0,25.69,54a31.67,31.67,0,0,0,0-44.75A31.55,31.55,0,0,0,.21.15Z"></path>
    <path
      d="M115.48,37.77a26.23,26.23,0,0,1-.74,6.23,15.53,15.53,0,0,1-2.43,5.38,12.66,12.66,0,0,1-4.45,3.82,16.67,16.67,0,0,1-13.6,0,12.57,12.57,0,0,1-4.45-3.82A15.62,15.62,0,0,1,87.38,44a25.73,25.73,0,0,1-.75-6.23V5.18H81.25V38.36a31.16,31.16,0,0,0,.86,7,19.26,19.26,0,0,0,3.11,6.84,17.43,17.43,0,0,0,6,5.19,20.52,20.52,0,0,0,9.79,2.06,20.61,20.61,0,0,0,9.76-2.06,17.49,17.49,0,0,0,6.09-5.19,19.41,19.41,0,0,0,3.1-6.84,31.16,31.16,0,0,0,.86-7V5.18h-5.38V37.77Z"></path>
    <path
      d="M197.49,33.39a19.93,19.93,0,0,0-5-2.73q-2.79-1-5.55-1.94c-1.49-.49-2.92-1-4.28-1.49A15.08,15.08,0,0,1,179,25.32a9,9,0,0,1-2.57-2.8,8.11,8.11,0,0,1-1-4.18,9.15,9.15,0,0,1,1-4.41,9.41,9.41,0,0,1,2.65-3.11A11.59,11.59,0,0,1,182.76,9a13.8,13.8,0,0,1,4-.6,13.48,13.48,0,0,1,6.5,1.46,13,13,0,0,1,4.41,3.85l4.26-3.44a15.79,15.79,0,0,0-5.76-4.52,20.36,20.36,0,0,0-9.19-1.9,22.08,22.08,0,0,0-5.9.82,16.6,16.6,0,0,0-5.46,2.61,13.87,13.87,0,0,0-4,4.56,13.39,13.39,0,0,0-1.53,6.58,13.45,13.45,0,0,0,1.23,6.05,12.72,12.72,0,0,0,3.26,4.15,17.47,17.47,0,0,0,4.55,2.73q2.55,1.05,5.16,1.87t4.86,1.64a17.93,17.93,0,0,1,4.11,2A9.8,9.8,0,0,1,196.1,40a8.91,8.91,0,0,1,1.08,4.59A8.86,8.86,0,0,1,196.1,49a11,11,0,0,1-2.77,3.22,11.74,11.74,0,0,1-3.77,1.94,14.26,14.26,0,0,1-4.11.63,13.67,13.67,0,0,1-7.3-1.9,14.32,14.32,0,0,1-4.82-4.75l-4.63,3.44A17.26,17.26,0,0,0,172,55a18,18,0,0,0,4,2.47A22.06,22.06,0,0,0,180.58,59a24.31,24.31,0,0,0,4.78.49,22.33,22.33,0,0,0,6.25-.9,16.34,16.34,0,0,0,5.51-2.77A14.34,14.34,0,0,0,201,51a14.5,14.5,0,0,0,1.51-6.84,13.54,13.54,0,0,0-1.41-6.54A13.13,13.13,0,0,0,197.49,33.39Z"></path>
    <polygon
      points="263.18 29.17 289.86 5.17 282.16 5.17 256.97 28.94 256.9 28.94
      256.9 5.17 251.52 5.17 251.52 58.1 256.9 58.1 256.9 29.91 256.97 29.91
      283.44 58.1 291.36 58.1 263.18 29.17"></polygon>
  </svg>
</svelte:component>
