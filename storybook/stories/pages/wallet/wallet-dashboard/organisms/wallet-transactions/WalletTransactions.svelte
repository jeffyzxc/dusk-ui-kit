<script>
  import DateText from "@dusk-network/date-text";
  import Icon from "@dusk-network/icon";
  import Table, { Row, Datum } from "@dusk-network/table";
  import RichText from "@dusk-network/rich-text";
  import LoadingIndicator from "@dusk-network/loading-indicator";
  import { number } from "svelte-i18n";

  export let transactions = [];

  const settings = {
    sortable: true,
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
        <Datum key="id" cols="1"><span>ID</span></Datum>
        <Datum key="first_name" cols="4"><span>Status</span></Datum>
        <Datum key="last_name" cols="4"><span>Time</span></Datum>
        <Datum key="email" cols="3"><span>Amount</span></Datum>
        <Datum hidden="{true}" />
      </Row>
    </thead>
    <tbody>
      {#if transactionRows}
        {#each $transactionRows as row}
          <Row>
            <Datum cols="1"><span>{row.id}</span></Datum>
            <Datum cols="4">
              <div
                class="wallet-transactions__block"
                class:wallet-transactions__block--success="{row.status.toLowerCase() ===
                  'received'}"
                class:wallet-transactions__block--warning="{row.details.status === 'Pending'}"
                class:wallet-transactions__block--danger="{row.status.toLowerCase() === 'sent' &&
                  row.details.status === null}"
              >
                {#if row.status.toLowerCase() === "sent" && row.details.status !== null}
                  <LoadingIndicator variant="warning" class="wallet-transactions__icon" />
                  <span>{row.status} ({row.details.status.toLocaleLowerCase()})</span>
                {:else}
                  <Icon
                    name="{row.status.toLowerCase() === 'sent' && row.details.status === null
                      ? 'arrow-right-circle'
                      : 'archive-arrow-down-outline'}"
                    size="sm"
                  />
                  <span>{row.status}</span>
                {/if}
              </div>
            </Datum>
            <Datum cols="4">
              <div class="wallet-transactions__block">
                <Icon name="timeline-clock-outline" size="sm" />
                <DateText time="{row.timeStamp}" />
              </div>
            </Datum>
            <Datum cols="3">
              <div class="wallet-transactions__block">
                <Icon name="dusk-ticker" size="sm" />
                <span>{$number(row.amount)}</span>
              </div>
            </Datum>
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
          <RichText>
            <p>It seams like there is nothing to show here, yet</p>
          </RichText>
          <img src="/images/no-transactions.png" alt="no transactions" />
        </div>
      {/if}
    </tbody>
  </Table>
</div>
