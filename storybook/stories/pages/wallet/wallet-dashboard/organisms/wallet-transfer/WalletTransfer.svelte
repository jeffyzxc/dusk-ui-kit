<script>
  import Address from "@dusk-network/address";
  import LoadingIndicator from "@dusk-network/loading-indicator";
  import Heading from "@dusk-network/heading";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import RichText from "@dusk-network/rich-text";
  import Button, { Label } from "@dusk-network/button";
  import TextField from "@dusk-network/text-field";
  import Icon from "@dusk-network/icon/Icon.svelte";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Toggle from "@dusk-network/toggle";
  import Group from "@dusk-network/group";
  import DropDown from "@dusk-network/drop-down";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import ProgressBar from "@dusk-network/progress-bar";
  import * as yup from "yup";
  import { number } from "svelte-i18n";

  export let availableBalance = 10000000;
  export let walletAddress =
    "0x66D30033B4E0BAF8970e9c8A0aD1D02Cc3e21115fhkllA9urdrTVbAyQZnwy0JLyvbCVZBHpzfBU87Gy4USFWaA6sZ0";

  let stepTitles = ["Enter Transaction Details", "Preparing Transaction", "Transaction Complete"];
  let currentStep;

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
    crypto: "DUSK",
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

<Card>
  <Content>
    <div style="display: {isTransfer === false ? 'block' : 'none'}">
      <Button variant="success" size="lg" block="{true}" on:click="{() => (isTransfer = true)}">
        <Icon size="lg" name="arrow-right-circle" />
        <p>TRANSFER</p>
      </Button>
    </div>
    <div style="display: {isTransfer === true ? 'block' : 'none'}">
      <Wizard
        stepCount="{noOfSteps}"
        on:exit="{() => (isTransfer = false)}"
        on:step="{(event) => (currentStep = event.detail - 1)}"
      >
        <h3 slot="title">{stepTitles[currentStep]}</h3>
        <div slot="progress-bar" let:steps let:step>
          <ProgressBar steps="{steps}" step="{step}" />
        </div>
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
            <Control width="full" label="Send" name="crypto" let:id>
              <DropDown
                id="{id}"
                disabled="{true}"
                options="{cryptoType}"
                on:select="{(e) => {
                  fields.crypto = e.detail;
                }}"
              />
            </Control>
            <Control width="full" label="Recipient address" name="address" let:id>
              <TextField
                id="{id}"
                bind:value="{fields.address}"
                multiline="{true}"
                placeholder="Enter recipient address."
              />
            </Control>
            <Control
              width="full"
              label="Amount"
              name="amount"
              message="The amount of {fields.crypto} you're sending is equivalent to $USD {$number(
                evalCurrency,
                formatOptions,
              )}"
              let:id
            >
              <TextField id="{id}" bind:value="{maskAmount}" />
              <Toggle
                slot="buttonPostfix"
                type="button"
                name="set_amount"
                id="amount"
                value="{availableBalance}"
                bind:group="{isAllBalance}"
                on:click="{setAmountAll}">All</Toggle
              >
            </Control>
            <Control width="full" label="Priority" group="{true}" name="priority">
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
            </Control>
            <Group>
              <Button variant="cta" size="lg" type="submit">Sign & Proceed</Button>
            </Group>
          </Form>
          <RichText>
            <table>
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
          </RichText>
        </Step>
        <Step number="{2}" let:next let:previous>
          {#if !preparingTransaction}
            <Heading align="center">
              <h4>You are going to send</h4>
            </Heading>
            <RichText size="xxl" align="center">
              <span>{$number(maskAmount, formatOptions)} DUSK</span>
            </RichText>
            <RichText size="sm">
              <strong>From (stealth address):</strong>
            </RichText>
            <Address>
              <strong>{walletAddress}</strong>
            </Address>
            <RichText size="sm">
              <strong>To:</strong>
            </RichText>
            <Address variant="brand">
              <p>{fields.address}</p>
            </Address>
          {/if}
          {#if transactionReady}
            <Heading variant="success" align="center">
              <h4>Transaction Ready</h4>
            </Heading>
          {/if}
          {#if preparingTransaction}
            <Heading variant="danger" align="center">
              <svelte:fragment slot="icon">
                <LoadingIndicator variant="danger" />
              </svelte:fragment>
              <h4>Preparing Transaction</h4>
            </Heading>
          {/if}
          <Group align="center">
            <Button
              variant="brand"
              size="lg"
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
                size="lg"
                disabled="{preparingTransaction}"
                on:click="{() => {
                  startTransaction();
                }}">Start Transaction</Button
              >
            {:else}
              <Button
                variant="cta"
                size="lg"
                disabled="{preparingTransaction}"
                on:click="{() => {
                  next();
                }}"
                >Send Transaction
              </Button>
            {/if}
          </Group>
        </Step>
        <Step number="{3}">
          <Heading align="center">
            <h4>You sent</h4>
            <svelte:fragment slot="icon">
              <Icon name="check-decagram-outline" />
            </svelte:fragment>
          </Heading>
          <RichText size="xxl" align="center">
            <span>{$number(maskAmount, formatOptions)} DUSK</span>
          </RichText>
          <Group align="center">
            <Button variant="brand" on:click>Wallet Overview</Button>
            <Button variant="brand" on:click>
              <Icon name="check-network-outline" />
              <Label>View Transaction</Label>
            </Button>
          </Group>
        </Step>
      </Wizard>
    </div>
  </Content>
</Card>
