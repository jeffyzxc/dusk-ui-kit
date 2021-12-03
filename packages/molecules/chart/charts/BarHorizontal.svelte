<script>
  import { LayerCake, ScaledSvg, Html } from "layercake";
  import Heading from "@dusk-network/heading";
  import { scaleBand } from "d3-scale";
  import BarSvg from "./bar-horizontal/Bar.svg.svelte";

  export let data;

  function getXDomain(groups) {
    return groups.map((g) => g[data.xKey]);
  }
</script>

<div class="duk-chart duk-chart-bar-horizontal">
  <LayerCake
    ssr="{true}"
    data="{data.groups.filter((_, i) => i % 2 == 0)}"
    position="absolute"
    percentRange="{true}"
    padding="{{ top: 3, right: 3, bottom: 3, left: 3 }}"
    x="{data.xKey}"
    y="{data.yKey}"
    xScale="{scaleBand().paddingInner([0.028]).round(true)}"
    xDomain="{getXDomain(data.groups.filter((_, i) => i % 2 == 0))}"
    yDomain="{[0, null]}"
  >
    {#if data.title}
      <Html>
        <Heading size="sm">
          <h2>{data.title}</h2>
        </Heading>
      </Html>
    {/if}
    <ScaledSvg>
      <BarSvg />
    </ScaledSvg>
  </LayerCake>
</div>
