<script>
  import TwoColumn, { Header, Footer } from "../";
  export let variant;
</script>

<TwoColumn {variant} class="bg-warning text-dark text-sm text-center w-screen">
  <div
    slot="header"
    class="bg-white pt-5 h-32"
    style="border-bottom: 2px dashed gray">
    <p>Header Slot</p>
  </div>
  <div slot="west" class="bg-white pt-5 min-h-screen">
    <p>West Content Slot</p>
  </div>
  <div slot="east" class="bg-white pt-5 min-h-screen">
    <p>East Content Slot</p>
  </div>
  <div
    slot="footer"
    class="bg-white pt-5 h-32"
    style="border-top: 2px dashed gray">
    <p>Footer Slot</p>
  </div>
</TwoColumn>
