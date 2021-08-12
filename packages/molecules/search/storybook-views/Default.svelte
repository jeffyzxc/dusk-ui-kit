<!-- <script>
  import Search, { Label } from "@dusk-network/search";
  import Icon from "@dusk-network/icon";

  export let variant = null;
  export let size = null;
  export let searchText;
  export let disabled = null;
  export let outline = null;
  export let icon = null;
  export let circle = null;
  export let href = null;
  export let block = null;

  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<Search
  on:click="{handleClick}"
  variant="{variant}"
  size="{size}"
  disabled="{disabled}"
  outline="{outline}"
  circle="{circle}"
  href="{href}"
  block="{block}"
>
  {#if icon}
    <Icon name="{icon}" size="{size}" />
  {/if}
  {#if searchText}
    <Label>{searchText}</Label>
  {/if}
</Search>

<p>Clicked: {count}</p> -->
