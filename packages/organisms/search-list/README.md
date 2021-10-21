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
  import { tokens } from "./data.js";
  import { searchResults } from "@dusk-network/search-list/stores/store.js";
</script>

<SearchList data="{tokens}">
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
</SearchList>
```
<!-- MARKDOWN-AUTO-DOCS:END -->
