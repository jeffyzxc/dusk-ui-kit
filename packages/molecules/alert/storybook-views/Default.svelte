<script>
  import Alert from "../";
  export let variant;
  export let title;
  export let dismissable;
  export let size;
  let value = true;
</script>

<Alert {variant} {title} {value} {dismissable} {size}>
  <p>This is an alert!</p>
</Alert>
