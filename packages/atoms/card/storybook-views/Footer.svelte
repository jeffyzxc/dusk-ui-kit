<script>
  import Card from "../Card.svelte";
  import CardContent from "../Content.svelte";
  import CardFooter from "../Footer.svelte";
  export let variant;
  export let elevation;
  export let content;
  export let size;
</script>

<Card variant="{variant}" elevation="{elevation}" size="{size}">
  <CardContent>{content}</CardContent>
  <CardFooter>
    <p>This is some footer text.</p>
    <p>This is some footer text.</p>
  </CardFooter>
</Card>
