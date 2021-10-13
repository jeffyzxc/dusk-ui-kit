<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import Pagination from "@dusk-network/pagination";
  import { data } from "./data.js";
  import { writable } from "svelte/store";
  import meta from "../../meta.js";

  const pageNumber = writable(1);
</script>

<Meta
  title="Components/Molecules/Pagination"
  decorators="{[withTests({ results })]}"
  component="{Pagination}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/pagination/Pagination.test.js'],
  }}"
  argTypes="{meta('molecules/pagination/Pagination', {})}"
/>

<Story
  name="Standard pagination with no context"
  args="{{ pageNumber: pageNumber, items: data, itemsPerPage: 10 }}"
  let:args
>
  <Pagination
    pageNumber="{args.pageNumber}"
    items="{args.items}"
    itemsPerPage="{args.itemsPerPage}"
  />
</Story>
