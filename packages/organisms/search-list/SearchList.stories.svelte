<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SearchList from "@dusk-network/search-list";
  import RichText from "@dusk-network/rich-text";
  import { tokens }  from "./storybook/data";
</script>

<Meta
  title="Components/Organisms/Search List"
  component="{SearchList}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{}}"
/>

<Template let:args>
  <SearchList data="{tokens}">
    <svelte:fragment let:token slot='results'>
      <div class="duk-search-list__item--token">
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

<Story name="Default" args="{{}}" />
