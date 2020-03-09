<script>
  import Button, { Label } from "../";
  import Icon from "@dusk/icon";
  export let variant;
  export let size;
  export let buttonText;
  export let disabled;
  export let outline;
  export let iconName;
</script>

<Button {variant} {size} {disabled} {outline} on:click>
  <Icon name="{iconName}" {size} />
  <Label>{buttonText}</Label>
</Button>
