<script>
  import Dialog from "../Dialog.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import Label from "@dusk-network/button/Label.svelte";
  export let variant;
  export let title;
  export let persistent;
  export let opacity;
  let showDialog = false;
</script>

<Dialog
  variant="{variant}"
  title="{title}"
  persistent="{persistent}"
  opacity="{opacity}"
  bind:value="{showDialog}"
>
  <p>This is a basic Dialog!</p>
</Dialog>

<div class="py-2">
  <Button on:click="{() => (showDialog = true)}">
    <Label>Show dialog</Label>
  </Button>
</div>
