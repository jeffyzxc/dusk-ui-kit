<script>
  import ThreeColumn, { Header, Footer } from "../";
  export let variant;
</script>

<ThreeColumn
  {variant}
  class="bg-purple-300 text-dark text-sm text-center w-screen">
  <div
    slot="header"
    class="bg-white pt-5 h-32"
    style="border-bottom: 2px dashed gray">
    <p>Header Slot</p>
  </div>
  <div slot="west" class="bg-white pt-5 min-h-screen">West Content Slot</div>
  <div slot="central" class="bg-white pt-5 min-h-screen">
    Central Content Slot
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
</ThreeColumn>
