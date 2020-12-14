<script>
  import Card, { Content, Title } from "../";
  export let variant;
  export let elevation;
  export let content;
  export let title;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <Title>
    <h3>{title}</h3>
  </Title>
  <Content>{content}</Content>
</Card>
