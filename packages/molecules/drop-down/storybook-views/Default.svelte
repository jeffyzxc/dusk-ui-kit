<script>
  import DropDown from "@dusk-network/drop-down";

  export let options;
  export let dropUp;

  let selectedOption;

  function handleSelection(event) {
    selectedOption = event.detail;
  }
</script>

<DropDown options="{options}" selectedIndex="{1}" on:select="{handleSelection}" dropUp="{dropUp}" />
<p>Selected option: {selectedOption}</p>
