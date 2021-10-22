<script>
  import Mnemonic from "@dusk-network/mnemonic";
  import types from "@dusk-network/helpers/types.js";

  function onComplete() {}
  function onPassed() {}
  const seed = [];
  const type = types.MNEMONIC.AUTHENTICATE;
  const length = 12;
</script>

<Mnemonic
  on:complete="{onComplete}"
  on:passed="{onPassed}"
  seed="{seed}"
  type="{type}"
  length="{length}"
/>
