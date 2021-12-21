<script>
  import SearchList from "@dusk-network/search-list";
  import RichText from "@dusk-network/rich-text";
  import { useQuery } from "@sveltestack/svelte-query";
  import { tokens } from "./data.js";
  //import { searchResults } from "@dusk-network/search-list/stores/store.js";

  let searchResults;

  async function getData() {
    return tokens;
  }

  const apiData = useQuery("content", getData);
</script>

{#if $apiData.isLoading}
  <p>Loading...</p>
{:else if $apiData.isError}
  <p>Error: {$apiData.error}</p>
{:else}
  <SearchList data="{$apiData.data}" bind:dataSearchResults="{searchResults}">
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
{/if}
