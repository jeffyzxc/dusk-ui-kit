<script>
  import Card, { Content } from "../";
  export let variant;
  export let elevation;
  export let content;
  export let size;
  export let tone;
</script>

<Card {variant} {tone} {elevation} {size} style="width: 305px">
  <Content>{content}</Content>
</Card>
