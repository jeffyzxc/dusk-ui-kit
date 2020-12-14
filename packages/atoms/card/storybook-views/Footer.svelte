<script>
  import Card, { Content, Footer } from "../";
  export let variant;
  export let elevation;
  export let content;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <Content>{content}</Content>
  <Footer>
    <p>This is some footer text.</p>
    <p>This is some footer text.</p>
  </Footer>
</Card>
