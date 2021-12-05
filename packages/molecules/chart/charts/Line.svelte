<script>
  import { LayerCake, ScaledSvg, Html } from "layercake";
  import Heading from "@dusk-network/heading";
  import LineSvg from "./line/Line.svg.svelte";

  export let data;

  $: filteredData = data.groups.filter((_, i) => i % 2 == 0); // Filter out ever other (odd) datapoint

  function getYDomain(groups) {
    const lowest = groups.reduce((prev, current) => {
      return prev.price < current.price ? prev : current;
    });

    const highest = groups.reduce((prev, current) => {
      return prev.price > current.price ? prev : current;
    });

    return [lowest.price - lowest.price * 0.1, highest.price + highest.price * 0.1];
  }
</script>

<div class="duk-chart duk-chart-bar-horizontal">
  <LayerCake
    ssr="{true}"
    data="{filteredData}"
    position="absolute"
    percentRange="{true}"
    padding="{{ top: 3, right: 3, bottom: 3, left: 3 }}"
    x="{data.xKey}"
    y="{(d) => d[data.yKey]}"
    yDomain="{getYDomain(filteredData)}"
  >
    {#if data.title}
      <Html>
        <Heading size="sm">
          <h2>{data.title}</h2>
        </Heading>
      </Html>
    {/if}
    <ScaledSvg>
      <LineSvg />
    </ScaledSvg>
  </LayerCake>
</div>
