<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Pagination from "@dusk-network/pagination";
  import { data } from "./storybook/data.js";
  import { writable } from "svelte/store";

  const pageNumber = writable(1);
</script>

<Meta
  title="Components/Molecules/Pagination"
  component="{Pagination}"
  parameters="{{ layout: 'centered' }}"
  argTypes="{{
    ref: {
      table: {
        disable: true,
      },
    },
    orientation: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    items: {
      table: {
        disable: true,
      },
    },
    itemsPerPage: {
      table: {
        disable: true,
      },
    },
    pageNumber: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  <Pagination
    pageNumber="{args.pageNumber}"
    items="{args.items}"
    itemsPerPage="{args.itemsPerPage}"
  />
</Template>

<Story
  name="Standard pagination with no context"
  args="{{ pageNumber: pageNumber, items: data, itemsPerPage: 10 }}"
/>
