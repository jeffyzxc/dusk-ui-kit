<script>
  import Address from "@dusk-network/address";
  import LoadingIndicator from "@dusk-network/loading-indicator";
  import Heading from "@dusk-network/heading";
  import RichText from "@dusk-network/rich-text";
  import Button, { Label } from "@dusk-network/button";
  import TextField from "@dusk-network/text-field";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Toggle, { Group } from "@dusk-network/toggle";
  import DropDown from "@dusk-network/drop-down";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import * as yup from "yup";
  import { number } from "svelte-i18n";

  export let availableBalance = 10000000;
  export let walletAddress =
    "0x66D30033B4E0BAF8970e9c8A0aD1D02Cc3e21115fhkllA9urdrTVbAyQZnwy0JLyvbCVZBHpzfBU87Gy4USFWaA6sZ0";

  let noOfSteps = 3;
  let isTransfer = false;
  let transactionReady = false;
  let preparingTransaction = false;
  let isAllBalance = "";

  let cryptoType = ["DUSK", "wBTC", "wETH"];
  let priorities = [
    {
      id: 1,
      type: "Slow",
    },
    {
      id: 2,
      type: "Normal",
    },
    {
      id: 3,
      type: "Fast",
    },
  ];

  let tax = 0.0001;
  let rateOfExchange = 0.3;

  let submitted = false;
  let maskAmount = "";
  let fields = {
    crypto: "",
    address: "",
    amount: 0,
    priority: "Normal",
  };

  let schema = yup.object().shape({
    crypto: yup.string().required().label("Net"),
    address: yup.string().required().label("Address"),
    amount: yup.number().required().min(0.1).max(availableBalance).label("Amount"),
    priority: yup.string().required().label("Priority"),
  });

  function currency(value) {
    let numValue;
    if (value === undefined || value === null || value === "") {
      numValue = 0;
      return numValue;
    } else {
      numValue = value;
      let exchangeValue = numValue * rateOfExchange;
      return exchangeValue;
    }
  }

  function setAmountAll() {
    //on click set amount to maximum available
    if (isAllBalance === "") {
      maskAmount = availableBalance;
    } else {
      maskAmount = "";
      isAllBalance = "";
    }
  }

  function startTransaction() {
    preparingTransaction = true;
    setTimeout(() => {
      preparingTransaction = false;
      transactionReady = true;
    }, 5000);
  }

  $: evalCurrency = currency(maskAmount);
  $: transactionFee = maskAmount ? maskAmount * tax : 0;
  $: convertedTransactionFee = maskAmount ? maskAmount * tax * rateOfExchange : 0;
  $: remainingBalance = availableBalance - maskAmount > 0 ? availableBalance - maskAmount : 0;
  $: convertedBalance = availableBalance - maskAmount > 0 ? remainingBalance * rateOfExchange : 0;

  const formatOptions = { minimumFractionDigits: 0, maximumFractionDigits: 10 };
</script>

<div class="wallet-transfer">
  <div class="wallet-transfer__cta" class:visible="{isTransfer === false}">
    <Button
      variant="success"
      size="lg"
      class="wallet-transfer__cta-button"
      block="{true}"
      on:click="{() => (isTransfer = true)}"
    >
      <Icon size="lg" name="arrow-right-circle" />
      <p>TRANSFER</p>
    </Button>
  </div>
  <div class="wallet-transfer__block" class:visible="{isTransfer === true}">
    <Wizard stepCount="{noOfSteps}" on:exit="{() => (isTransfer = false)}">
      <Step number="{1}" let:next>
        <Form
          submitted="{submitted}"
          fields="{fields}"
          schema="{schema}"
          submitHandler="{() => {
            submitted = true;
            maskAmount === '' || maskAmount === null
              ? (fields.amount = 0)
              : (fields.amount = maskAmount);

            if (schema.isValidSync(fields)) {
              next();
            }
          }}"
        >
          <div class="send">
            <RichText>
              <p class="wallet-transfer__text">Send</p>
            </RichText>
            <DropDown
              options="{cryptoType}"
              on:select="{(e) => {
                fields.crypto = e.detail;
              }}"
            />
          </div>
          <div class="to">
            <RichText>
              <p class="wallet-transfer__text">To</p>
            </RichText>
            <Control width="full" name="address" let:id let:state>
              <TextField
                bind:value="{fields.address}"
                class="to__textarea"
                state="base"
                type="multi"
                placeholder="Enter recipient address."
              />
            </Control>
          </div>
          <div class="amount">
            <div class="amount--first">
              <RichText>
                <p class="wallet-transfer__text">Amount</p>
              </RichText>
            </div>
            <div class="amount--second">
              <Control width="full" name="amount" let:id let:state>
                <div class="amount__block">
                  <div class="amount__block--first">
                    <TextField
                      state="base"
                      class="amount__amount"
                      type="text"
                      bind:value="{maskAmount}"
                    />
                  </div>
                  <div class="amount__block--second">
                    <Toggle
                      type="button"
                      name="set_amount"
                      id="amount"
                      value="{availableBalance}"
                      bind:group="{isAllBalance}"
                      on:click="{setAmountAll}">All</Toggle
                    >
                  </div>
                </div>
                <p class="wallet-transfer__text--first">
                  The amount of {fields.crypto} you're sending is equivalent to $USD
                  <span>{$number(evalCurrency, formatOptions)}</span>
                </p>
              </Control>
            </div>
          </div>
          <div class="priority">
            <div class="priority--first">
              <RichText>
                <p class="wallet-transfer__text">Priority</p>
              </RichText>
            </div>
            <div class="priority--second">
              <div>
                <Group>
                  {#each priorities as priority}
                    <Toggle
                      type="button"
                      name="priority"
                      id="priority_{priority.id}"
                      value="{priority.type}"
                      bind:group="{fields.priority}"
                    >
                      {priority.type}
                    </Toggle>
                  {/each}
                </Group>
              </div>
            </div>
          </div>
          <div class="proceed">
            <Button variant="cta" size="lg" type="submit">Sign & Proceed</Button>
          </div>
          <div class="details">
            <div class="details--first">
              <table class="details__table">
                <tr>
                  <td>Gas Price</td>
                  <td>10 nDusk</td>
                </tr>
                <tr>
                  <td>Transaction Fee</td>
                  <td
                    >{$number(transactionFee, formatOptions)} DUSK - $USD {$number(
                      convertedTransactionFee,
                      formatOptions,
                    )}</td
                  >
                </tr>
                <tr>
                  <td>Remaining Balance</td>
                  <td
                    >{$number(remainingBalance, formatOptions)} DUSK - $USD {$number(
                      convertedBalance,
                      formatOptions,
                    )}</td
                  >
                </tr>
              </table>
            </div>
          </div>
          <div class="proceed-mobile">
            <Button variant="cta" size="lg" type="submit">Sign & Proceed</Button>
          </div>
        </Form>
      </Step>
      <Step number="{2}" let:next let:previous>
        <div class="prepare">
          {#if !preparingTransaction}
            <div class="prepare__amount">
              <RichText>
                <p class="wallet-transfer__text">You are going to send:</p>
              </RichText>
              <RichText size="xxl">
                <p class="wallet-transfer__text--second">
                  {$number(maskAmount, formatOptions)} DUSK
                </p>
              </RichText>
            </div>
            <div class="prepare__from">
              <RichText>
                <p class="wallet-transfer__text">From (stealth address):</p>
              </RichText>
              <Address>
                <p>{walletAddress}</p>
              </Address>
            </div>
            <div class="prepare__to">
              <RichText>
                <p class="wallet-transfer__text">To:</p>
              </RichText>
              <Address variant="brand">
                <p>{fields.address}</p>
              </Address>
            </div>
          {/if}
          <div class="prepare-transaction">
            {#if transactionReady}
              <Heading variant="success">
                <h4>Transaction Ready</h4>
              </Heading>
            {/if}
            {#if preparingTransaction}
              <Heading variant="danger">
                <svelte:fragment slot="icon">
                  <LoadingIndicator variant="danger" class="prepare-transaction__icon" />
                </svelte:fragment>
                <h4>Preparing Transaction</h4>
              </Heading>
            {/if}
          </div>
          <div class="actions">
            <Button
              variant="brand"
              size="sm"
              disabled="{preparingTransaction}"
              on:click="{() => {
                previous();
                preparingTransaction = false;
                transactionReady = false;
                submitted = false;
              }}">Cancel</Button
            >
            {#if !transactionReady && !preparingTransaction}
              <Button
                variant="cta"
                size="sm"
                disabled="{preparingTransaction}"
                on:click="{() => {
                  startTransaction();
                }}">Start Transaction</Button
              >
            {:else}
              <Button
                variant="cta"
                size="sm"
                disabled="{preparingTransaction}"
                on:click="{() => {
                  next();
                }}"
                >Send Transaction
              </Button>
            {/if}
          </div>
        </div>
      </Step>
      <Step number="{3}">
        <div class="prepare">
          <div class="prepare__amount">
            <RichText>
              <p class="wallet-transfer__text">You sent:</p>
            </RichText>
            <RichText size="xxl">
              <p class="wallet-transfer__text--second">{$number(maskAmount, formatOptions)} DUSK</p>
            </RichText>
          </div>
          <div class="prepare-transaction">
            <Icon name="check-decagram-outline" />
          </div>
          <div class="actions-transaction">
            <Button class="actions-transaction__overview" variant="brand" on:click
              >Wallet Overview</Button
            >
            <Button variant="brand" on:click>
              <Icon name="check-network-outline" />
              <Label>View Transaction</Label>
            </Button>
          </div>
        </div>
      </Step>
    </Wizard>
  </div>
</div>
