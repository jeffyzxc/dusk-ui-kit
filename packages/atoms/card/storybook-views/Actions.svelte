<script>
  import Card, { Content, Title, Actions } from "../";
  import Button from "@dusk-network/button";
  export let variant;
  export let elevation;
  export let content;
  export let title;
  export let buttonText;
  export let buttonVariant;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <Title>{title}</Title>
  <Content>{content}</Content>
  <Actions>
    <Button variant="{buttonVariant}">{buttonText}</Button>
  </Actions>
</Card>
