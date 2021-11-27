<script>
  import { charts } from "@dusk-network/helpers";
  import * as Charts from "./charts/index.js";
  import "./styles.css";

  /**
   * Used to select the chart based on type.
   */
  export let type = null;

  /**
   * The data object passed to the chart.
   */
  export let data = null;

  function getChartComponent(type) {
    let componentName = type.replace(/-([a-z,0-9])/g, function (g) {
      return g[1].toUpperCase();
    });
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    return Charts.default[componentName];
  }

  $: chart = getChartComponent(type) || null;
</script>

{#if type}
  <div
    class="{$$props.class || ''} duk-chart"
    class:duk-chart--world-map="{type === charts.WORLD_MAP}"
    style="height: {data.height}px; width: {data.width}px; overflow: hidden"
  >
    <svelte:component this="{chart}" data="{data}" />
  </div>
{/if}
