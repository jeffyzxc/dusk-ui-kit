<script>
  import Heading from "@dusk-network/heading";
  import RichText from "@dusk-network/rich-text";
  import { getNumberFormatter } from "svelte-i18n";

  const formatOptions = { minimumFractionDigits: 0, maximumFractionDigits: 10 };
  const formatter = (number) => getNumberFormatter(formatOptions).formatToParts(number);

  let balance = {
    amount: 10000000.68468,
    currency: "DUSK",
  };

  const integerParts = formatter(balance.amount)
    .filter((item) => item.type === "integer" || item.type === "group")
    .map((e) => e.value)
    .join("");
  const fractionParts = formatter(balance.amount)
    .filter((item) => item.type === "decimal" || item.type === "fraction")
    .map((e) => e.value)
    .join("");
</script>

<div class="wallet-balance">
  <div class="wallet-balance__heading">
    <Heading class="wallet-balance__heading--text">
      <h4>Your Balance</h4>
    </Heading>
  </div>
  {#if fractionParts === ""}
    <RichText>
      <p class="wallet-balance__amount">
        {integerParts} <span>{balance.currency}</span>
      </p>
    </RichText>
  {:else}
    <RichText>
      <p class="wallet-balance__amount">
        {integerParts}<span>{fractionParts} {balance.currency}</span>
      </p>
    </RichText>
  {/if}
</div>
