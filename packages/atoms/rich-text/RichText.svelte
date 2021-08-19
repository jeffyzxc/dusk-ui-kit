<script>
  import { getContext } from "svelte";
  import * as marked from "marked";
  import contexts from "@dusk-network/helpers/contexts.js";
  import sizes from "@dusk-network/helpers/sizes.js";
  import "./styles.css";

  export let markdown;
  export let size = sizes.RICH_TEXT.DEFAULT;

  const context = getContext("DUK:rich-text:context");
</script>

<div
  class="{$$props.class || ''} duk-rich-text"
  class:duk-rich-text--small="{size === sizes.RICH_TEXT.SMALL}"
  class:duk-rich-text--large="{size === sizes.RICH_TEXT.LARGE}"
  class:duk-rich-text--xl="{size === sizes.RICH_TEXT.XL}"
  class:duk-rich-text--xxl="{size === sizes.RICH_TEXT.XXL}"
  class:duk-rich-text--hero="{context === contexts.RICH_TEXT.HERO}"
>
  {#if markdown}
    {@html marked(markdown)}
  {:else}
    <slot />
  {/if}
</div>
