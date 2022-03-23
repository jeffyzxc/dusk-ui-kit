/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RichTextProps {
  /**
   * If set, this string will be parsed as Markdown and rendered as HTML.
   * @default null
   */
  markdown?: ?string;

  /**
   * Sets the size of the Rich Text.
   * @default undefined
   */
  size?: "sm" | "lg" | "xl" | "xxl";

  /**
   * Sets the alignment of the Rich Text.
   * @default "left"
   */
  align?: "left" | "center" | "right";
}

export default class RichText extends SvelteComponentTyped<
  RichTextProps,
  {},
  { default: {} }
> {}
