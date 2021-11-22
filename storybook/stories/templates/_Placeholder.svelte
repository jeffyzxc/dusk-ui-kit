<script>
  import * as svgGenerator from "@cloudfour/simple-svg-placeholder";

  export let width = 1440;
  export let height = 500;
  // export let fontSize = 32;
  export let bgColor = "#261457";
  export let textColor = "#C1B1ED";
  export let text = undefined;
</script>

<img
  alt="placeholder for component"
  src="{svgGenerator({
    width,
    height,
    bgColor,
    textColor,
    text,
    // fontSize
  })}"
/>
