<script>
  import Card, { Content, Title, Actions } from "../";
  import Button from "@dusk/button";
  export let variant;
  export let elevation;
  export let content;
  export let title;
  export let buttonText;
  export let buttonVariant;
</script>

<Card {variant} {elevation} style="width: 305px">
  <Title>{title}</Title>
  <Content>{content}</Content>
  <Actions>
    <Button variant="{buttonVariant}">{buttonText}</Button>
  </Actions>
</Card>
