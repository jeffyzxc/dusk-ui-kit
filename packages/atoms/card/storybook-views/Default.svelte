<script>
  import Card from "../Card.svelte";
  import CardContent from "../Content.svelte";
  export let variant;
  export let elevation;
  export let content;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <CardContent>{content}</CardContent>
</Card>
