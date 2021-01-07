<script>
  import { current_component } from "svelte/internal";
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    variants,
    types,
  } from "@dusk-network/helpers";
  import Minimal from "./Minimal.svelte";
  import Maximal from "./Maximal.svelte";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let variant = variants.ORGANISM.FOOTER.BRAND;
  export let type = types.ORGANISM.FOOTER.MINIMAL;
  export let use = [];
  export let social;
  export let categories;

  let today = new Date();
  let year = today.getFullYear();
  const copyright = `© 2018 - ${year} Dusk Network B.V. All Rights Reserved.`;

  const forwardEvents = forwardEventsBuilder(current_component);

  function getClassNames(variant) {
    let classNames = "";
    switch (variant) {
      case variants.ORGANISM.FOOTER.BRAND:
        classNames += " duk-footer--brand";
        break;
      case variants.ORGANISM.FOOTER.CTA:
        classNames += " duk-footer--cta";
        break;
      case variants.ORGANISM.FOOTER.INFO:
        classNames += " duk-footer--info";
        break;
      case variants.ORGANISM.FOOTER.SUCCESS:
        classNames += " duk-footer--success";
        break;
      case variants.ORGANISM.FOOTER.WARNING:
        classNames += " duk-footer--warning";
        break;
      case variants.ORGANISM.FOOTER.DANGER:
        classNames += " duk-footer--danger";
        break;
      case variants.ORGANISM.FOOTER.LIGHT:
        classNames += " duk-footer--light";
        break;
      case variants.ORGANISM.FOOTER.DARK:
        classNames += " duk-footer--dark";
        break;
      case variants.ORGANISM.FOOTER.BLACK:
        classNames += " duk-footer--black";
        break;
      case variants.ORGANISM.FOOTER.WHITE:
        classNames += " duk-footer--white";
        break;
      default:
        classNames += "";
    }

    return classNames;
  }
</script>

<footer
  use:useActions="{use}"
  use:forwardEvents
  class="duk-footer {className} {getClassNames(variant)}"
  {...exclude($$props, ['use', 'class', 'type', 'variant', 'social', 'categories'])}>
  {#if type === types.ORGANISM.FOOTER.MAXIMAL}
    <Maximal categories="{categories}" />
  {/if}
  <Minimal copyright="{copyright}" social="{social}" />
</footer>
