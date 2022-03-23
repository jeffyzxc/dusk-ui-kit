/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DetailListProps {
  /**
   * Determines the split between the two columns.
   * @default "50/50"
   */
  split?: "50/50" | "25/75" | "75/25";
}

export default class DetailList extends SvelteComponentTyped<
  DetailListProps,
  {},
  { default: {} }
> {}
