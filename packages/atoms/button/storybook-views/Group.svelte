<script>
  import Button from "../Button.svelte";
  import ButtonLabel from "../Label.svelte";
  import ButtonGroup from "../Group.svelte";

  export let button1_variant;
  export let button1_size;
  export let button1_disabled;
  export let button1_outline;
  export let button1_buttonText;
  export let button2_variant;
  export let button2_size;
  export let button2_disabled;
  export let button2_outline;
  export let button2_buttonText;
  export let button3_variant;
  export let button3_size;
  export let button3_disabled;
  export let button3_outline;
  export let button3_buttonText;
</script>

<ButtonGroup>
  <Button
    variant="{button1_variant}"
    size="{button1_size}"
    disabled="{button1_disabled}"
    outline="{button1_outline}"
    on:click
  >
    <ButtonLabel>{button1_buttonText}</ButtonLabel>
  </Button>
  <Button
    variant="{button2_variant}"
    size="{button2_size}"
    disabled="{button2_disabled}"
    outline="{button2_outline}"
    on:click
  >
    <ButtonLabel>{button2_buttonText}</ButtonLabel>
  </Button>
  <Button
    variant="{button3_variant}"
    size="{button3_size}"
    disabled="{button3_disabled}"
    outline="{button3_outline}"
    on:click
  >
    <ButtonLabel>{button3_buttonText}</ButtonLabel>
  </Button>
</ButtonGroup>
