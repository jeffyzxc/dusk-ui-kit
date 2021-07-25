<script>
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder, useActions, variants, sizes } from "@dusk-network/helpers";
  import "./styles.css";

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  export let variant = undefined;
  export let size = sizes.ATOM.CARD.BASE;
</script>

<div
  use:useActions="{use}"
  use:forwardEvents
  class="{$$props.class || ''} duk-card"
  class:duk-card--brand="{variant === variants.ATOM.CARD.BRAND}"
  class:duk-card--cta="{variant === variants.ATOM.CARD.CTA}"
  class:duk-card--info="{variant === variants.ATOM.CARD.INFO}"
  class:duk-card--success="{variant === variants.ATOM.CARD.SUCCESS}"
  class:duk-card--warning="{variant === variants.ATOM.CARD.WARNING}"
  class:duk-card--danger="{variant === variants.ATOM.CARD.DANGER}"
  class:duk-card--small="{size === sizes.ATOM.CARD.SMALL}"
  class:duk-card--large="{size === sizes.ATOM.CARD.LARGE}"
  {...$$restProps}
>
  <slot />
</div>
