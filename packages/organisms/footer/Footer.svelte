<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, exclude, useActions, tones, variants, types } from "@dusk/helpers";
  import Minimal from "./Minimal.svelte";
  import Maximal from "./Maximal.svelte";
  import "./styles.css";

  let className = "";
  export { className as class };
  export let variant = variants.ORGANISM.FOOTER.BRAND;
  export let tone = tones.ORGANISM.FOOTER.APP;
  export let type = types.ORGANISM.FOOTER.MINIMAL;
  export let use = [];
  export let social;
  export let categories;

  let today = new Date();
  let year = today.getFullYear();
  const copyright = `© 2018 - ${year} Dusk Network B.V. All Rights Reserved.`;

  const forwardEvents = forwardEventsBuilder(current_component);

  // function getClassNames(variant, tone) {
  //   let classNames = "duk-footer";
  //   classNames += ` duk-footer--${tone}`;
  //   classNames += ` duk-footer--${tone}--${variant}`;

  //   return classNames;
  // }

  function getClassNames(variant, tone) {
    let classNames = "";
    if (tone === "marketing") {
      classNames += " duk-footer--marketing";
      switch (variant) {
        case variants.ORGANISM.FOOTER.BRAND:
          classNames += " duk-footer--marketing--brand";
          break;
        case variants.ORGANISM.FOOTER.CTA:
          classNames += " duk-footer--marketing--cta";
          break;
        case variants.ORGANISM.FOOTER.INFO:
          classNames += " duk-footer--marketing--info";
          break;
        case variants.ORGANISM.FOOTER.SUCCESS:
          classNames += " duk-footer--marketing--success";
          break;
        case variants.ORGANISM.FOOTER.WARNING:
          classNames += " duk-footer--marketing--warning";
          break;
        case variants.ORGANISM.FOOTER.DANGER:
          classNames += " duk-footer--marketing--danger";
          break;
        case variants.ORGANISM.FOOTER.LIGHT:
          classNames += " duk-footer--marketing--light";
          break;
        case variants.ORGANISM.FOOTER.DARK:
          classNames += " duk-footer--marketing--dark";
          break;
        default:
          classNames += "";
      }
    } else {
      classNames += " duk-footer--app";
      switch (variant) {
        case variants.ORGANISM.FOOTER.BRAND:
          classNames += " duk-footer--app--brand";
          break;
        case variants.ORGANISM.FOOTER.CTA:
          classNames += " duk-footer--app--cta";
          break;
        case variants.ORGANISM.FOOTER.INFO:
          classNames += " duk-footer--app--info";
          break;
        case variants.ORGANISM.FOOTER.SUCCESS:
          classNames += " duk-footer--app--success";
          break;
        case variants.ORGANISM.FOOTER.WARNING:
          classNames += " duk-footer--app--warning";
          break;
        case variants.ORGANISM.FOOTER.DANGER:
          classNames += " duk-footer--app--danger";
          break;
        case variants.ORGANISM.FOOTER.LIGHT:
          classNames += " duk-footer--app--light";
          break;
        case variants.ORGANISM.FOOTER.DARK:
          classNames += " duk-footer--app--dark";
          break;
        case variants.ORGANISM.FOOTER.BLACK:
          classNames += " duk-footer--app--black";
          break;
        case variants.ORGANISM.FOOTER.WHITE:
          classNames += " duk-footer--app--white";
          break;
        default:
          classNames += "";
      }
    }

    return classNames;
  }
</script>

<footer
  use:useActions="{use}"
  use:forwardEvents
  class="duk-footer {className} {getClassNames(variant, tone)}"
  {...exclude($$props, ['use', 'class', 'type', 'tone', 'variant', 'social', 'categories'])}>
  {#if type === types.ORGANISM.FOOTER.MAXIMAL}
    <Maximal categories="{categories}" tone="{tone}" />
  {/if}
  <Minimal copyright="{copyright}" social="{social}" />
</footer>
