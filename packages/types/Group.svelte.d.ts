/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GroupProps {
  /**
   * Sets the alignment of the Group.
   * @default "left"
   */
  align?: "left" | "center" | "right" | "around" | "between" | "evenly";

  /**
   * Sets the Group to use a Grid layout.
   * @default false
   */
  grid?: boolean;
}

export default class Group extends SvelteComponentTyped<
  GroupProps,
  {},
  { default: {}; labelLeft: {}; labelRight: {} }
> {}
