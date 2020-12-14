<script>
  import Card, { Content } from "../";
  export let variant;
  export let elevation;
  export let content;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <Content>{content}</Content>
</Card>
