<script>
  import OneColumn, { Header, Footer } from "../";
</script>

<OneColumn class="bg-warning text-dark text-sm text-center w-screen">
  <div
    slot="header"
    class="bg-white pt-5 h-32"
    style="border-bottom: 2px dashed gray">
    <p>Header Slot</p>
  </div>
  <div slot="central" class="bg-white p-5 min-h-screen">Content Slot</div>
  <div
    slot="footer"
    class="bg-white pt-5 h-32"
    style="border-top: 2px dashed gray">
    <p>Footer Slot</p>
  </div>
</OneColumn>
