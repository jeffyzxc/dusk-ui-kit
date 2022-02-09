<script>
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import Button from "@dusk-network/button";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Group from "@dusk-network/group";
  import TextField from "@dusk-network/text-field";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import Heading from "@dusk-network/heading";
  import SearchList from "@dusk-network/search-list";
  import DetailList from "@dusk-network/detail-list";
  import RichText from "@dusk-network/rich-text";
  import * as yup from "yup";
  import { number } from "svelte-i18n";

  export let tokens = [];

  let addCustom = false;
  let submitted = false;
  let fields = {
    address: "",
    symbol: "",
    decimals: "",
  };
  let schema = yup.object().shape({
    address: yup.string().required().max(30).label("Token Contract Address"),
    symbol: yup.string().required().max(30).label("Token Symbol"),
    decimals: yup.string().required().max(10).label("Decimals"),
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
      address: "",
      symbol: "",
      decimals: "",
    };
  }

  const formatOptions = { minimumFractionDigits: 0, maximumFractionDigits: 10 };
  let searchResults;
</script>

<Card>
  {#if !addCustom}
    <Heading>
      <h4>Add Token</h4>
      <svelte:fragment slot="button">
        <Group align="right">
          <a
            href="javascript:;"
            on:click="{() => {
              addCustom = true;
            }}"
          >
            + Add Token
          </a>
        </Group>
      </svelte:fragment>
    </Heading>
    <Content>
      <SearchList data="{tokens}" fieldButton="{true}" bind:dataSearchResults="{searchResults}">
        {#if searchResults}
          <DetailList>
            {#each $searchResults as token}
              <Item>
                <svelte:fragment slot="icon">
                  {#if token.image}
                    <div>
                      <img src="{token.image}" alt="symbol" />
                    </div>
                  {/if}
                </svelte:fragment>
                <svelte:fragment slot="term">
                  <RichText>
                    <p>{token.token}</p>
                  </RichText>
                </svelte:fragment>
                <svelte:fragment slot="definition">
                  <RichText align="right">
                    <p>{$number(token.amount, formatOptions)}</p>
                  </RichText>
                </svelte:fragment>
              </Item>
            {/each}
          </DetailList>
        {/if}
      </SearchList>
    </Content>
  {:else}
    <Breadcrumb on:exit="{returnToList}">
      <Item>
        <h4>Add Token</h4>
      </Item>
    </Breadcrumb>
    <Content>
      <Form
        submitted="{submitted}"
        schema="{schema}"
        fields="{fields}"
        submitHandler="{formSubmit}"
      >
        <Control width="full" name="address" let:id let:state>
          <TextField
            bind:value="{fields.address}"
            id="{id}"
            state="{state}"
            type="text"
            placeholder="Token Contract Address"
          />
        </Control>
        <Control width="full" name="symbol" let:id let:state>
          <TextField
            bind:value="{fields.symbol}"
            id="{id}"
            state="{state}"
            type="text"
            placeholder="Token Symbol"
          />
        </Control>
        <Control width="full" name="decimals" let:id let:state>
          <TextField
            bind:value="{fields.decimals}"
            id="{id}"
            state="{state}"
            type="text"
            placeholder="Decimals (max 10)"
          />
        </Control>
        <Group align="center">
          <Button variant="brand" size="lg" type="submit">Save</Button>
        </Group>
      </Form>
    </Content>
  {/if}
</Card>
