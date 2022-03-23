/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TableProps {
  /**
   * Sets the data displayed in the Table.
   * @default []
   */
  data?: [];

  /**
   * Sets the settings available in the Table.
   * @default {}
   */
  settings?: {};

  /**
   * Sets the number of columns of the Table Row, default is 12 columns but can be extended to 24.
   * @default "12"
   */
  gridType?: string;

  /**
   * Sets Table overflow property to `scroll` dependent on the screen width breakpoint.
   * @default "md"
   */
  overflowBreakpoint?: "sm" | "lg" | "xl" | "xxl";
}

export default class Table extends SvelteComponentTyped<
  TableProps,
  {},
  { default: {}; actions: {}; foot: {}; head: {}; title: {} }
> {
  dataRows: undefined;
}
