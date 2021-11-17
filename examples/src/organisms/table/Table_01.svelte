<script>
  import Table, { Row, Datum } from "@dusk-network/table";
  import { data } from "./data.js";

  const settings = {
    sortable: true,
    rowPerPage: 10,
    pagination: true,
    limiter: true,
  };

  let rows;
</script>

<Table data="{JSON.parse(data)}" bind:dataRows="{rows}" settings="{settings}">
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
    {#if rows}
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
    {:else}
      <Row>
        <Datum cols="12">No data</Datum>
      </Row>
    {/if}
  </tbody>
</Table>
