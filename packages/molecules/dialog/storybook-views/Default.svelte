<script>
  import Dialog from "../";
  import Button, { Label } from "@dusk/button";
  export let variant;
  export let title;
  let showDialog = false;
</script>

<Dialog {variant} {title} bind:value={showDialog}>
  <p>This is a basic Dialog!</p>
</Dialog>

<div class="py-2">
  <Button on:click={() => showDialog = true}>
    <Label>Show dialog</Label>
  </Button>
</div>
