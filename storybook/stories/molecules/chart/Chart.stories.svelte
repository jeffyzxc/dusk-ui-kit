<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import { charts } from "@dusk-network/helpers";
  // import Card from "@dusk-network/card";
  import Chart from "@dusk-network/chart";
  import meta from "../../meta.js";
  import { mapData, barData } from "./data.js";

  let transformedData = {};
  transformedData.title = barData.title;
  transformedData.xKey = barData.xKey;
  transformedData.yKey = barData.yKey;
  transformedData.groups = barData.groups.map((group) => {
    return {
      [barData.xKey]: group[0],
      [barData.yKey]: group[1],
    };
  });
</script>

<Meta
  title="Components/Molecules/Chart"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    // jest: ['packages/molecules/chart/Chart.test.js'],
  }}"
  component="{Chart}"
  argTypes="{meta('molecules/chart/Chart')}"
/>

<Story
  name="World Map"
  args="{{
    aspectRatio: 1.7,
    type: charts.WORLD_MAP,
    data: mapData,
  }}"
  let:args
>
  <div style="width: 100%; height: auto">
    <Chart {...args} />
  </div>
</Story>

<Story
  name="Horizontal Bar Chart"
  args="{{
    type: charts.BAR_HORIZONTAL,
    data: transformedData,
  }}"
  let:args
>
  <div style="width: 100%; height: 200px">
    <Chart {...args} />
  </div>
</Story>

<Story
  name="Line Chart"
  args="{{
    type: charts.LINE,
    data: transformedData,
  }}"
  let:args
>
  <div style="width: 100%; height: 200px">
    <Chart {...args} />
  </div>
</Story>
