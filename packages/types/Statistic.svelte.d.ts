/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StatisticProps {
  /**
   * The title to be displayed with the statistic.
   * @default ""
   */
  title?: string;
}

export default class Statistic extends SvelteComponentTyped<
  StatisticProps,
  {},
  { default: {}; icon: {} }
> {}
