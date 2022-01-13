<script>
  import DateText from "@dusk-network/date-text";
  import Icon from "@dusk-network/icon";
  import Table, { Row, Datum } from "@dusk-network/table";
  import RichText from "@dusk-network/rich-text";
  import LoadingIndicator from "@dusk-network/loading-indicator";
  import Heading from "@dusk-network/heading";
  import { number } from "svelte-i18n";

  export let transactions = [];

  const settings = {
    sortable: false,
    rowsPerPage: 10,
    pagination: true,
    limiter: false,
  };

  let transactionRows;
</script>

<div class="wallet-transactions">
  <Table data="{transactions}" bind:dataRows="{transactionRows}" settings="{settings}">
    <h3 slot="title">Recent transactions</h3>
    <thead slot="head">
      <Row type="head">
        <Datum dataKey="id" cols="1"><span>ID</span></Datum>
        <Datum dataKey="first_name" cols="4"><span>Status</span></Datum>
        <Datum dataKey="last_name" cols="4"><span>Time</span></Datum>
        <Datum dataKey="email" cols="2"><span>Amount</span></Datum>
        <Datum cols="1" />
        <Datum hidden="{true}" />
      </Row>
    </thead>
    <tbody>
      {#if transactionRows}
        {#each $transactionRows as row}
          <Row>
            <Datum cols="1"><span>{row.id}</span></Datum>
            <Datum cols="4">
              {#if row.status.toLowerCase() === "sent" && row.details.status !== null}
                <Heading variant="warning">
                  <svelte:fragment slot="icon">
                    <LoadingIndicator variant="warning" />
                  </svelte:fragment>
                  <span>{row.status} ({row.details.status.toLocaleLowerCase()})</span>
                </Heading>
              {:else}
                <Heading
                  variant="{row.status.toLowerCase() === 'received'
                    ? 'success'
                    : row.status.toLowerCase() === 'sent' && row.details.status === null
                    ? 'danger'
                    : ''}"
                >
                  <svelte:fragment slot="icon">
                    <Icon
                      name="{row.status.toLowerCase() === 'sent' && row.details.status === null
                        ? 'arrow-right-circle'
                        : 'archive-arrow-down-outline'}"
                      size="sm"
                    />
                  </svelte:fragment>
                  <span>{row.status}</span>
                </Heading>
              {/if}
            </Datum>
            <Datum cols="4">
              <Icon name="timeline-clock-outline" size="sm" />
              <DateText time="{row.timeStamp}" />
            </Datum>
            <Datum cols="2">
              <Icon name="dusk-ticker" size="sm" />
              <span>{$number(row.amount)}</span>
            </Datum>
            <Datum cols="1" actions="{true}" />
            <Datum hidden="{true}" class="wallet-transactions__details--row">
              <div class="wallet-transactions__details--wrapper">
                <div class="wallet-transactions__details">
                  <div class="wallet-transactions__details--info">
                    <Icon size="lg" name="cube-outline" />
                    <RichText size="sm">
                      <p class="text--first">{row.details.confirmation}</p>
                    </RichText>
                    <RichText size="sm">
                      <p class="text-second">confirmations {row.details.confirmation}</p>
                    </RichText>
                  </div>
                  <div class="wallet-transactions__details--info">
                    <Icon size="lg" name="pound-box-outline" class="wallet-transactions__icon" />
                    <RichText size="sm">
                      <p class="text--first">{row.details.hash}</p>
                    </RichText>
                  </div>
                </div>
                <div class="wallet-transactions__details--block">
                  <RichText size="sm">
                    <p>Type:</p>
                  </RichText>
                  <RichText size="sm">
                    <p><strong>{row.details.type}</strong></p>
                  </RichText>
                </div>
                <div class="wallet-transactions__details--block">
                  <RichText size="sm">
                    <p>Status:</p>
                  </RichText>
                  <RichText size="sm">
                    <p><strong>{row.details.status}</strong></p>
                  </RichText>
                </div>
                <div class="wallet-transactions__details--block">
                  <RichText size="sm">
                    <p>Size:</p>
                  </RichText>
                  <RichText size="sm">
                    <p><strong>{row.details.size} kb</strong></p>
                  </RichText>
                </div>
              </div>
            </Datum>
          </Row>
        {/each}
      {:else}
        <div class="wallet-transactions__none">
          <RichText align="center">
            <p>It seams like there is nothing to show here, yet</p>
          </RichText>
          <img src="./no-transactions.png" alt="no transactions" />
        </div>
      {/if}
    </tbody>
  </Table>
</div>
