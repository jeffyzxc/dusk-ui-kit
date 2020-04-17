<script>
  import ThreeColumn from "../";
  export let variant;
  export let gutters;
</script>

<ThreeColumn
  {variant}
  {gutters}
  class="bg-purple-100 text-dark text-sm text-center w-screen">
  <div
    slot="header"
    class="bg-white py-5 h-32"
    style="border-bottom: 2px dashed gray">
    <p>Header Slot</p>
  </div>
  <div slot="west" class="bg-white py-5 md:h-full">
    <p>West Content Slot</p>
  </div>
  <div slot="central" class="bg-white py-5 md:h-full">
    <p>Central Content Slot</p>
  </div>
  <div slot="east" class="bg-white py-5 md:h-full">
    <p>East Content Slot</p>
  </div>
  <div
    slot="footer"
    class="bg-white pt-5 h-32"
    style="border-top: 2px dashed gray">
    <p>Footer Slot</p>
  </div>
</ThreeColumn>
