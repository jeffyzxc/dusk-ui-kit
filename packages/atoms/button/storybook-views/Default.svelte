<script>
  import Button, { Label } from "../";
  export let variant;
  export let size;
  export let buttonText;
  export let disabled;
  export let outline;
</script>

<Button variant="{variant}" size="{size}" disabled="{disabled}" outline="{outline}">
  <Label>{buttonText}</Label>
</Button>
