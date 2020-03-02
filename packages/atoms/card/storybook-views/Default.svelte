<script>
  import Card, { Content } from "../";
  export let variant;
  export let elevation;
  export let content;
</script>

<Card {variant} {elevation} style="width: 305px">
  <Content>{content}</Content>
</Card>
