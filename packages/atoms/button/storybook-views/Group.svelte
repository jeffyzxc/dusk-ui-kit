<script>
  import Button, { Label, Group } from "../";
  export let button1_tone;
  export let button1_variant;
  export let button1_size;
  export let button1_disabled;
  export let button1_outline;
  export let button1_buttonText;
  export let button2_tone;
  export let button2_variant;
  export let button2_size;
  export let button2_disabled;
  export let button2_outline;
  export let button2_buttonText;
  export let button3_tone;
  export let button3_variant;
  export let button3_size;
  export let button3_disabled;
  export let button3_outline;
  export let button3_buttonText;
</script>

<Group>
  <Button
    tone="{button1_tone}"
    variant="{button1_variant}"
    size="{button1_size}"
    disabled="{button1_disabled}"
    outline="{button1_outline}"
    on:click>
    <Label>{button1_buttonText}</Label>
  </Button>
  <Button
    tone="{button2_tone}"
    variant="{button2_variant}"
    size="{button2_size}"
    disabled="{button2_disabled}"
    outline="{button2_outline}"
    on:click>
    <Label>{button2_buttonText}</Label>
  </Button>
  <Button
    tone="{button3_tone}"
    variant="{button3_variant}"
    size="{button3_size}"
    disabled="{button3_disabled}"
    outline="{button3_outline}"
    on:click>
    <Label>{button3_buttonText}</Label>
  </Button>
</Group>
