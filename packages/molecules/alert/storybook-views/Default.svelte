<script>
  import Alert from "../";
  export let variant;
  export let title;
  export let dismissable;
  let value = true;
</script>

<Alert {variant} {title} {value} {dismissable}>
  <p>This is an alert!</p>
</Alert>
