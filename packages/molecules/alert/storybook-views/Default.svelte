<script>
  import Alert from "../";
  export let variant;
  export let title;
  let value = true;
</script>

<Alert {variant} {title} {value}>
  <p>This is an alert!</p>
</Alert>
