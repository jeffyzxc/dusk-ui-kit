<script>
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import DropDown from "@dusk-network/drop-down";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import Group from "@dusk-network/group";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import TextField from "@dusk-network/text-field";
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

<Card>
  {#if !addCustom}
    <Heading>
      <h4>Connected Network</h4>
      <svelte:fragment slot="button">
        <Group align="right">
          <a
            href="javascript:;"
            on:click="{() => {
              addCustom = true;
            }}"
          >
            + Add Network
          </a>
        </Group>
      </svelte:fragment>
    </Heading>
    <Content>
      <Group align="between">
        <DropDown options="{networks}" on:select />
        <p>Lastest block# : {lastBlock}</p>
      </Group>
    </Content>
  {:else}
    <Breadcrumb on:exit="{returnToList}">
      <Item>
        <div>Add Network</div>
      </Item>
    </Breadcrumb>
    <Content>
      <Heading variant="danger" align="center">
        <svelte:fragment slot="icon">
          <Icon name="alert-outline" />
        </svelte:fragment>
        <h4>Warning</h4>
      </Heading>
      <RichText>
        <p>
          A malicious network provider can lie about the state of the blockchain and record your
          network activity. Only add custom network you trust.
        </p>
      </RichText>
      <Form
        submitted="{submitted}"
        schema="{schema}"
        fields="{fields}"
        submitHandler="{formSubmit}"
      >
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
        <Group align="center">
          <Button variant="brand" size="lg" type="submit">Save</Button>
        </Group>
      </Form>
    </Content>
  {/if}
</Card>
