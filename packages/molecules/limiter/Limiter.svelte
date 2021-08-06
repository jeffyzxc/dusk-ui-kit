<script>
  import { createEventDispatcher } from "svelte";
  import DropDown from "@dusk-network/drop-down/DropDown.svelte";
  import "./styles.css";

  export let ref = "";
  export let dropUp = true;
  export let options;

  const dispatch = createEventDispatcher();

  const setLimit = (event) => {
    dispatch("limit", event.detail);
  };
</script>

<nav
  class="{$$props.class || ''} duk-limiter"
  role="navigation"
  aria-label="Data Limiting Navigation"
  ref="{ref}"
>
  <span>Showing</span>
  <DropDown dropUp="{dropUp}" options="{options}" on:select="{setLimit}" />
  <span>rows</span>
</nav>
