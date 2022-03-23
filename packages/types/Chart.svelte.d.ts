/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartProps {
  /**
   * Used to select the chart based on type.
   * @default null
   */
  type?: undefined;

  /**
   * The data object passed to the chart.
   * @default null
   */
  data?: undefined;

  /**
   * Forces the aspect ratio of the chart.
   * @default null
   */
  aspectRatio?: undefined;
}

export default class Chart extends SvelteComponentTyped<ChartProps, {}, {}> {}
