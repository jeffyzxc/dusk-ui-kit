<script>
  import Pagination from "../Pagination.svelte";
  import { data } from "./data.js";
  import { writable } from "svelte/store";

  const pageNumber = writable(1);

  pageNumber.set(3);

  console.log("pn", $pageNumber);
</script>

<Pagination pageNumber="{pageNumber}" items="{data}" itemsPerPage="10" />
