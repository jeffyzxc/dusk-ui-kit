<script>
  import Card, { Content, Footer } from "../";
  export let variant;
  export let elevation;
  export let content;
</script>

<Card {variant} {elevation} style="width: 305px">
  <Content>{content}</Content>
  <Footer>
      <p>This is some footer text.</p>
      <p>This is some footer text.</p>
  </Footer>
</Card>
