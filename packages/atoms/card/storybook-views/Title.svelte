<script>
  import Card from "../Card.svelte";
  import CardContent from "../Content.svelte";
  import CardTitle from "../Title.svelte";
  export let variant;
  export let elevation;
  export let content;
  export let title;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <CardTitle>
    <h3>{title}</h3>
  </CardTitle>
  <CardContent>{content}</CardContent>
</Card>
