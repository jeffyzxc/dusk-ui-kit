<script>
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import DropDown from "@dusk-network/drop-down/DropDown.svelte";
  import Button from "@dusk-network/button/Button.svelte";
  import TextField from "@dusk-network/text-field/TextField.svelte";
  import RichText from "@dusk-network/rich-text";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import Heading from "@dusk-network/heading";
  import * as yup from "yup";

  let addCustom = false;
  let submitted = false;
  let networks = ["Mainnet", "Testnet", "Custom", "Option 3", "Option 4"];
  let lastBlock = "1.234.568";
  let fields = {
    networkName: "",
    rpcUrl: "",
    chainId: "",
  };
  let schema = yup.object().shape({
    networkName: yup.string().required().max(30).label("Network Name"),
    rpcUrl: yup.string().required().max(30).label("RPC URL"),
    chainId: yup.string().required().max(10).label("Chain ID"),
  });
  function formSubmit() {
    submitted = true;
    console.log("submit");
    if (schema.isValidSync(fields)) {
      submitted = false;
      alert("submit form");
    }
  }
  function returnToList() {
    addCustom = false;
    fields = {
      networkName: "",
      rpcUrl: "",
      chainId: "",
    };
  }
</script>

<div class="wallet-network">
  {#if !addCustom}
    <div class="wallet-network__connected">
      <div class="header">
        <div class="header__heading">
          <Heading class="header__heading--text-first">
            <h4>Connected Network</h4>
          </Heading>
        </div>
        <div on:click="{() => (addCustom = true)}">
          <RichText>
            <p class="header__heading--text-second">+ CUSTOM NET</p>
          </RichText>
        </div>
      </div>
      <div class="wallet-network__connected--block">
        <div>
          <DropDown options="{networks}" on:select />
        </div>
        <div>
          <p>Lastest block# : {lastBlock}</p>
        </div>
      </div>
    </div>
  {:else}
    <div class="wallet-network__custom">
      <Breadcrumb on:exit="{returnToList}">
        <Item>
          <div>Add Custom Network</div>
        </Item>
      </Breadcrumb>
      <div class="disclaimer">
        <p>
          A malicious network provider can lie about the state of the blockchain and record your
          network activity. Only add custom network you trust.
        </p>
      </div>
      <Form
        submitted="{submitted}"
        schema="{schema}"
        fields="{fields}"
        submitHandler="{formSubmit}"
      >
        <div class="custom-network">
          <Control width="full" name="networkName" let:id let:state>
            <TextField
              bind:value="{fields.networkName}"
              state="base"
              type="text"
              placeholder="Network name"
            />
          </Control>
          <Control width="full" name="rpcUrl" let:id let:state>
            <TextField
              bind:value="{fields.rpcUrl}"
              state="base"
              type="text"
              placeholder="New RPC URL"
            />
          </Control>
          <Control width="full" name="chainId" let:id let:state>
            <TextField
              bind:value="{fields.chainId}"
              state="base"
              type="text"
              placeholder="Chain ID"
            />
          </Control>
        </div>
        <div class="save">
          <Button variant="brand" block="{true}" size="base" type="submit">Save</Button>
        </div>
        <div class="save-mobile">
          <Button variant="brand" size="base" type="submit">Save</Button>
        </div>
      </Form>
    </div>
  {/if}
</div>
