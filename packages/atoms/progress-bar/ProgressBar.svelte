<script>
  import { getContext } from "svelte";
  import variants from "@dusk-network/helpers/variants.js";
  import contexts from "@dusk-network/helpers/contexts.js";

  import "./styles.css";

  export let variant = variants.PROGRESS_BAR.SUCCESS;
  export let steps;
  export let step;
  $: styles = (step * 100) / steps;

  const context = getContext("DUK:progress-bar:context");
</script>

<div
  class="{$$props.class || ''} duk-progress-bar"
  class:duk-progress-bar--brand="{variant === variants.PROGRESS_BAR.BRAND}"
  class:duk-progress-bar--cta="{variant === variants.PROGRESS_BAR.CTA}"
  class:duk-progress-bar--info="{variant === variants.PROGRESS_BAR.INFO}"
  class:duk-progress-bar--success="{variant === variants.PROGRESS_BAR.SUCCESS}"
  class:duk-progress-bar--warning="{variant === variants.PROGRESS_BAR.WARNING}"
  class:duk-progress-bar--danger="{variant === variants.PROGRESS_BAR.DANGER}"
  class:duk-progress-bar--wizard="{context === contexts.PROGRESS_BAR.WIZARD}"
>
  <div class="duk-progress-bar__wrapper">
    <div style="width:{styles}%" class="duk-progress-bar__step"></div>
    <div class="duk-progress-bar__bar"></div>
  </div>
</div>
