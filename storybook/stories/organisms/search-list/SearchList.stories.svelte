<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import SearchList from "@dusk-network/search-list";
  import RichText from "@dusk-network/rich-text";
  import { tokens } from "./data.js";
  import meta from "../../meta.js";

  let searchResults;
</script>

<Meta
  title="Components/Organisms/Search List"
  component="{SearchList}"
  parameters="{{
    layout: 'padded',
    jest: ['packages/organisms/search-list/SearchList.test.js'],
  }}"
  argTypes="{meta('organisms/search-list/SearchList', {})}"
/>

<Story name="Default" args="{{ data: tokens }}" let:args>
  <SearchList data="{args.data}" bind:dataSearchResults="{searchResults}">
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
            <p>{token.amount}</p>
          </RichText>
        </div>
      {/each}
    {/if}
  </SearchList>
</Story>

<Story name="Search List with button" args="{{ data: tokens, fieldButton: true }}" let:args>
  <SearchList
    data="{args.data}"
    fieldButton="{args.fieldButton}"
    bind:dataSearchResults="{searchResults}"
  >
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
            <p>{token.amount}</p>
          </RichText>
        </div>
      {/each}
    {/if}
  </SearchList>
</Story>
