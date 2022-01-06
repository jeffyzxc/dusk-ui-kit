<script>
  import { setContext, getContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  const context = getContext("DUK:detail-list:context");

  setContext("DUK:icon:context", contexts.ICON.DETAIL_LIST);
</script>

<dl
  class="{$$props.class || ''} duk-detail-list"
  class:duk-detail-list--card="{context === contexts.DETAIL_LIST.CARD}"
>
  <slot />
</dl>
