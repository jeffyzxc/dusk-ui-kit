<script>
  import Mnemonic from "@dusk-network/mnemonic";

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
  const type = "preview";
</script>

<Mnemonic on:complete="{onComplete}" on:passed="{onPassed}" seed="{seed}" type="{type}" />
