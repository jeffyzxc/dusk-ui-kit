<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, useActions, variants, types } from "@dusk-network/helpers";
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
  {...$$restProps}
>
  {#if type === types.ORGANISM.FOOTER.MAXIMAL}
    <Maximal categories="{categories}" />
  {/if}
  <Minimal copyright="{copyright}" social="{social}" />
</footer>
