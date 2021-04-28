<script>
  import Button from "../Button.svelte";
  import ButtonLabel from "../Label.svelte";
  export let variant = null;
  export let size = null;
  export let buttonText;
  export let disabled = null;
  export let outline = null;
  // import "@dusk-network/styles/tailwind.css";
</script>

<Button variant="{variant}" size="{size}" disabled="{disabled}" outline="{outline}">
  <ButtonLabel>{buttonText}</ButtonLabel>
</Button>
