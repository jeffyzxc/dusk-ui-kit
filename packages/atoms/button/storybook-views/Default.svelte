<script>
  import Button, { Label } from "../";
  export let variant;
  export let size;
  export let buttonText;
  export let disabled;
  export let outline;
</script>

<Button {variant} {size} {disabled} {outline} on:click>
  <Label>{buttonText}</Label>
</Button>
