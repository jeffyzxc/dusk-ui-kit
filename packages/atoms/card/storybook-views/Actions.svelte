<script>
  import Card, { Content, Title, Actions } from "../";
  import Button from "../../button";
  export let variant;
  export let content;
  export let title;
  export let buttonText;
  export let buttonVariant;
</script>

<Card {variant} style="width: 305px">
  <Title>{title}</Title>
  <Content>{content}</Content>
  <Actions>
    <Button variant="{buttonVariant}">{buttonText}</Button>
  </Actions>
</Card>
