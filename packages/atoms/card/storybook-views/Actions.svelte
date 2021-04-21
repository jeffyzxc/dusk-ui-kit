<script>
  import Card from "../Card.svelte";
  import CardContent from "../Content.svelte";
  import CardTitle from "../Title.svelte";
  import CardActions from "../Actions.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  export let variant;
  export let elevation;
  export let content;
  export let title;
  export let buttonText;
  export let buttonVariant;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <CardTitle>{title}</CardTitle>
  <CardContent>{content}</CardContent>
  <CardActions>
    <Button size="{size}" variant="{buttonVariant}">{buttonText}</Button>
  </CardActions>
</Card>
