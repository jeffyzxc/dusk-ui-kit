<script>
  import { LayerCake, ScaledSvg, Html } from "layercake";
  import Heading from "@dusk-network/heading";
  import LineSvg from "./line/Line.svg.svelte";

  export let data;

  function getYDomain(groups) {
    const lowest = groups.reduce((prev, curr) => {
      return prev.price < curr.price ? prev : curr;
    });

    return [lowest.price - lowest.price * 0.1, null];
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
    y="{(d) => d[data.yKey]}"
    yDomain="{getYDomain(data.groups.filter((_, i) => i % 2 == 0))}"
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
