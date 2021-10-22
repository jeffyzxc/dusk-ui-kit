<script>
  import Mnemonic from "@dusk-network/mnemonic";
  import types from "@dusk-network/helpers/types.js";

  function onComplete() {}
  function onPassed() {}
  const seed = [
    "oyster",
    "close",
    "apple",
    "unfold",
    "wood",
    "alone",
    "during",
    "storm",
    "pulp",
    "glow",
    "album",
    "shop",
  ];
  const type = types.MNEMONIC.CONFIRM;
  const length = 12;
</script>

<Mnemonic
  on:complete="{onComplete}"
  on:passed="{onPassed}"
  seed="{seed}"
  type="{type}"
  length="{length}"
/>
