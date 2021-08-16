<script>
  import { sizes } from "@dusk-network/helpers/index.js";
  import * as marked from "marked";
  import "./styles.css";

  export let markdown;
  export let size = sizes.RICH_TEXT.DEFAULT;
</script>

<div
  class="{$$props.class || ''} duk-rich-text"
  class:duk-rich-text--small="{size === sizes.RICH_TEXT.SMALL}"
  class:duk-rich-text--large="{size === sizes.RICH_TEXT.LARGE}"
  class:duk-rich-text--xl="{size === sizes.RICH_TEXT.XL}"
  class:duk-rich-text--xxl="{size === sizes.RICH_TEXT.XXL}"
>
  {#if markdown}
    {@html marked(markdown)}
  {:else}
    <slot />
  {/if}
</div>
