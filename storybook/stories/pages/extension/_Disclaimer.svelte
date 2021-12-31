<script>
  import Control from "@dusk-network/control";
  import Toggle from "@dusk-network/toggle";

  let agreement = {
    checkbox1: false,
    checkbox2: false,
  };

  $: check = checkAgreement(agreement);

  function checkAgreement(item) {
    let arr = Object.values(item);
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        return false;
      }
    }
    return true;
  }
</script>

<Control width="full">
  <Toggle type="checkbox" on:click="{() => (agreement.checkbox1 = !agreement.checkbox1)}">
    I understand that without my seed phrase I cannot access my wallet and its assets.
  </Toggle>
</Control>
<Control width="full">
  <Toggle type="checkbox" on:click="{() => (agreement.checkbox2 = !agreement.checkbox2)}">
    I understand that securing my recovery phrase is my own responsibility. Only I have access to my
    recovery phrase.
  </Toggle>
</Control>
