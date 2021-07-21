<script>
  import Button, { Label } from "@dusk-network/button";
  import Icon from "@dusk-network/icon";

  export let variant = null;
  export let size = null;
  export let buttonText;
  export let disabled = null;
  export let outline = null;
  export let icon = null;
  export let circle = null;
</script>

<Button
  variant="{variant}"
  size="{size}"
  disabled="{disabled}"
  outline="{outline}"
  circle="{circle}"
>
  {#if icon}
    <Icon name="{icon}" size="{size}" />
  {/if}
  {#if buttonText}
    <Label>{buttonText}</Label>
  {/if}
</Button>
