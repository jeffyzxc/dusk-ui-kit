<script>
  import Card, { Content, Title } from "../";
  export let variant;
  export let elevation;
  export let content;
  export let title;
</script>

<Card {variant} {elevation} style="width: 305px">
  <Title>{title}</Title>
  <Content>{content}</Content>
</Card>
