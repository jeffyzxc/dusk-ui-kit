<script>
  import { LayerCake, Svg } from "layercake";
  import { feature } from "topojson-client";
  import { geoMercator as Projection, geoPath } from "d3-geo";
  // import { scaleQuantize } from 'd3-scale';
  // import { zoom } from 'd3-zoom';
  // import { format } from 'd3-format';
  import countryData from "./data/countries.json";

  export let data;

  const markers = data.markers;
  const countries = feature(countryData, countryData.objects.countries);
  const projection = Projection();

  let currentProjection = projection.scale(150).translate([data.width / 2, data.height / 2]);
  let path = geoPath().projection(currentProjection);
</script>

<LayerCake>
  <Svg>
    <svelte:fragment slot="defs">
      <pattern id="dots" x="2" y="2" width="4" height="4" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" style="stroke: none; fill: #ADADAD"></circle>
      </pattern>
    </svelte:fragment>
    <g>
      {#each countries.features as feature}
        <path d="{path(feature)}" style="fill: url(#dots)"></path>
      {/each}
    </g>
    <g>
      {#each markers as marker}
        <g>
          <circle
            on:click="{() => console.log('clicked')}"
            cx="{projection([marker.long, marker.lat])[0]}"
            cy="{projection([marker.long, marker.lat])[1]}"
            r="9"
            stroke="#7F5ED9"
            stroke-width="1"
            fill="#F5F5F5"
            style="opacity: 0.5;"
          >
          </circle>
          <circle
            cx="{projection([marker.long, marker.lat])[0]}"
            cy="{projection([marker.long, marker.lat])[1]}"
            r="7"
            fill="#7F5ED9"
          >
          </circle>
          <text
            x="{projection([marker.long, marker.lat])[0]}"
            y="{projection([marker.long, marker.lat])[1]}"
            text-anchor="middle"
            dy=".3em"
            style="font-size: 8px; fill: #FFF; letter-spacing: -1"
          >
            {marker.count}
          </text>
        </g>
      {/each}
    </g>
  </Svg>
</LayerCake>
