/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RowProps {
  /**
   * @default null
   */
  type?: undefined;

  /**
   * @default undefined
   */
  variant?: undefined;

  /**
   * @default "__DUK-table-row" + Math.random().toString(36)
   */
  id?: string;
}

export default class Row extends SvelteComponentTyped<
  RowProps,
  {},
  { default: {} }
> {}
