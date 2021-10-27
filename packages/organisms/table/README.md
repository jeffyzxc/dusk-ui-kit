# Dusk UI Kit - Organism - Table

[![Storybook](https://img.shields.io/badge/Storybook-Component_Playground-%23FF4785?style=flat&logo=storybook)](https://dusk-network.github.io/dusk-ui-kit/?path=/story/components-atoms-table)
[![Docs](https://img.shields.io/badge/Documentation-%235E35CF?style=flat)](https://dusk-network.github.io/dusk-ui-kit/docs/components/atoms/table)

## Installation

```
npm i -D @dusk-network/table
```

## Usage

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=../../../examples/src/organisms/table/Table_01.svelte) -->
<!-- The below code snippet is automatically added from ../../../examples/src/organisms/table/Table_01.svelte -->
```svelte
<script>
  import Table, { Row, Datum } from "@dusk-network/table";
  import { rows } from "@dusk-network/table/stores/data.js";
  import { data } from "./data.js";

  $: settings = {
    sortable: true,
    rowPerPage: 10,
    pagination: true,
    limiter: true,
  };
</script>

<Table data="{data}" settings="{settings}">
  <h3 slot="title">Table title</h3>
  <thead slot="head">
    <Row type="head">
      <Datum key="id" cols="2">ID</Datum>
      <Datum key="first_name" cols="3">First Name</Datum>
      <Datum key="last_name" cols="3">Last Name</Datum>
      <Datum key="email" cols="4">Email</Datum>
      <Datum hidden="{true}">Extra Details</Datum>
    </Row>
  </thead>
  <tbody>
    {#each $rows as row}
      <Row>
        <Datum cols="2"><span>{row.id}</span></Datum>
        <Datum cols="3"><span>{row.first_name}</span></Datum>
        <Datum cols="3"><span>{row.last_name}</span></Datum>
        <Datum cols="4"><span>{row.email}</span></Datum>
        <Datum hidden="{true}">
          <p>Some hidden info!</p>
        </Datum>
      </Row>
    {/each}
  </tbody>
</Table>
```
<!-- MARKDOWN-AUTO-DOCS:END -->
