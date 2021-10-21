<script>
  import Toggle, { Group } from "@dusk-network/toggle";

  const type = "button";
  let variant = "brand";
  function onChange() {
    //Runs on triggered event
  }
  function onClick() {
    //Runs on triggered event
  }
</script>

<Group>
  {#each Array(5) as _, i}
    <Toggle
      type="{type}"
      name="button_{i}"
      id="button_{i}"
      variant="{variant}"
      on:change="{onChange}"
      on:click="{onClick}"
    >
      Example {type}
    </Toggle>
  {/each}
</Group>
