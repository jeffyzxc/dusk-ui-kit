<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SearchList from "@dusk-network/search-list";
</script>

<Meta
  title="Components/Organisms/Search List"
  component="{SearchList}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    multiselect: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  <SearchList/>
</Template>

<Story name="Default" args="{{}}" />
