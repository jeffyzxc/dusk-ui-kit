<script>
  import Card, { Content, Title } from "../";
  export let variant;
  export let elevation;
  export let content;
  export let title;
</script>

<Card {variant} {elevation} style="width: 305px">
  <Title><h3>{title}</h3></Title>
  <Content>{content}</Content>
</Card>
