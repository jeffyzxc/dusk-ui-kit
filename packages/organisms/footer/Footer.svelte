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

  let today = new Date();
  let year = today.getFullYear();
  const copyright = `© 2018 - ${year} Dusk Network B.V. All Rights Reserved.`;

  const forwardEvents = forwardEventsBuilder(current_component);

  function getClassNames(variant, tone) {
    let classNames = "duk-footer";
    classNames += ` duk-footer--${tone}`;
    classNames += ` duk-footer--${tone}--${variant}`;

    return classNames;
  }

  function getSelectedType(type) {
    let selectedType;
    switch (type) {
      case types.ORGANISM.FOOTER.MINIMAL:
        selectedType = Minimal;
        break;
      case types.ORGANISM.FOOTER.MAXIMAL:
        selectedType = Maximal;
        break;
      default:
        selectedType = Minimal;
    }

    return selectedType;
  }
</script>

<footer
  use:useActions="{use}"
  use:forwardEvents
  class="duk-footer {className}
  {getClassNames(variant, tone)}"
  {...exclude($$props, ['use', 'class', 'tone', 'variant', 'social'])}>
  <svelte:component this="{getSelectedType(type)}" {copyright} {social} />
</footer>
