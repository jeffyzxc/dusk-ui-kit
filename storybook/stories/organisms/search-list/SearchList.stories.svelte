<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import SearchList from "@dusk-network/search-list";
  import RichText from "@dusk-network/rich-text";
  import { tokens } from "./data.js";
  import { searchResults } from "@dusk-network/search-list/stores/store.js";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Organisms/Search List"
  component="{SearchList}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{meta('organisms/search-list/SearchList', {})}"
/>

<Story name="Default" args="{{ data: tokens }}" let:args>
  <SearchList data="{args.data}">
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
</Story>
