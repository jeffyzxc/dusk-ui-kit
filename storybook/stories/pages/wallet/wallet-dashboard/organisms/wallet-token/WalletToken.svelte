<script>
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import Button from "@dusk-network/button";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Group from "@dusk-network/group";
  import TextField from "@dusk-network/text-field";
  import RichText from "@dusk-network/rich-text";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import Heading from "@dusk-network/heading";
  import SearchList from "@dusk-network/search-list";
  import { data } from "./mock-data.js";
  import * as yup from "yup";
  import { number } from "svelte-i18n";

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
    <Heading class="header__heading--text-first">
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
      <SearchList data="{data}" fieldButton="{true}" bind:dataSearchResults="{searchResults}">
        {#if searchResults}
          {#each $searchResults as token}
            <div class="duk-search-list__item">
              <div class="duk-search-list__item--token">
                <div class="duk-search-list__item--border">
                  {#if token.image}
                    <img src="{token.image}" alt="symbol" />
                  {/if}
                </div>
                <RichText>
                  <p>{token.token}</p>
                </RichText>
              </div>
              <RichText>
                <p>{$number(token.amount, formatOptions)}</p>
              </RichText>
            </div>
          {/each}
        {/if}
      </SearchList>
    </Content>
  {:else}
    <Breadcrumb on:exit="{returnToList}">
      <Item>
        <div>Add Token</div>
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
