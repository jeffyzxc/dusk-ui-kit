<!-- <script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SearchList from "@dusk-network/search-list";
  import RichText from "@dusk-network/rich-text";
  import { tokens }  from "./data";
</script>

<Meta
  title="Components/Organisms/Search List"
  component="{SearchList}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{}}"
/>

<Template let:args>
  <SearchList data="{args.tokens}">
    <svelte:fragment let:token slot="results">
      <div class="duk-search-list__item--token" let:token slot="results">
        <div class="duk-search-list__item--border">
            {#if token.image}
                <img src="{token.image}" alt="symbol"/>
            {/if}
        </div>
        <RichText>
            <p>{token.token}</p>
        </RichText>
      </div>
      <RichText>
          <p>{token.amount}</p>
      </RichText>
    </svelte:fragment>
  </SearchList>
</Template>

<Story name="Default" args="{{ data: tokens}}" /> -->
