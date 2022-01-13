<script>
  import Balance from "@dusk-network/balance";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Heading from "@dusk-network/heading";
  import { getNumberFormatter } from "svelte-i18n";

  const formatOptions = { minimumFractionDigits: 0, maximumFractionDigits: 10 };
  const formatter = (number) => getNumberFormatter(formatOptions).formatToParts(number);

  let balance = {
    amount: 10000000.68468424,
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

<Card>
  <Heading>
    <h4>Your Balance</h4>
  </Heading>
  <Content>
    {#if fractionParts === ""}
      <Balance>
        {integerParts} <span>{balance.currency}</span>
      </Balance>
    {:else}
      <Balance>
        {integerParts}<span>{fractionParts} {balance.currency}</span>
      </Balance>
    {/if}
  </Content>
</Card>
