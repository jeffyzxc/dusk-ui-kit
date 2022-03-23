/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeadingProps {
  /**
   * Sets the size of the Heading.
   * @default undefined
   */
  size?: "sm" | "lg";

  /**
   * Sets the variant of the Heading.
   * @default undefined
   */
  variant?: "success" | "warning" | "danger";

  /**
   * Sets the alignment of the Heading.
   * @default "left"
   */
  align?: "left" | "center" | "right";
}

export default class Heading extends SvelteComponentTyped<
  HeadingProps,
  {},
  { default: {}; button: {}; help: {}; icon: {} }
> {}
