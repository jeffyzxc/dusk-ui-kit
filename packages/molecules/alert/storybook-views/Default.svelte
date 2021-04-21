<script>
  import Alert from "../Alert.svelte";
  export let variant;
  export let title;
  export let dismissable;
  export let size;
  let value = true;
</script>

<Alert
  variant="{variant}"
  title="{title}"
  value="{value}"
  dismissable="{dismissable}"
  size="{size}"
>
  <p>This is an alert!</p>
</Alert>
