<script>
  import icons from "@dusk-network/helpers/icons.js";
  import Icon from "@dusk-network/icon/Icon.svelte";

  export let message;
  export let submitted;
  export let fields;
  export let schema;
  export let name;
</script>

<div class="duk-control__message">
  {#if $submitted && name}
    {#await $schema.validateAt(name, $fields) then result}
      <p>&nbsp;</p>
    {:catch error}
      <Icon name="{icons.ALERT_OUTLINE}" />
      <p>{error.errors[0]}</p>
    {/await}
  {:else if message}
    <p>{message}</p>
  {/if}
</div>
