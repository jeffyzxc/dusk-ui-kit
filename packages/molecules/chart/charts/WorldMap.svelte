<script>
  import { LayerCake, ScaledSvg, Html } from "layercake";
  import { feature } from "topojson-client";
  import { geoMercator as Projection, geoPath } from "d3-geo";
  // import { scaleQuantize } from 'd3-scale';
  // import { zoom } from 'd3-zoom';
  // import { format } from 'd3-format';
  import Heading from "@dusk-network/heading";
  import countryData from "./data/countries.json";

  export let data;
  export let aspectRatio;

  const markers = data.markers;
  const countries = feature(countryData, countryData.objects.countries);
  const projection = Projection();

  // let currentProjection = projection.scale(130).center([0, 40]).translate([data.width / 2, data.height / 2]);
  let currentProjection = projection.fitSize([100, 100 / aspectRatio], countries);
  let path = geoPath().projection(currentProjection);
</script>

<div class="duk-chart duk-chart-world-map" style="padding-bottom: {100 / aspectRatio}">
  <LayerCake ssr="{true}" data="{markers}" position="absolute">
    {#if data.title}
      <Html>
        <Heading size="sm">
          <h2>{data.title}</h2>
        </Heading>
      </Html>
    {/if}
    <ScaledSvg fixedAspectRatio="{aspectRatio}">
      <svelte:fragment slot="defs">
        <pattern id="dots" x="2" y="2" width="1" height="1" patternUnits="userSpaceOnUse">
          <circle class="duk-chart-world-map__background-dot" cx="1" cy="1" r="1"></circle>
        </pattern>
      </svelte:fragment>
      <g>
        {#each countries.features as feature}
          <path d="{path(feature)}" style="fill: url(#dots)"></path>
        {/each}
      </g>
      <g>
        {#each markers as marker}
          <g on:click="{() => console.log('yo 3')}">
            <circle
              class="duk-chart-world-map__marker-background"
              cx="{projection([marker.long, marker.lat])[0]}"
              cy="{projection([marker.long, marker.lat])[1]}"
              r="13"
              on:click="{() => console.log('yo 4')}"
            >
            </circle>
            <circle
              class="duk-chart-world-map__marker-foreground"
              cx="{projection([marker.long, marker.lat])[0]}"
              cy="{projection([marker.long, marker.lat])[1]}"
              r="10"
              on:click="{() => console.log('yo 5')}"
            >
            </circle>
            <text
              class="duk-chart-world-map__marker-text"
              x="{projection([marker.long, marker.lat])[0]}"
              y="{projection([marker.long, marker.lat])[1]}"
              text-anchor="middle"
              dy=".3em"
              on:click="{() => console.log('yo 6')}"
            >
              {marker.count}
            </text>
          </g>
        {/each}
      </g>
    </ScaledSvg>
  </LayerCake>
</div>
