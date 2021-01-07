<script>
  import Button, { Label } from "../";
  import Icon from "@dusk-network/icon";
  export let variant;
  export let size;
  export let buttonText;
  export let disabled;
  export let outline;
  export let iconName;
</script>

<Button variant="{variant}" size="{size}" disabled="{disabled}" outline="{outline}" on:click>
  <Icon name="{iconName}" size="{size}" />
  <Label>{buttonText}</Label>
</Button>
