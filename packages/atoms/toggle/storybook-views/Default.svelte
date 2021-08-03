<script>
  import { types } from "@dusk-network/helpers";
  import Toggle from "@dusk-network/toggle/Toggle.svelte";
  import Group from "@dusk-network/toggle/Group.svelte";
  export let variant;
  export let type;
  let numberToShow = 1;
  let value = false;

  $: numberToShow = type === types.ATOM.TOGGLE.BUTTON || type === types.ATOM.TOGGLE.RADIO ? 5 : 1;
</script>

<Group>
  {#each Array(numberToShow) as _, i}
    <Toggle
      variant="{variant}"
      type="{type}"
      value="value-{i}"
      name="{type === types.ATOM.TOGGLE.BUTTON || type === types.ATOM.TOGGLE.RADIO
        ? `tog`
        : `tog_${i}`}"
      id="tog_{i}"
      bind:checked="{value}"
    >
      Label {i}
    </Toggle>
  {/each}
</Group>
<p>Value is: {value}</p>
