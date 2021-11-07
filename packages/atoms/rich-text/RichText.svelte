<script>
  import { getContext, setContext } from "svelte";
  import * as marked from "marked";
  import contexts from "@dusk-network/helpers/contexts.js";
  import sizes from "@dusk-network/helpers/sizes.js";
  import "./styles.css";

  /**
   * If set, this string will be parsed as Markdown and rendered as HTML.
   * @type {?string}
   */
  export let markdown;

  /**
   * Sets the size of the Rich Text.
   * @type {"sm" | "lg" | "xl" | "xxl"}
   */
  export let size = sizes.RICH_TEXT.DEFAULT;

  const context = getContext("DUK:rich-text:context");
  setContext("DUK:accordion:context", contexts.ACCORDION.RICH_TEXT);
</script>

<div
  class="{$$props.class || ''} duk-rich-text"
  class:duk-rich-text--small="{size === sizes.RICH_TEXT.SMALL}"
  class:duk-rich-text--large="{size === sizes.RICH_TEXT.LARGE}"
  class:duk-rich-text--xl="{size === sizes.RICH_TEXT.XL}"
  class:duk-rich-text--xxl="{size === sizes.RICH_TEXT.XXL}"
  class:duk-rich-text--hero="{context === contexts.RICH_TEXT.HERO}"
  class:duk-rich-text--card="{context === contexts.RICH_TEXT.CARD}"
>
  {#if markdown}
    {@html marked.parse(markdown)}
  {:else}
    <slot />
  {/if}
</div>
