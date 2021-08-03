<script>
  import Alert from "@dusk-network/alert/Alert.svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import Group from "@dusk-network/button/Group.svelte";

  export let variant;
  export let dismissable;

  let showAlert = false;
  let icon;

  $: {
    icon = variant === "success" && "check-decagram-outline";
    icon = variant === "warning" && "alert-outline";
    icon = variant === "danger" && "close-circle-outline";
  }
</script>

<Alert variant="{variant}" bind:value="{showAlert}" dismissable="{dismissable}">
  <div slot="icon">
    <Icon
      name="{(variant === 'success' && 'check-decagram-outline') ||
        (variant === 'warning' && 'alert-outline') ||
        (variant === 'danger' && 'close-circle-outline') ||
        'help-circle-outline'}"
    />
  </div>
  <div slot="title">Alert Title!</div>
  <p>This is an alert!</p>
  <div slot="actions">
    <Group>
      <Button variant="{variant || 'brand'}" outline="{true}" on:click="{() => (showAlert = false)}"
        >Accept</Button
      >
      <Button variant="default" outline="{true}" on:click="{() => (showAlert = false)}"
        >Reject</Button
      >
    </Group>
  </div>
</Alert>

<Button variant="brand" on:click="{() => (showAlert = true)}">Show Alert</Button>
