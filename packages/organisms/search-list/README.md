# Dusk UI Kit - Organism - SearchList

[![Storybook](https://img.shields.io/badge/Storybook-Component_Playground-%23FF4785?style=flat&logo=storybook)](https://dusk-network.github.io/dusk-ui-kit/?path=/story/components-atoms-search-list)
[![Docs](https://img.shields.io/badge/Documentation-%235E35CF?style=flat)](https://dusk-network.github.io/dusk-ui-kit/docs/components/atoms/search-list)

## Installation

```
npm i -D @dusk-network/search-list
```

## Usage

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=../../../examples/src/organisms/search-list/SearchList_01.svelte) -->
<!-- The below code snippet is automatically added from ../../../examples/src/organisms/search-list/SearchList_01.svelte -->
```svelte
<script>
  import SearchList from "@dusk-network/search-list";
  import RichText from "@dusk-network/rich-text";
  import DetailList, { Item } from "@dusk-network/detail-list";
  import { useQuery } from "@sveltestack/svelte-query";
  import { tokens } from "./data.js";

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
                <p>{token.amount}</p>
              </RichText>
            </svelte:fragment>
          </Item>
        {/each}
      </DetailList>
    {/if}
  </SearchList>
{/if}
```
<!-- MARKDOWN-AUTO-DOCS:END -->
