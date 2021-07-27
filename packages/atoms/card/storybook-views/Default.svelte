<script>
  import Card from "../Card.svelte";
  import CardContent from "../Content.svelte";
  import CardTitle from "../Title.svelte";
  import CardFooter from "../Footer.svelte";
  import Button from "@dusk-network/button";
  import CardActions from "../Actions.svelte";

  export let variant;
  export let cardText;
  export let size;
  export let title;
  export let footer;
  export let action;
  export let buttonText;
  export let buttonSize;
  export let buttonVariant;
</script>

<Card variant="{variant}" size="{size}">
  {#if title}
    <CardTitle>
      <h3>{title}</h3>
    </CardTitle>
  {/if}
  <CardContent>{cardText}</CardContent>
  {#if action}
    <CardActions>
      <Button size="{buttonSize}" variant="{buttonVariant}">{buttonText}</Button>
    </CardActions>
  {/if}
  {#if footer}
    <CardFooter>
      <p>{footer}</p>
    </CardFooter>
  {/if}
</Card>
