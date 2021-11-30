<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import { charts } from "@dusk-network/helpers";
  // import Card from "@dusk-network/card";
  import Chart from "@dusk-network/chart";
  import meta from "../../meta.js";

  const data = {
    title: "Nodes: 142",
    markers: [
      { long: 5, lat: 52, count: 55 },
      { long: -78, lat: 41, count: 77 },
      { long: -70, lat: 53, count: 10 },
    ],
    height: 450,
    width: 960,
  };
</script>

<Meta
  title="Components/Molecules/Chart"
  decorators="{[withTests({ results })]}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/molecules/chart/Chart.test.js'],
  }}"
  component="{Chart}"
  argTypes="{meta('molecules/chart/Chart')}"
/>

<Story
  name="World Map"
  args="{{
    aspectRatio: 1.7,
    type: charts.WORLD_MAP,
    data: data,
  }}"
  let:args
>
  <div style="width: 526px; height: 200px">
    <Chart {...args} />
  </div>
</Story>
