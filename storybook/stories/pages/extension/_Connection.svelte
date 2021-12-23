<script>
  import Heading from "@dusk-network/heading";
  import Icon from "@dusk-network/icon";
  export let connected = false;
</script>

<Heading align="right">
  <svelte:fragment slot="icon">
    <Icon name="checkbox-blank-circle" variant="{connected ? 'success' : 'danger'}" />
  </svelte:fragment>
  {#if connected}
    <span>Linked to <strong>wallet.dusk.network</strong></span>
  {:else}
    <span
      >Not linked to <strong
        ><a href="https://wallet.dusk.network" target="_blank">wallet.dusk.network</a></strong
      ></span
    >
  {/if}
</Heading>
