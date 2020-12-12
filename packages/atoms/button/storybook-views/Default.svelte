<script>
  import Button, { Label } from "../";
  export let variant;
  export let size;
  export let buttonText;
  export let disabled;
  export let outline;
  export let tone;
</script>

<Button {tone} {variant} {size} {disabled} {outline}>
  <Label>{buttonText}</Label>
</Button>
