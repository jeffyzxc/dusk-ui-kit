<script>
  import Button from "../Button.svelte";
  import ButtonLabel from "../Label.svelte";
  import Icon from "@dusk-network/icon/Icon.svelte";

  export let variant;
  export let size;
  export let buttonText;
  export let disabled;
  export let outline;
  export let iconName;
</script>

<Button variant="{variant}" size="{size}" disabled="{disabled}" outline="{outline}" on:click>
  <Icon name="{iconName}" size="{size}" />
  <ButtonLabel>{buttonText}</ButtonLabel>
</Button>
