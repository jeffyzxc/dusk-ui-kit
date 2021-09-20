<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SearchList from "@dusk-network/search-list";
  import { tokens }  from "./storybook/data";
</script>

<Meta
  title="Components/Organisms/Search List"
  component="{SearchList}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{}}"
/>

<Template let:args>
  <SearchList data="{tokens}"></SearchList>
</Template>

<Story name="Default" args="{{}}" />
