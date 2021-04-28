<script>
  import Card from "../Card.svelte";
  import CardContent from "../Content.svelte";
  export let variant;
  export let elevation;
  export let cardText;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <CardContent>{cardText}</CardContent>
</Card>
