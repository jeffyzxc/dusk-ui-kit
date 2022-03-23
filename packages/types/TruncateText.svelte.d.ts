/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TruncateTextProps {
  /**
   * Sets the width of the component inside current container.
   * @default undefined
   */
  width?: "max" | "three-quarters" | "half" | "quarter" | "one-third";

  /**
   * Sets title attribute of the truncated text.
   * @default ""
   */
  title?: string;

  /**
   * Sets the truncate method to js slice and removes css truncate.
   * @default ""
   */
  text?: string;
}

export default class TruncateText extends SvelteComponentTyped<
  TruncateTextProps,
  {},
  { default: {} }
> {}
