<script>
  // import { getContext } from "svelte";
  import { passwordStrength } from "check-password-strength";
  import ProgressBar from "@dusk-network/progress-bar/ProgressBar.svelte";
  import variants from "@dusk-network/helpers/variants.js";
  import "./styles.css";

  export let password;

  let strength = 0;
  let maxStrength = 4;
  let variant = variants.PROGRESS_BAR.DANGER;

  const checkPassword = (password) => {
    strength = passwordStrength(password).id + 1;
    return passwordStrength(password).value;
  };

  const getVariant = (strength) => {
    // console.log(strength === 2);
    let variant;
    // if (strength === 2) variant = "variants.PROGRESS_BAR.WARNING";
    switch (strength) {
      case 1:
        variant = variants.PROGRESS_BAR.DANGER;
        break;
      case 2:
        variant = variants.PROGRESS_BAR.DANGER;
        break;
      case 3:
        variant = variants.PROGRESS_BAR.WARNING;
        break;
      case 4:
        variant = variants.PROGRESS_BAR.SUCCESS;
        break;
      default:
        variant = variants.PROGRESS_BAR.DANGER;
        break;
    }

    console.log(variant);

    return variant;
  };

  $: passwordLevel = checkPassword(password);
  $: variant = getVariant(strength);

  // const context = getContext("DUK:password-strength:context");
</script>

<div class="{$$props.class || ''} duk-password-strength">
  <div class="duk-password-strength__label">
    <slot />
    <span>{passwordLevel}</span>
  </div>
  <ProgressBar variant="{variant}" steps="{maxStrength}" step="{strength}" />
</div>
