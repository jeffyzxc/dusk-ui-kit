<script>
  import Card, { Content } from "../";
  export let variant;
  export let content;
</script>

<Card {variant} style="width: 305px">
  <Content>{content}</Content>
</Card>
