# ⚛️ Three Column Template

## Variants

| Variant  | Usage                                                                  |
| -------- | ---------------------------------------------------------------------- |
| 33/33/33 | Three equal width columns                                              |
| 20/40/40 | Small western column and two equally sized central and eastern columns |
| 40/40/20 | Small eastern column and two equally sized central and western columns |

## Example

```js
<script>
  import ThreeColumn from "@dusk/three-column";
</script>

<ThreeColumn variant="33/33/33" gutters="{true}" class="bg-purple-100 text-dark text-sm text-center w-screen">
  <div slot="header" class="bg-white py-5 h-32" style="border-bottom: 2px dashed gray">
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
  <div slot="footer" class="bg-white pt-5 h-32" style="border-top: 2px dashed gray">
    <p>Footer Slot</p>
  </div>
</ThreeColumn>
```
