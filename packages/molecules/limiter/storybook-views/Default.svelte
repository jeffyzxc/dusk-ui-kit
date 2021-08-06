<script>
  import Limiter from "../Limiter.svelte";
  import { data } from "./data.js";
</script>

<Limiter items="{data}" options="{[10, 20, 30, 40, 50]}" />
