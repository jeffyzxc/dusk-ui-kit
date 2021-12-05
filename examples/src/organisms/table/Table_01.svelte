<script>
  import Table, { Row, Datum } from "@dusk-network/table";
  import { useQuery } from "@sveltestack/svelte-query";
  import { apiData } from "./data.js";

  const settings = {
    sortable: true,
    rowsPerPage: 10,
    pagination: true,
    limiter: true,
  };

  let rows;

  async function getTransactions() {
    return apiData;
  }

  const transactions = useQuery("content", getTransactions);
</script>

{#if $transactions.isLoading}
  <p>Loading...</p>
{:else if $transactions.isError}
  <p>Error: {$transactions.error}</p>
{:else}
  <Table data="{$transactions.data}" bind:dataRows="{rows}" settings="{settings}">
    <h3 slot="title">Recent transactions</h3>
    <thead slot="head">
      <Row type="head">
        <Datum key="id" cols="1">ID</Datum>
        <Datum key="first_name" cols="5">Status</Datum>
        <Datum key="last_name" cols="3">Time</Datum>
        <Datum key="email" cols="3">Amount</Datum>
      </Row>
    </thead>
    <tbody>
      {#if rows}
        {#each $rows as row}
          <Row>
            <Datum cols="1">{row.id}</Datum>
            <Datum cols="5">
              {row.status}
            </Datum>
            <Datum cols="3">
              {row.timeStamp}
            </Datum>
            <Datum cols="3">
              {row.amount}
            </Datum>
          </Row>
        {/each}
      {/if}
    </tbody>
  </Table>
{/if}
