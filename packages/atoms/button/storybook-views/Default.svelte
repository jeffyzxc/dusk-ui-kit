<script>
  import Button, { Label } from "@dusk-network/button";
  // import ButtonLabel from "../Label.svelte";
  export let variant = null;
  export let size = null;
  export let buttonText;
  export let disabled = null;
  export let outline = null;
</script>

<Button variant="{variant}" size="{size}" disabled="{disabled}" outline="{outline}">
  <Label>{buttonText}</Label>
</Button>
