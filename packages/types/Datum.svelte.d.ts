/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DatumProps {
  /**
   * @default undefined
   */
  variant?: undefined;

  /**
   * @default "1"
   */
  cols?: string;

  /**
   * @default undefined
   */
  dataKey?: undefined;

  /**
   * @default false
   */
  hidden?: boolean;

  /**
   * @default false
   */
  actions?: boolean;

  /**
   * @default "__DUK-table-datum" + Math.random().toString(36)
   */
  id?: string;
}

export default class Datum extends SvelteComponentTyped<
  DatumProps,
  {},
  { default: {} }
> {}
