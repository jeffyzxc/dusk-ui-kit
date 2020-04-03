<script>
  import Alert from "../";
  import Card, { Title, Content } from "@dusk/card";
  export let variant;
  export let title;
</script>

<Alert {variant} {title}>
  <p>This is an alert!</p>
</Alert>
