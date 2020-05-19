<script>
  import Card, { Content, Footer } from "../";
  export let variant;
  export let elevation;
  export let content;
  export let size;
</script>

<Card {variant} {elevation} {size} style="width: 305px">
  <Content>{content}</Content>
  <Footer>
    <p>This is some footer text.</p>
    <p>This is some footer text.</p>
  </Footer>
</Card>
