<script>
  import { getContext } from "svelte";
  import contexts from "@dusk-network/helpers/contexts.js";
  import "./styles.css";

  const context = getContext("DUK:file-upload:context");
</script>

<div
  class="{$$props.class || ''} duk-file-upload"
>
  <slot/>
</div>


