<script>
  import { getContext } from "svelte";

  const { data, xGet, yGet, yRange } = getContext("LayerCake");

  $: columnHeight = (d) => {
    return $yRange[0] - $yGet(d);
  };
</script>

<g>
  {#each $data as d, i}
    <rect
      class="duk-chart-bar-horizontal__bar"
      data-id="{i}"
      rx="0.4"
      x="{$xGet(d)}"
      y="{$yGet(d)}"
      width="0.4"
      height="{columnHeight(d)}"
      stroke-width="{0}"
    >
      <title>{$yGet(d)}</title>
    </rect>
  {/each}
</g>
